"use client";
import React, { useState } from "react";
import { ChevronDown, Eye } from "lucide-react";

const projectsData = [
  { title: "Finance", category: "web development", img: "project-1.jpg", alt: "finance" },
  { title: "Orizon", category: "web development", img: "project-2.png", alt: "orizon" },
  { title: "Fundo", category: "web design", img: "project-3.jpg", alt: "fundo" },
  { title: "Brawlhalla", category: "applications", img: "project-4.png", alt: "brawlhalla" },
  { title: "DSM.", category: "web design", img: "project-5.png", alt: "dsm." },
  { title: "MetaSpark", category: "web design", img: "project-6.png", alt: "metaspark" },
  { title: "Summary", category: "web development", img: "project-7.png", alt: "summary" },
  { title: "Task Manager", category: "applications", img: "project-8.jpg", alt: "task manager" },
  { title: "Arrival", category: "web development", img: "project-9.png", alt: "arrival" },
];

const categories = ["All", "Web design", "Applications", "Web development"];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = projectsData.filter(
        (project) =>
        selectedCategory === "All" ||
        project.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    return (
        <div className="box" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">{selectedCategory}</div>
            <div className="select-icon">
                          <ChevronDown className="text-gray-700" size={20} />
            </div>
          </button>

          <ul className="select-list">
            {categories.map((cat, idx) => (
              <li className="select-item" key={idx}>
                <button onClick={() => setSelectedCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div> */}

        <ul className="project-list">
          {filteredProjects.map((project, idx) => (
            <li
              className="project-item active"
              key={idx}
              data-filter-item
              data-category={project.category.toLowerCase()}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                              <Eye className="text-gray-700" size={20} />
                  </div>
                  <img src={`images/${project.img}`} alt={project.alt} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
            </div>
  );
}
