"use client";
import React from "react";

export default function Service() {
  const services = [
    {
      icon: "images/icon-design.svg",
      title: "Web design",
      text: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: "images/icon-dev.svg",
      title: "Web development",
      text: "High-quality development of sites at the professional level.",
    },
    {
      icon: "images/icon-app.svg",
      title: "Mobile apps",
      text: "Professional development of applications for iOS and Android.",
    },
    {
      icon: "images/icon-photo.svg",
      title: "Photography",
      text: "I make high-quality photos of any category at a professional level.",
    },
  ];

  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>

      <ul className="service-list">
        {services.map((service, index) => (
          <li className="service-item" key={index}>
            <div className="service-icon-box">
              <img src={service.icon} alt={service.title} width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
