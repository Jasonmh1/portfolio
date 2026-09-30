import { lazy, Suspense, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const ContactExperience = lazy(() => import("../components/Contact/ContactExperience.jsx"));

const Contact = () => {
    const formRef = useRef(null);
    const experienceRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        const target = experienceRef.current;
        if (!target) return undefined;

        if (!("IntersectionObserver" in window)) {
            setShowExperience(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowExperience(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px 0px" }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((currentForm) => ({ ...currentForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch – Let’s Connect"
                    sub="Have questions or ideas? Let’s talk."
                />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What’s your name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What’s your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div ref={experienceRef} className="xl:col-span-7 min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            {showExperience ? (
                                <Suspense
                                    fallback={(
                                        <div className="flex min-h-96 items-center justify-center text-sm text-white/70">
                                            Loading interactive scene…
                                        </div>
                                    )}
                                >
                                    <ContactExperience />
                                </Suspense>
                            ) : (
                                <div className="min-h-96" aria-hidden="true" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;