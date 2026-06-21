import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
emailjs.init('1HYQMIE8NI3eQYoCs')

function ContactCard({ item }) {
    let inner = (
        <div className="flex items-center gap-3 h-full">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${item.color} ${item.bg}`}>
                {item.icon}
            </div>
            <div className="min-w-0">
                <div className="text-faint-fg text-[10px] uppercase tracking-widest mb-0.5">{item.label}</div>
                <div className="text-foreground font-semibold text-sm truncate group-hover:text-accent transition-colors">{item.value}</div>
            </div>
        </div>
    )

    return (
        <div className="flex-1 glass border border-theme-border rounded-xl px-4 py-3 card-hover group min-h-0">
            {item.href
                ? <a href={item.href} target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'} rel="noreferrer" className="flex h-full">{inner}</a>
                : inner
            }
        </div>
    )
}

function Contact() {
    let nameRef = useRef()
    let emailRef = useRef()
    let subjectRef = useRef()
    let messageRef = useRef()
    let [loading, setLoading] = useState(false)
    let [sent, setSent] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send(
                'service_qufcvfh',
                'template_nsb9p2u',
                {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    subject: subjectRef.current.value,
                    message: messageRef.current.value,
                },
                '1HYQMIE8NI3eQYoCs'
            )
            setSent(true)
            nameRef.current.value = ''
            emailRef.current.value = ''
            subjectRef.current.value = ''
            messageRef.current.value = ''
            setTimeout(() => setSent(false), 3000)
        } catch (error) {
            console.log(error)
            alert("Something went wrong. Please try again.")
        }
        setLoading(false)
    }

    let contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'hamzabilal.cs.pk@gmail.com', href: 'mailto:hamzabilal.cs.pk@gmail.com', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20' },
        { icon: <FaPhone />, label: 'Phone', value: '+92 334 7348886', href: 'tel:+923347348886', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20' },
        { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/hamzabilalcs', href: 'https://linkedin.com/in/hamzabilalcs', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500/20' },
        { icon: <FaGithub />, label: 'GitHub', value: 'github.com/hamzabilal000', href: 'https://github.com/hamzabilal000', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Pakistan', href: null, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500/20' },
    ]

    let inputClass = "w-full glass border border-theme-border focus:border-accent focus:shadow-[0_0_0_3px_rgba(34,197,94,0.08)] rounded-xl px-4 py-3 text-foreground placeholder-faint-fg outline-none transition-all duration-300 text-sm"

    return (
        <section id="contact" className="py-16 sm:py-24 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">Contact</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Let's{' '}
                        <span className="shimmer-text">Work Together</span>
                    </h2>
                    <p className="text-secondary-fg text-sm sm:text-base mt-4 sm:mt-5 max-w-xl mx-auto leading-relaxed">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
                    {/* Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass border border-theme-border rounded-2xl p-5 sm:p-8 space-y-5 card-hover">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="group">
                                    <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider group-focus-within:text-accent transition-colors">Full Name</label>
                                    <input ref={nameRef} type="text" placeholder="Your name" required className={inputClass} />
                                </div>
                                <div className="group">
                                    <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider group-focus-within:text-accent transition-colors">Email Address</label>
                                    <input ref={emailRef} type="email" placeholder="hello@example.com" required className={inputClass} />
                                </div>
                            </div>
                            <div className="group">
                                <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider group-focus-within:text-accent transition-colors">Subject</label>
                                <input ref={subjectRef} type="text" placeholder="Project Discussion" className={inputClass} />
                            </div>
                            <div className="group">
                                <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider group-focus-within:text-accent transition-colors">Message</label>
                                <textarea ref={messageRef} rows={5} placeholder="Tell me about your project..." required className={`${inputClass} resize-none`} />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full font-semibold px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 text-sm ${sent ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'btn-accent text-white disabled:opacity-50'}`}
                            >
                                {loading ? (
                                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                                ) : sent ? (
                                    <><FaCheckCircle /> Message Sent!</>
                                ) : (
                                    <>Send Message <FaPaperPlane size={12} /></>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact info — same height as form */}
                    <div className="lg:col-span-2 flex flex-col gap-3 lg:h-full">
                        {contactInfo.map((item, i) => (
                            <ContactCard key={i} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
