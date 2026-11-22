import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
export const TARGET_EMAIL = 'minhtanbear@gmail.com'

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Gửi thông tin ứng tuyển:
 * 1. Gửi trực tiếp đến email minhtanbear@gmail.com qua FormSubmit AJAX API
 * 2. Tự động nhận diện trạng thái kích hoạt (Needs Activation)
 * 3. Lưu bản sao vào LocalStorage
 * 4. Lưu vào Supabase PostgreSQL (nếu đã cấu hình)
 */
export async function submitApplication(data) {
  let emailSent = false
  let needsActivation = false
  let responseMessage = ''

  // 1. GỬI TRỰC TIẾP QUA FormSubmit AJAX API
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Họ và tên ứng viên': data.fullName,
        'Số điện thoại / Zalo': data.phone,
        'Email liên hệ': data.email,
        'Vị trí ứng tuyển': data.position,
        'Link CV / Portfolio': data.portfolio || 'Chưa cung cấp',
        'Lời nhắn & Thời gian làm việc': data.message || 'Không có',
        'Thời gian gửi': new Date().toLocaleString('vi-VN'),
        '_subject': `🔥 [FAMACA ỨNG VIÊN] ${data.fullName} - ${data.position} (${new Date().toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit', second:'2-digit'})})`,
        '_template': 'table',
        '_captcha': 'false'
      })
    })

    const result = await res.json()
    responseMessage = result.message || ''

    if (result.success === 'true' || result.success === true) {
      emailSent = true
    } else if (responseMessage.toLowerCase().includes('activation')) {
      needsActivation = true
    }
  } catch (err) {
    console.warn('FormSubmit network notice:', err)
  }

  // 2. LƯU BẢN SAO VÀO LOCALSTORAGE
  try {
    const existing = JSON.parse(localStorage.getItem('famaca_applications') || '[]')
    existing.unshift({
      ...data,
      sentToEmail: TARGET_EMAIL,
      createdAt: new Date().toISOString()
    })
    localStorage.setItem('famaca_applications', JSON.stringify(existing))
  } catch (e) {
    console.warn('LocalStorage save warning:', e)
  }

  // 3. ĐẨY LÊN SUPABASE DATABASE (NẾU ĐÃ CẤU HÌNH)
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('candidates').insert([
        {
          full_name: data.fullName,
          phone: data.phone,
          email: data.email,
          position: data.position,
          portfolio: data.portfolio || '',
          message: data.message || '',
          created_at: new Date().toISOString()
        }
      ])
    } catch (dbErr) {
      console.warn('Supabase insert warning:', dbErr)
    }
  }

  return { 
    success: true, 
    emailSent, 
    needsActivation, 
    responseMessage,
    targetEmail: TARGET_EMAIL 
  }
}
