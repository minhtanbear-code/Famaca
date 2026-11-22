import React, { useState } from 'react'
import { 
  Code2, 
  Sparkles, 
  PartyPopper, 
  BookOpen, 
  Users, 
  School, 
  TrendingUp, 
  Clock, 
  Award, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  Phone, 
  Mail, 
  Globe, 
  ChevronRight, 
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Calendar,
  X,
  Menu,
  Zap,
  MapPin
} from 'lucide-react'
import { submitApplication } from './lib/supabase'

export default function App() {
  const [selectedRole, setSelectedRole] = useState('01 Đội CNTT – Web Developer')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '01 Đội CNTT – Web Developer',
    portfolio: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleRoleSelect = (roleName) => {
    setSelectedRole(roleName)
    setFormData(prev => ({ ...prev, position: roleName }))
    const formElement = document.getElementById('apply-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMessage('')
    try {
      const res = await submitApplication(formData)
      setSubmitResult(res)
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setErrorMessage('Đã xảy ra lỗi nhẹ khi gửi dữ liệu. Tuy nhiên bạn có thể liên hệ trực tiếp qua Zalo/Email bên dưới!')
    } finally {
      setSubmitting(false)
    }
  }

  const galleryImages = [
    { src: '/images/event-1.jpg', title: 'Gian hàng sách & Cô trò trường Tiểu học Chi Lăng', desc: 'Không gian Ngày hội đọc sách rực rỡ sắc màu' },
    { src: '/images/event-6.jpg', title: 'Lễ Tri ân Thầy Cô & Ngày hội Đọc Sách', desc: 'Sân khấu trang trọng cùng các đầu sách thiếu nhi chọn lọc' },
    { src: '/images/event-2.jpg', title: 'Giao lưu & Hoạt náo tương tác cùng học sinh', desc: 'Không khí sôi động và hào hứng của các bạn nhỏ' },
    { src: '/images/event-3.jpg', title: 'Học sinh chia sẻ cuốn sách yêu thích', desc: 'Khơi dậy sự tự tin và tình yêu sách cho thế hệ tương lai' },
    { src: '/images/event-5.jpg', title: 'Những nụ cười rạng rỡ của các bạn nhỏ', desc: 'Đồng hành lan tỏa tri thức đến từng lớp học' },
    { src: '/images/event-4.jpg', title: 'Cùng nhau hòa mình vào giai điệu vui tươi', desc: 'Hoạt động gắn kết tập thể đầy năng lượng' },
    { src: '/images/event-7.jpg', title: 'Đội ngũ giáo viên & Famaca đồng hành', desc: 'Sự tin cậy và gắn kết bền vững qua 18+ năm' },
    { src: '/images/event-8.jpg', title: 'Tiết mục văn nghệ chào mừng ấn tượng', desc: 'Sân khấu sinh động thu hút hàng trăm em học sinh' },
    { src: '/images/event-9.jpg', title: 'Say mê bên những trang sách mới', desc: 'Văn hóa đọc được nuôi dưỡng tự nhiên và chân thật' },
    { src: '/images/event-10.jpg', title: 'Ban tổ chức & Nhà trường chung tay', desc: 'Đưa sách chất lượng cao về tận sân trường' },
    { src: '/images/event-11.jpg', title: 'Khát vọng xây dựng tương lai đọc cho trẻ em', desc: 'Mỗi cuốn sách là một hạt mầm tri thức' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-red-800 via-rose-700 to-red-900 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center justify-center bg-yellow-400 text-red-950 font-bold px-2 py-0.5 rounded-full text-xs animate-pulse">
          HOT 🔥
        </span>
        <span>FAMACA TUYỂN DỤNG ĐỒNG ĐỘI GEN Z – Ưu tiên Web Developer & Content bứt phá thu nhập</span>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.jpg" 
              alt="FAMACA Education Group Logo" 
              className="h-12 w-auto object-contain rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform" 
            />
            <div className="hidden sm:block">
              <span className="block text-xs font-semibold uppercase tracking-widest text-slate-400">Education Group</span>
              <span className="block text-sm font-bold text-slate-800">Hạ Tầng Kết Nối Giáo Dục</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700 whitespace-nowrap">
            <a href="#about" className="hover:text-red-700 transition-colors whitespace-nowrap">Về Famaca</a>
            <a href="#impact" className="hover:text-red-700 transition-colors whitespace-nowrap">Hành trình</a>
            <a href="#roles" className="hover:text-red-700 transition-colors whitespace-nowrap">Tuyển dụng</a>
            <a href="#benefits" className="hover:text-red-700 transition-colors whitespace-nowrap">Quyền lợi</a>
            <a href="#gallery" className="hover:text-red-700 transition-colors whitespace-nowrap">Trải nghiệm</a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center">
            <a 
              href="#apply-form" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-rose-600 hover:from-red-800 hover:to-rose-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 whitespace-nowrap"
            >
              <span>Ứng Tuyển Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-red-700"
            >
              Về Famaca
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-red-700"
            >
              Hành trình
            </a>
            <a 
              href="#roles" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-red-700"
            >
              Tuyển dụng
            </a>
            <a 
              href="#benefits" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-red-700"
            >
              Quyền lợi
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-red-700"
            >
              Trải nghiệm
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a 
                href="https://zalo.me/0775986728" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center py-2 text-xs font-bold text-red-800 bg-red-50 rounded-lg"
              >
                Liên hệ Zalo: 0775.986.728
              </a>
              <a 
                href="#apply-form" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold text-white bg-red-700 rounded-lg shadow"
              >
                Ứng Tuyển Ngay
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-red-50/30">
        
        {/* Background Decorative Blur */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-200/40 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Message */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-800 text-xs sm:text-sm font-bold tracking-wide">
                <Zap className="w-4 h-4 text-red-600 fill-red-600" />
                <span>TÌM ĐỒNG ĐỘI GEN Z! TỰ DO SÁNG TẠO • THỰC CHIẾN DỰ ÁN</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
                LÀM DỰ ÁN THẬT. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-red-900">
                  TRƯỞNG THÀNH THẬT.
                </span> <br />
                BỨT PHÁ THU NHẬP!
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bạn có gu thẩm mỹ, đầu óc nhạy bén và thích làm thật – tạo giá trị thật? 
                <strong className="text-slate-900 font-semibold"> FAMACA (Famacabook)</strong> đang mở rộng quy mô và tìm những mảnh ghép Gen Z dám nghĩ – dám làm để cùng bứt tốc. Tại FAMACA, không có sếp ép khuôn – chỉ có không gian để bạn tự do bung chất sáng tạo và chủ động triển khai trên tệp khách hàng quy mô lớn.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#apply-form" 
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-red-700/25 transition-all text-base transform hover:-translate-y-0.5"
                >
                  <span>Gia Nhập Đội Ngũ Ngay</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a 
                  href="#roles" 
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-bold px-7 py-4 rounded-xl border border-slate-200 shadow-sm transition-all text-base"
                >
                  <BookOpen className="w-5 h-5 text-red-700" />
                  <span>Xem 3 Vị Trí Đang Tuyển</span>
                </a>
              </div>

              {/* Trust Tagline */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-black text-red-700">18+ Năm</div>
                  <div className="text-xs text-slate-500 font-medium">Hệ sinh thái giáo dục</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">1.4M+</div>
                  <div className="text-xs text-slate-500 font-medium">Học sinh tương tác</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">1.000+</div>
                  <div className="text-xs text-slate-500 font-medium">Trường học toàn quốc</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-rose-600">500</div>
                  <div className="text-xs text-slate-500 font-medium">Trường/Năm mục tiêu</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Event Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Featured Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img 
                    src="/images/event-1.jpg" 
                    alt="Ngày hội đọc sách Famaca" 
                    className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">Hoạt động thực tế</span>
                    <h3 className="text-lg font-bold">Ngày hội đọc sách tại trường học</h3>
                    <p className="text-xs text-slate-200">Nuôi dưỡng ước mơ và lan tỏa tình yêu sách</p>
                  </div>
                </div>

                {/* Sub Floating Card 1: IT Priority */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[260px] animate-bounce-subtle">
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-red-700 uppercase">Ưu tiên tuyển gấp</div>
                    <div className="text-sm font-bold text-slate-900">Web Developer</div>
                    <div className="text-xs text-slate-500">E-commerce Famacabook</div>
                  </div>
                </div>

                {/* Sub Floating Card 2: Income */}
                <div className="absolute -top-6 -right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-slate-100 text-center">
                  <div className="text-xs text-slate-500 font-medium">Hỗ trợ thù lao</div>
                  <div className="text-base font-black text-rose-700">50K/h – 200K/buổi</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">Lịch linh hoạt theo ca</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ABOUT FAMACA & STATS SECTION */}
      <section id="about" className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-100">
              VỀ CHÚNG TÔI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Hành Trình Lan Tỏa Văn Hóa Đọc
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Với hơn 18 năm kinh nghiệm trong hệ sinh thái giáo dục, <strong>FAMACA EDUCATION GROUP</strong> tự hào là hạ tầng kết nối và phân phối giáo dục hàng đầu Việt Nam. Chúng tôi đồng hành cùng hàng triệu học sinh và hàng ngàn nhà trường đưa những cuốn sách tinh hoa đến gần hơn với tuổi thơ.
            </p>
          </div>

          <div id="impact" className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-red-300 transition-all hover:shadow-md group">
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">18+ Năm</div>
              <div className="text-sm font-bold text-red-700 mb-2">Kinh nghiệm giáo dục</div>
              <p className="text-xs text-slate-500">Bền bỉ phụng sự và phát triển hệ sinh thái đọc sách học đường vững chắc.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-red-300 transition-all hover:shadow-md group">
              <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">1.400.000+</div>
              <div className="text-sm font-bold text-rose-700 mb-2">Học sinh tương tác</div>
              <p className="text-xs text-slate-500">Trải nghiệm các chuỗi Ngày hội đọc sách, sân chơi kiến thức và hội thảo.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-red-300 transition-all hover:shadow-md group">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <School className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">1.000+</div>
              <div className="text-sm font-bold text-amber-700 mb-2">Trường học đối tác</div>
              <p className="text-xs text-slate-500">Mạng lưới kết nối trường Mầm non, Tiểu học & THCS trên khắp các tỉnh thành.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-red-300 transition-all hover:shadow-md group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">500 Trường/Năm</div>
              <div className="text-sm font-bold text-emerald-700 mb-2">Mục tiêu tăng trưởng</div>
              <p className="text-xs text-slate-500">Mở rộng quy mô mạnh mẽ, tạo cơ hội không giới hạn cho các nhân tài trẻ.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. 3 RECRUITMENT TEAMS (CORE HIGHLIGHT) */}
      <section id="roles" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-100/70 px-3.5 py-1.5 rounded-full border border-red-200">
              JOIN OUR TEAM • GEN Z
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              3 Đội Hình Nòng Cốt Đang Tuyển
            </h2>
            <p className="text-slate-600 text-base">
              Chọn vị trí phù hợp với thế mạnh của bạn để cùng bứt tốc và tạo nên sản phẩm thực tế!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* ROLE 01: IT WEB DEV */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-red-600 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all">
              
              {/* Urgent Ribbon */}
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>ƯU TIÊN TUYỂN GẤP ⚡</span>
              </div>

              <div className="space-y-6 pt-2">
                
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center font-black text-xl border border-red-100">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">01</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">ĐỘI CNTT – WEB DEVELOPER</h3>
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider mt-1">E-Commerce & Digital System</p>
                </div>

                {/* Missions */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">NHIỆM VỤ CHÍNH</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>Tham gia xây dựng, phát triển và tối ưu hóa hệ thống website thương mại điện tử bán sách cho hệ sinh thái <strong>Famacabook</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>Xây dựng các module thanh toán, quản lý danh mục sách và luồng tương tác của phụ huynh, nhà trường.</span>
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">YÊU CẦU ỨNG VIÊN</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Sinh viên thuộc các ngành học khác nhau, có niềm yêu thích công nghệ, tư duy logic và mong muốn tham gia phát triển website. Có kiến thức hoặc kỹ năng về lập trình, thiết kế giao diện web, quản trị website hay vận hành nền tảng thương mại điện tử là một lợi thế. Ưu tiên các bạn chủ động, ham học hỏi, sáng tạo và sẵn sàng tham gia dự án thực tế.
                  </p>
                </div>

              </div>

              <div className="pt-8">
                <button 
                  onClick={() => handleRoleSelect('01 Đội CNTT – Web Developer')}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Ứng Tuyển Vị Trí IT Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* ROLE 02: CONTENT & SOCIAL MEDIA */}
            <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all">
              
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-rose-50 text-rose-700 rounded-2xl flex items-center justify-center font-black text-xl border border-rose-100">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">02</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">ĐỘI CONTENT & SOCIAL MEDIA</h3>
                  <p className="text-xs font-bold text-rose-700 uppercase tracking-wider mt-1">Tương Tác & Chuyển Đổi</p>
                </div>

                {/* Missions */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">NHIỆM VỤ CHÍNH</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>Lên ý tưởng, sáng tạo nội dung (bài viết, hình ảnh, video ngắn) và quản trị Fanpage của Famaca.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>Hướng đến tăng tương tác mới, xây dựng cộng đồng và tạo chuyển đổi thực tế trên các nền tảng mạng xã hội.</span>
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">YÊU CẦU ỨNG VIÊN</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bắt trend nhanh, viết lách có gu, am hiểu tâm lý phụ huynh và học sinh. Biết quay/dựng video cơ bản (CapCut, Premiere, Canva) là điểm cộng cực lớn.
                  </p>
                </div>

              </div>

              <div className="pt-8">
                <button 
                  onClick={() => handleRoleSelect('02 Đội Content & Social Media')}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Ứng Tuyển Vị Trí Content</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* ROLE 03: EVENT PLANNER */}
            <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all">
              
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center font-black text-xl border border-amber-100">
                    <PartyPopper className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">03</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">ĐỘI EVENT PLANNER</h3>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-1">Sự Kiện Trải Nghiệm</p>
                </div>

                {/* Missions */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">NHIỆM VỤ CHÍNH</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Lên kế hoạch, thiết kế và tổ chức hoạt động trải nghiệm ý nghĩa, mới mẻ cho học sinh Mầm non, Tiểu học và THCS.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Trực tiếp điều phối và dẫn dắt các hoạt động trong chuỗi Ngày hội đọc sách thường niên tại các trường học.</span>
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">YÊU CẦU ỨNG VIÊN</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nhiệt huyết, yêu trẻ em, có tư duy tổ chức sự kiện, giao tiếp tốt và khả năng hoạt náo, kết nối năng lượng cho đám đông.
                  </p>
                </div>

              </div>

              <div className="pt-8">
                <button 
                  onClick={() => handleRoleSelect('03 Đội Event Planner')}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Ứng Tuyển Vị Trí Sự Kiện</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. GEN Z BENEFITS & ENVIRONMENT */}
      <section id="benefits" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/80 px-3.5 py-1.5 rounded-full border border-red-800">
              YOUR NEXT MOVE STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black">
              Quyền Lợi & Cơ Hội Phát Triển Độc Bản
            </h2>
            <p className="text-slate-400 text-base">
              Tại FAMACA, không có sếp ép khuôn – chỉ có không gian để bạn tự do bung chất sáng tạo và chứng minh năng lực thực chiến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl hover:border-red-500/50 transition-all hover:bg-slate-800">
              <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center mb-5 font-black text-lg">
                01
              </div>
              <h3 className="text-lg font-bold mb-2">Thu Nhập & Thù Lao</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Hỗ trợ từ <strong className="text-red-400 font-bold">50.000đ/giờ – 200.000đ/buổi</strong> (linh hoạt theo ca, đặc biệt với mảng sự kiện); thỏa thuận theo năng lực dự án đối với team IT & Content.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl hover:border-red-500/50 transition-all hover:bg-slate-800">
              <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-xl flex items-center justify-center mb-5 font-black text-lg">
                02
              </div>
              <h3 className="text-lg font-bold mb-2">Gắn Bó Dài Hạn</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Những bạn làm việc hiệu quả, muốn đồng hành lâu dài sẽ được mời phỏng vấn trực tiếp để xét <strong className="text-rose-400 font-bold">mức lương cứng chính thức</strong> và các vị trí nòng cốt/quản lý.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl hover:border-red-500/50 transition-all hover:bg-slate-800">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-5 font-black text-lg">
                03
              </div>
              <h3 className="text-lg font-bold mb-2">CV & Chứng Nhận</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nhận <strong className="text-amber-400 font-bold">chứng nhận Đại sứ Văn hóa đọc</strong>, tích lũy kinh nghiệm dự án thực chiến để làm đẹp CV.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl hover:border-red-500/50 transition-all hover:bg-slate-800">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-5 font-black text-lg">
                04
              </div>
              <h3 className="text-lg font-bold mb-2">Lịch Làm Việc Linh Hoạt</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-emerald-400 font-bold">Xoay ca dễ dàng</strong>, tạo điều kiện thuận lợi nhất để sinh viên thu xếp thời gian làm việc phù hợp với lịch học và thi cử trên trường.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. REAL EVENT GALLERY */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
              HÌNH ẢNH HOẠT ĐỘNG THỰC TẾ
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              Cùng Tạo Nên Những Trải Nghiệm Đáng Nhớ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Những khoảnh khắc tuyệt vời từ các chuỗi Ngày hội đọc sách tại các trường học trên toàn quốc. Nhấp vào ảnh để xem chi tiết.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setPreviewImage(img)}
                className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-slate-100 bg-slate-100"
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <p className="text-xs font-bold line-clamp-1">{img.title}</p>
                  <p className="text-[11px] text-slate-300 line-clamp-1">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL LIGHTBOX FOR GALLERY */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={previewImage.src} 
              alt={previewImage.title} 
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 bg-slate-900 text-white">
              <h4 className="text-lg font-bold text-red-400">{previewImage.title}</h4>
              <p className="text-sm text-slate-300 mt-1">{previewImage.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 8. APPLICATION FORM SECTION */}
      <section id="apply-form" className="py-20 bg-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Form Header Banner */}
            <div className="bg-gradient-to-r from-red-700 via-rose-700 to-red-800 p-8 sm:p-10 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-300 bg-red-900/40 px-3 py-1 rounded-full border border-red-500/30">
                SẴN SÀNG GIA NHẬP FAMACA?
              </span>
              <h2 className="text-2xl sm:text-4xl font-black mt-2">Ứng Tuyển Ngay Hôm Nay</h2>
              <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl">
                Điền thông tin bên dưới hoặc gửi CV/Portfolio trực tiếp. FAMACA luôn chào đón những người bạn đồng hành nhiệt huyết và dám dấn thân!
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8 sm:p-10">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Nộp Hồ Sơ Thành Công!</h3>

                  {submitResult?.needsActivation ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left space-y-3 max-w-lg mx-auto shadow-sm">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                        <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                        <span>Bước xác thực 1 lần duy nhất cho quản trị viên:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Dịch vụ email FormSubmit vừa gửi một thư xác nhận tới hòm thư <strong>minhtanbear@gmail.com</strong> (tiêu đề <em>"Action Required: Activate Form"</em>).
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Bạn chỉ cần mở Gmail và bấm nút <strong>"Activate Form"</strong> trong email đó 1 lần duy nhất. Sau đó, toàn bộ hồ sơ từ website sẽ bay thẳng vào hộp thư của bạn!
                      </p>
                      <div className="pt-2 flex flex-wrap gap-3">
                        <a 
                          href="https://mail.google.com" 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Mở Gmail kiểm tra ngay</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                      Thông tin ứng tuyển của bạn đã được tiếp nhận và chuyển trực tiếp tới email quản trị viên: <strong className="text-red-700">minhtanbear@gmail.com</strong>. Ban tuyển dụng sẽ liên hệ lại với bạn qua Zalo/Điện thoại trong vòng 24 - 48 giờ làm việc.
                    </p>
                  )}

                  <div className="pt-2">
                    <button 
                      onClick={() => {
                        setSubmitted(false)
                        setSubmitResult(null)
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          position: '01 Đội CNTT – Web Developer',
                          portfolio: '',
                          message: ''
                        })
                      }}
                      className="text-xs font-bold text-red-700 hover:text-red-800 underline"
                    >
                      Gửi thêm một hồ sơ khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Họ và tên *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Số điện thoại / Zalo *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="09xx xxx xxx"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email liên hệ *
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tenban@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Vị trí mong muốn ứng tuyển *
                      </label>
                      <select 
                        value={formData.position}
                        onChange={e => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white font-medium"
                      >
                        <option value="01 Đội CNTT – Web Developer">01 Đội CNTT – Web Developer (Ưu tiên)</option>
                        <option value="02 Đội Content & Social Media">02 Đội Content & Social Media</option>
                        <option value="03 Đội Event Planner">03 Đội Event Planner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Link CV / Portfolio / Facebook cá nhân
                    </label>
                    <input 
                      type="url"
                      value={formData.portfolio}
                      onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://drive.google.com/... hoặc github.com/..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white"
                    />
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Đính kèm link Drive, Behance, GitHub hoặc Facebook để FAMACA hiểu hơn về bạn.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Giới thiệu ngắn & Khung giờ bạn có thể làm việc
                    </label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Kinh nghiệm của bạn, các dự án từng tham gia, hoặc thời gian rảnh rỗi trong tuần..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-red-700 via-rose-600 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <span>Gửi Hồ Sơ Ứng Tuyển</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                </form>
              )}

              {/* Direct Contacts Info */}
              <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Trụ sở làm việc</span>
                  </div>
                  <p><strong>Địa chỉ:</strong> 46 Út Tịch, Tân Sơn Nhất, TP. Hồ Chí Minh</p>
                  <p className="text-[11px] text-slate-500 mt-1">Không gian làm việc sáng tạo & phỏng vấn trực tiếp</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-red-700 shrink-0" />
                    <span>Gửi trực tiếp qua Email</span>
                  </div>
                  <p><strong>Email chính:</strong> minhtanbear@gmail.com</p>
                  <p><strong>Email công ty:</strong> famacabook@gmail.com</p>
                  <p><strong>Tiêu đề:</strong> [Vị trí] – [Họ tên] – [SĐT]</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hỗ trợ Zalo (Ưu tiên Team IT)</span>
                  </div>
                  <p><strong>Người liên hệ:</strong> Hỗ trợ Tuyển dụng</p>
                  <p><strong>Zalo / Điện thoại:</strong> 0775.986.728</p>
                  <p className="text-[11px] text-slate-500 mt-1">Giải đáp thắc mắc dự án 24/7</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo.jpg" 
                  alt="FAMACA Logo" 
                  className="h-10 w-auto rounded bg-white p-1"
                />
                <span className="text-lg font-black text-white tracking-wide">FAMACA EDUCATION GROUP</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Hạ Tầng Kết Nối & Phân Phối Giáo Dục Hàng Đầu Việt Nam. 18+ năm đồng hành cùng nhà trường, phụ huynh và học sinh nuôi dưỡng văn hóa đọc bền vững.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-300">
                <a href="https://www.famacabook.com" target="_blank" rel="noreferrer" className="hover:text-red-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> www.famacabook.com
                </a>
                <span>•</span>
                <a href="https://famacaeducation.com" target="_blank" rel="noreferrer" className="hover:text-red-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> famacaeducation.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">Vị Trí Tuyển Dụng</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#roles" className="hover:text-white">Đội CNTT – Web Developer (Tuyển gấp)</a></li>
                <li><a href="#roles" className="hover:text-white">Đội Content & Social Media</a></li>
                <li><a href="#roles" className="hover:text-white">Đội Event Planner Sự Kiện</a></li>
                <li><a href="#benefits" className="hover:text-white">Quy chế thù lao & Lịch xoay ca</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">Liên Hệ Tuyển Dụng</h4>
              <div className="space-y-2 text-xs text-slate-300">
                <p>📍 <strong>Trụ sở:</strong> 46 Út Tịch, Tân Sơn Nhất, TP. Hồ Chí Minh</p>
                <p>📞 <strong>Hotline/Zalo:</strong> 0775.986.728</p>
                <p>✉️ <strong>Email nhận CV:</strong> minhtanbear@gmail.com / famacabook@gmail.com</p>
                <p>🕒 <strong>Giờ làm việc:</strong> Hỗ trợ giải đáp 24/7 cho ứng viên sinh viên</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} FAMACA Education Group. All rights reserved.</p>
            <p>Designed with Antigravity AI • Deployed on Vercel & Supabase</p>
          </div>

        </div>
      </footer>

    </div>
  )
}
