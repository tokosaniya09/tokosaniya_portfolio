"use client";
import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    // Auto-dismiss toast after 3 seconds
    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({ type: "", message: "" });
            }, 3000); // 3 seconds (you can change to 1000 for 1 second)

            return () => clearTimeout(timer);
        }
    }, [status.message]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Check if form is valid
        const updatedData = { ...formData, [name]: value };
        setIsFormValid(
            updatedData.fullname.trim() !== "" &&
            updatedData.email.trim() !== "" &&
            updatedData.message.trim() !== ""
        );
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: "", message: "" });

        try {
            const serviceID = "service_7kn3y3s";
            const templateID = "template_4xpqfzh";
            const userID = "WuFD3f614-TIBwlEf";

            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: formData.fullname,
                    reply_to: formData.email,  // Added this for reply functionality
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Toko Saniya"
                },
                userID
            );

            setStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon."
            });

            // Reset form
            setFormData({
                fullname: "",
                email: "",
                message: ""
            });
            setIsFormValid(false);
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please try again later."
            });
            console.error("EmailJS Error:", error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact box" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure className="blog-post-item active">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2276.2624250268295!2d78.17371111585952!3d26.24955750242469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e1!3m2!1sen!2sin!4v1761213219292!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                {status.message && (
                    <div className={`status-message ${status.type}`} style={{
                        padding: "12px",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        backgroundColor: status.type === "success" ? "#d4edda" : "#f8d7da",
                        color: status.type === "success" ? "#155724" : "#721c24",
                        border: `1px solid ${status.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                        transition: "opacity 0.3s ease-in-out"
                    }}>
                        {status.message}
                    </div>
                )}

                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            value={formData.fullname}
                            onChange={handleChange}
                            disabled={isSending}
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSending}
                        />
                    </div>
                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSending}
                    ></textarea>
                    <button
                        className="form-btn"
                        type="submit"
                        disabled={!isFormValid || isSending}
                        style={{
                            opacity: (!isFormValid || isSending) ? 0.6 : 1,
                            cursor: (!isFormValid || isSending) ? "not-allowed" : "pointer"
                        }}
                    >
                        <FaPaperPlane size={24} color="orange" />
                        <span>{isSending ? "Sending..." : "Send Message"}</span>
                    </button>
                </form>
            </section>
        </div>
    );
}