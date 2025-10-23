"use client";
import React, { useEffect } from "react";
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline, IoChevronDown } from "react-icons/io5";

export default function Sidebar() {
  useEffect(() => {
    const elementToggleFunc = (elem) => {
      elem.classList.toggle("active");
    };

    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if (sidebar && sidebarBtn) {
      sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
    }

    return () => {
      if (sidebarBtn) sidebarBtn.removeEventListener("click", () => elementToggleFunc(sidebar));
    };
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="images/me.jpeg" alt="Toko Saniya" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Toko Saniya">Toko Saniya</h1>
          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:tokosaniya09@gmail.com" className="contact-link">tokosaniya09@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919628679084" className="contact-link">+91 9628679084</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Raebareli, UP, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
      </div>
    </aside>
  );
}
