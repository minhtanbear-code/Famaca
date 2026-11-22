import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const TARGET_EMAIL = 'minhtanbear@gmail.com'

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Gửi thông tin ứng tuyển:
 * 1. Gửi trực tiếp đến email minhtanbear@gmail.com (Miễn phí 100% qua FormSubmit API)
 * 2. Lưu vào Supabase PostgreSQL database (nếu đã kết nối)
 * 3. Lưu bản sao vào LocalStorage máy khách
 */
export async function submitApplication(data) {
  let emailSent = false
  let emailError = null

  // 1. GỬI TRỰC TIẾP QUA EMAIL minhtanbear@gmail.com
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
        '_subject': `🔥 [FAMACA ỨNG VIÊN MỚI] ${data.fullName} - ${data.position}`,
        '_template': 'table',
        '_captcha': 'false'
      })
    })

    const result = await res.json()
    if (result.success === 'true' || result.success === true) {
      emailSent = true
    }
  } catch (err) {
    console.warn('Gửi qua FormSubmit email lỗi hoặc đang kích hoạt lần đầu:', err)
    emailError = err
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

  // 3. ĐẨY LÊN SUPABASE DATABASE (NẾU CÓ)
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

  return { success: true, emailSent, targetEmail: TARGET_EMAIL }
}
