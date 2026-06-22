import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { contactInfo, socials } from '../data/contact'

// ---- EmailJS config -------------------------------------------------
// Sign up free at https://www.emailjs.com, create an Email Service and
// an Email Template, then paste your 3 IDs below. Until then, the form
// will show a friendly error instead of actually sending.
const EMAILJS_SERVICE_ID = 'service_oapamkd'
const EMAILJS_TEMPLATE_ID = 'template_voa1di5'
const EMAILJS_PUBLIC_KEY = 'oiUXB44XvGQgOiPrq'
// ----------------------------------------------------------------------

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  'Twitter / X': FaXTwitter,
}

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      if (EMAILJS_SERVICE_ID.startsWith('YOUR_')) {
        // Config not set up yet -- don't pretend it worked
        throw new Error('EmailJS not configured')
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen px-5 sm:px-7 py-10">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          Let's <span className="text-accent">work together</span>
        </h1>
        <p className="text-sm text-white/35 max-w-md">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
        {/* Left: form */}
        <motion.div {...fadeUp}>
          <p className="text-[11px] tracking-wider uppercase text-white/30 mb-4">Send a message</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-white/35">Your Full name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-white/35">Your email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-white/35">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project enquiry / just saying hi"
                className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-white/35">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me a bit about what you have in mind..."
                className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 bg-accent text-white rounded-md py-3 text-sm mt-1 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <FiSend size={14} />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-xs text-accent">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400">
                Couldn't send right now — feel free to email me directly at {contactInfo.email}.
              </p>
            )}
          </form>
        </motion.div>

        {/* Right: info panel */}
        <div className="flex flex-col gap-7">
          {contactInfo.available && (
            <motion.div
              {...fadeUp}
              className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-accent/25 bg-accent/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <p className="text-xs text-white/50">
                <span className="text-accent font-medium">Available</span> for freelance & full-time roles
              </p>
            </motion.div>
          )}

          <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.08 }}>
            <p className="text-[11px] tracking-wider uppercase text-white/30 mb-3">Contact info</p>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="w-9 h-9 min-w-[36px] rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FiMail size={15} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-white/30">Email</p>
                  <p className="text-sm text-white/65 truncate">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="w-9 h-9 min-w-[36px] rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FiPhone size={15} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-white/30">Phone</p>
                  <p className="text-sm text-white/65 truncate">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="w-9 h-9 min-w-[36px] rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FiMapPin size={15} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-white/30">Location</p>
                  <p className="text-sm text-white/65 truncate">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.16 }}>
            <p className="text-[11px] tracking-wider uppercase text-white/30 mb-3">Find me on</p>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.name]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-white/45 hover:text-white hover:border-accent/40 transition-colors"
                  >
                    {Icon && <Icon size={15} className="text-accent shrink-0" />}
                    <span className="truncate">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}