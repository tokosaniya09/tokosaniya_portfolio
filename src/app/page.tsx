"use client";
import React from "react";

export default function About() {
    return (
        <div className="box" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Hi, I'm <strong>Toko Saniya</strong>, a fourth-year student at IIITM
                    Gwalior, Madhya Pradesh, pursuing an integrated course in Information
                    Technology. I'm a Full Stack Developer who loves building seamless,
                    user-focused web experiences.
                </p>

                <p>
                    I've had the opportunity to intern at Amazon and have secured an
                    internship at Google, where I continue to sharpen my technical and
                    problem-solving skills. Alongside my academic journey, I’ve also taken
                    up freelance projects in full-stack development, which have helped me
                    understand real-world product design, scalability, and client
                    interaction.
                </p>

                <p>
                    I'm deeply passionate about coding and enjoy transforming complex
                    ideas into clean, efficient, and impactful digital solutions.
                </p>

                <p>
                    When I'm not coding, you'll probably find me reading books, exploring
                    new web series, or diving into stories that inspire creativity and
                    fresh perspectives. I believe that creativity outside code often
                    enhances creativity within it.
                </p>
            </section>

            {/* Service Section */}
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-design.svg"
                                alt="design icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional
                                level.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-dev.svg"
                                alt="Web development icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-app.svg"
                                alt="mobile app icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>
                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-photo.svg"
                                alt="camera icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>
                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional
                                level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
