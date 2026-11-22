import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Gửi thông tin ứng tuyển
 */
export async function submitApplication(data) {
  // Luôn lưu bản sao vào localStorage để không bao giờ mất dữ liệu người dùng
  try {
    const existing = JSON.parse(localStorage.getItem('famaca_applications') || '[]')
    existing.unshift({ ...data, createdAt: new Date().toISOString() })
    localStorage.setItem('famaca_applications', JSON.stringify(existing))
  } catch (e) {
    console.warn('LocalStorage save warning:', e)
  }

  // Nếu đã cấu hình Supabase -> đẩy lên database
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('candidates').insert([
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
    if (error) {
      console.error('Supabase insert error:', error)
      throw error
    }
  }

  return { success: true }
}
