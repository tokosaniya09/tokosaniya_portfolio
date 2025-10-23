"use client";
import React from "react";
import { Book } from "lucide-react";

export default function Resume() {
    const education = [
        {
            title: "ABV IIITM Gwalior",
            period: "2022 — 2027",
            text: "Integrated Course in Information Technology (B.Tech + M.Tech)",
        },
        {
            title: "Kendriya Vidyalaya",
            period: "2021 - 2022",
            text: "Senior Secondary Education (Class 12), CBSE Board",
        },
        {
            title: "Kendriya Vidyalaya",
            period: "2021 - 2022",
            text: "Secondary Education (Class 10), CBSE Board",
        },
    ];

    const experience = [
        {
            title: "Amazon - SWE Intern",
            period: "May - July 2023",
            text: `Developed an API for publishing documents submitted by developers on the Amazon Appstore website. 
Implemented the Spring Framework to create a scalable and efficient backend, enabling seamless integration with the Amazon Appstore and improving the overall document processing workflow. 
Conducted Unit Testing to verify the functionality of the API and ensure code quality.`,
        },
        {
            title: "Freelance",
            period: "2023 - Present",
            text: "Delivered end-to-end solutions as a Freelance Full-Stack Developer.",
        },
        {
            title: "Web designer",
            period: "2022 - Present",
            text: "Created personal and learning-based web projects to enhance my design and development skills, experimenting with layouts, visuals, and user experience.",
        },
    ];

    const renderTimeline = (items: any[]) => (
        <ol className="timeline-list">
            {items.map((item, index) => (
                <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{item.title}</h4>
                    <span>{item.period}</span>
                    <p className="timeline-text">{item.text}</p>
                </li>
            ))}
        </ol>
    );

    return (
        <div className="box" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <Book className="text-gray-700" size={22} />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                {renderTimeline(education)}
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <Book className="text-gray-700" size={22} />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                {renderTimeline(experience)}
            </section>
        </div>
    );
}
