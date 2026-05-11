"use client";
import { useState, useEffect } from "react";
import {
  Menu, X, Bot, Code2, Megaphone, Globe, Smartphone, Brain,
  GraduationCap, Users, Trophy, ArrowRight, Mail, Phone,
  MapPin, ChevronDown, Star, Zap, Shield, TrendingUp,
  BookOpen, Briefcase, Monitor, Send
} from "lucide-react";

const NAV_LINKS = ["About", "Courses", "Services", "Portfolio", "Blog", "Contact"];

const COURSES = [
  { icon: Brain, title: "AI Tools Mastery", desc: "ChatGPT, Midjourney, Canva AI, automation workflows for real-world use.", tag: "Trending", color: "text-orange-400" },
  { icon: Code2, title: "Web Development", desc: "HTML, CSS, JavaScript, React and Next.js — build modern websites from scratch.", tag: "Popular", color: "text-amber-400" },
  { icon: Smartphone, title: "App Development", desc: "Build Android and iOS apps using Flutter. No prior experience needed.", tag: "New", color: "text-orange-300" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media, Google Ads, Meta Ads — grow any business online.", tag: "Hot", color: "text-red-400" },
  { icon: Monitor, title: "Computer Basics", desc: "MS Office, typing, internet, email — essential skills for every job.", tag: "Foundation", color: "text-amber-300" },
  { icon: Globe, title: "Online Services", desc: "PAN, Aadhaar, passport, railway, government portal services.", tag: "Useful", color: "text-orange-400" },
];

const SERVICES = [
  { icon: Globe, title: "Website Development", desc: "Fast, modern websites for local businesses, clinics, hotels, and shops." },
  { icon: Smartphone, title: "App Development", desc: "Custom Android and web apps tailored for small and medium businesses." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Google My Business, social media management, local SEO and paid ads." },
  { icon: Bot, title: "AI Integration", desc: "Add AI-powered chat, automation, and smart tools to your business." },
  { icon: Shield, title: "Online Services", desc: "All government portal services — PAN, GST, Aadhaar, passport, more." },
  { icon: TrendingUp, title: "Business Branding", desc: "Logo, visiting card, social media kit, and complete brand identity." },
];

const PORTFOLIO = [
  { title: "Local Restaurant Website", cat: "Web Dev", img: "🍽️" },
  { title: "Medical Clinic App", cat: "App Dev", img: "🏥" },
  { title: "Kirana Store Branding", cat: "Branding", img: "🛒" },
  { title: "CA Firm Website", cat: "Web Dev", img: "📊" },
  { title: "School Management Portal", cat: "Web Dev", img: "🏫" },
  { title: "Real Estate Landing Page", cat: "Digital Mktg", img: "🏠" },
];

const BLOGS = [
  { title: "How AI is changing small businesses in India", date: "May 2025", read: "4 min", tag: "AI" },
  { title: "5 ways to get your local shop on Google for free", date: "Apr 2025", read: "3 min", tag: "SEO" },
  { title: "Why every student should learn AI tools in 2025", date: "Apr 2025", read: "5 min", tag: "Career" },
];

const STATS = [
  { icon: Users, value: "500+", label: "Students Trained" },
  { icon: Trophy, value: "3+", label: "Years Experience" },
  { icon: Briefcase, value: "50+", label: "Businesses Served" },
  { icon: Star, value: "4.9", label: "Google Rating" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center">
              <Zap size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide text-white leading-none">BALAJI AI LAB</p>
              <p className="text-[10px] text-orange-400 tracking-widest leading-none mt-0.5">balajiailab.in</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{l}</button>
            ))}
            <button onClick={() => scrollTo("Contact")} className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-lg transition-colors">
              Enroll Now
            </button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/5 px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-sm text-gray-300 hover:text-orange-400 text-left transition-colors">{l}</button>
            ))}
            <button onClick={() => scrollTo("Contact")} className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg w-fit">Enroll Now</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6">
            <Bot size={12} />
            Gorakhpur&apos;s First AI-Powered Institute
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Where Small Towns
            <br />
            <span className="text-orange-500">Meet Big Technology</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn AI, Web Development, Digital Marketing and App Development. We also help local businesses go digital — websites, apps, branding and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => scrollTo("Courses")} className="px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all flex items-center gap-2 justify-center">
              Explore Courses <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo("Services")} className="px-7 py-3.5 border border-white/10 hover:border-orange-500/40 text-gray-300 font-medium rounded-xl transition-all">
              Our Services
            </button>
          </div>
        </div>
        <div className="relative mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto w-full">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center hover:border-orange-500/20 transition-colors">
              <Icon size={20} className="text-orange-400 mx-auto mb-2" />
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scrollTo("About")} className="relative mt-12 text-gray-600 hover:text-orange-400 transition-colors animate-bounce">
          <ChevronDown size={24} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                Apne Shehar Ka<br /><span className="text-orange-500">Digital Future</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Balaji AI Lab is Gorakhpur&apos;s most forward-looking computer institute and digital services hub. We don&apos;t just teach — we transform. Students become job-ready. Local businesses go digital. Communities grow.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From basic computer skills to cutting-edge AI tools, from government portal services to full website development — we are your one-stop digital partner in Eastern UP.
              </p>
              <div className="flex flex-col gap-3">
                {["Practical, hands-on learning — not just theory", "AI-first curriculum updated every 3 months", "Real projects, real clients, real experience"].map(p => (
                  <div key={p} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                    </div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2022", sub: "In Gorakhpur" },
                { label: "Courses", value: "12+", sub: "Active programs" },
                { label: "Placement", value: "85%", sub: "Job placement rate" },
                { label: "Batches", value: "Daily", sub: "Morning & evening" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/20 transition-colors">
                  <p className="text-3xl font-black text-orange-400">{value}</p>
                  <p className="text-sm font-semibold text-white mt-1">{label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-24 px-5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Teach</p>
            <h2 className="text-3xl md:text-4xl font-black">Our <span className="text-orange-500">Courses</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Job-ready skills for the digital economy. Every course is practical, project-based, and updated regularly.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map(({ icon: Icon, title, desc, tag, color }) => (
              <div key={title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/20 hover:bg-orange-500/[0.02] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Icon size={20} className={color} />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-medium">{tag}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                <button className="mt-4 text-orange-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => scrollTo("Contact")} className="px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all inline-flex items-center gap-2">
              Enquire About Admission <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-black">Digital <span className="text-orange-500">Services</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">We help local businesses in Gorakhpur and Eastern UP get a strong digital presence and grow online.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/20 hover:bg-orange-500/[0.02] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon size={20} className="text-orange-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-black">Recent <span className="text-orange-500">Projects</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Real work done for real clients. Every project is built with modern tech and local understanding.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map(({ title, cat, img }) => (
              <div key={title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-orange-500/20 transition-all group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-orange-500/10 to-amber-500/5 flex items-center justify-center text-5xl group-hover:from-orange-500/20 transition-all">
                  {img}
                </div>
                <div className="p-5">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-medium">{cat}</span>
                  <h3 className="text-sm font-bold text-white mt-3">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Knowledge Hub</p>
            <h2 className="text-3xl md:text-4xl font-black">Latest <span className="text-orange-500">Articles</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Practical tips on AI, digital marketing, and technology — written for Indian audiences.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOGS.map(({ title, date, read, tag }) => (
              <div key={title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/20 hover:bg-orange-500/[0.02] transition-all group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-medium">{tag}</span>
                </div>
                <h3 className="text-sm font-bold text-white leading-snug mb-4 group-hover:text-orange-300 transition-colors">{title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><BookOpen size={12} />{read} read</span>
                  <span>·</span>
                  <span>{date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-500/20 rounded-3xl p-10 text-center">
          <GraduationCap size={36} className="text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black mb-3">Ready to start your digital journey?</h2>
          <p className="text-gray-400 mb-7 max-w-lg mx-auto">Join 500+ students who have already transformed their careers with Balaji AI Lab.</p>
          <button onClick={() => scrollTo("Contact")} className="px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all inline-flex items-center gap-2">
            Get Free Counselling <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-black">Contact <span className="text-orange-500">Us</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Have a question about courses or services? We reply within a few hours.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+91 XXXXX XXXXX" },
                { icon: Mail, label: "Email", value: "hello@balajiailab.in" },
                { icon: MapPin, label: "Location", value: "Gorakhpur, Uttar Pradesh" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
              <div className="p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <p className="text-sm font-semibold text-white mb-1">Working Hours</p>
                <p className="text-sm text-gray-400">Mon – Sat: 8:00 AM – 8:00 PM</p>
                <p className="text-sm text-gray-400">Sunday: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                    <Send size={24} className="text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-400">We will get back to you within a few hours on WhatsApp or email.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Full Name</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your name" className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/40" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Phone / WhatsApp</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/40" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Email (optional)</label>
                    <input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/40" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1.5 block">Message</label>
                    <textarea required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Which course or service are you interested in?" className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/40 resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.05] py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <p className="text-sm font-bold text-white">BALAJI AI LAB</p>
          </div>
          <p className="text-xs text-gray-600">© 2025 Balaji AI Lab. All rights reserved. · Gorakhpur, UP</p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Sitemap"].map(l => (
              <a key={l} href="#" className="text-xs text-gray-600 hover:text-orange-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
