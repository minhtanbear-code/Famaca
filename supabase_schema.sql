-- ====================================================================
-- FAMACA EDUCATION GROUP - SUPABASE DATABASE SCHEMA (100% MIỄN PHÍ)
-- Cách dùng: Vào supabase.com -> Chọn Project -> SQL Editor -> Dán và Chạy (Run)
-- ====================================================================

-- 1. Bảng lưu trữ ứng viên nộp hồ sơ trực tuyến (Candidates)
CREATE TABLE IF NOT EXISTS public.candidates (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    position TEXT NOT NULL,
    portfolio TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Kích hoạt Row Level Security (RLS) để bảo vệ dữ liệu
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- Cho phép khách truy cập (anon) có thể gửi đơn ứng tuyển vào website
CREATE POLICY "Cho phép khách nộp đơn ứng tuyển" 
ON public.candidates 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Chỉ người quản trị có quyền xem danh sách ứng viên
CREATE POLICY "Chỉ ban quản trị xem danh sách ứng viên" 
ON public.candidates 
FOR SELECT 
TO authenticated 
USING (true);
