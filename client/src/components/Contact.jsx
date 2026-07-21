import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Shape from './Shape'
emailjs.init('1HYQMIE8NI3eQYoCs')

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
                'template_xromtqf',
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
            alert("Error: " + (error?.text || error?.message || JSON.stringify(error)))
        }
        setLoading(false)
    }

    let contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'hamzabilal.cs.pk@gmail.com', href: 'mailto:hamzabilal.cs.pk@gmail.com' },
        { icon: <FaPhone />, label: 'Phone', value: '+92 334 7348886', href: 'tel:+923347348886' },
        { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/hamzabilalcs', href: 'https://linkedin.com/in/hamzabilalcs' },
        { icon: <FaGithub />, label: 'GitHub', value: 'github.com/hamzabilal000', href: 'https://github.com/hamzabilal000' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Pakistan', href: null },
    ]

    let inputClass = "w-full bg-primary border border-theme-border focus:border-accent focus:shadow-[0_0_0_3px_rgba(245,71,31,0.1)] rounded-2xl px-4 py-3 text-foreground placeholder-faint-fg outline-none transition-all duration-300 text-sm"

    return (
        <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
            <Shape type="sphere" size={70} c1="#fbbf24" c2="#d97706" className="absolute animate-float-slow left-[6%] top-32 hidden lg:block" />
            <Shape type="diamond" size={50} c1="#f472b6" c2="#db2777" className="absolute animate-float right-[7%] bottom-28 hidden lg:block" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Let's <span className="font-display italic text-accent">work</span> together
                    </h2>
                    <p className="text-secondary-fg text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
                        Have a project in mind or want to collaborate? Feel free to reach out —
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 soft-card rounded-[2rem] p-6 sm:p-8 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider">Full Name</label>
                                <input ref={nameRef} type="text" placeholder="Your name" required className={inputClass} />
                            </div>
                            <div>
                                <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider">Email Address</label>
                                <input ref={emailRef} type="email" placeholder="hello@example.com" required className={inputClass} />
                            </div>
                        </div>
                        <div>
                            <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider">Subject</label>
                            <input ref={subjectRef} type="text" placeholder="Project Discussion" className={inputClass} />
                        </div>
                        <div>
                            <label className="text-muted-fg text-xs font-medium mb-2 block uppercase tracking-wider">Message</label>
                            <textarea ref={messageRef} rows={5} placeholder="Tell me about your project..." required className={`${inputClass} resize-none`} />
                        </div>
                        <button type="submit" disabled={loading}
                            className={`w-full font-semibold px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 text-sm ${sent ? 'bg-emerald-600 text-white' : 'btn-accent disabled:opacity-50'}`}>
                            {loading ? (
                                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                            ) : sent ? (
                                <><FaCheckCircle /> Message Sent!</>
                            ) : (
                                <>Send Message <FaPaperPlane size={12} /></>
                            )}
                        </button>
                    </form>

                    {/* Contact info */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        {contactInfo.map((item, i) => {
                            let inner = (
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">{item.icon}</span>
                                    <div className="min-w-0">
                                        <div className="text-faint-fg text-[10px] uppercase tracking-widest mb-0.5">{item.label}</div>
                                        <div className="text-foreground font-semibold text-sm truncate">{item.value}</div>
                                    </div>
                                </div>
                            )
                            return (
                                <div key={i} className="soft-card rounded-2xl px-4 py-3.5 card-hover">
                                    {item.href
                                        ? <a href={item.href} target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'} rel="noreferrer">{inner}</a>
                                        : inner}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
