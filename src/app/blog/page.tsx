"use client";
import React from "react";

const blogPosts = [
    {
        title: "Design conferences in 2022",
        category: "Design",
        date: "Feb 23, 2022",
        img: "blog-1.jpg",
        alt: "Design conferences in 2022",
        text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
    },
    {
        title: "Best fonts every designer",
        category: "Design",
        date: "Feb 23, 2022",
        img: "blog-2.jpg",
        alt: "Best fonts every designer",
        text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi."
    },
    {
        title: "Design digest #80",
        category: "Design",
        date: "Feb 23, 2022",
        img: "blog-3.jpg",
        alt: "Design digest #80",
        text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit."
    },
    {
        title: "UI interactions of the week",
        category: "Design",
        date: "Feb 23, 2022",
        img: "blog-4.jpg",
        alt: "UI interactions of the week",
        text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi."
    },
    {
        title: "The forgotten art of spacing",
        category: "Design",
        date: "Feb 23, 2022",
        img: "blog-5.jpg",
        alt: "The forgotten art of spacing",
        text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Design digest #79",
        category: "Design",
        date: "Feb 23, 2022",
        img: "blog-6.jpg",
        alt: "Design digest #79",
        text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum."
    },
];

export default function Blog() {
    return (
        <div className="box" data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {blogPosts.map((post, idx) => (
                        <li className="blog-post-item active" key={idx}>
                            <a href="#">
                                <figure className="blog-banner-box">
                                    <img src={`images/${post.img}`} alt={post.alt} loading="lazy" />
                                </figure>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">{post.category}</p>
                                        <span className="dot"></span>
                                        <time dateTime="2022-02-23">{post.date}</time>
                                    </div>
                                    <h3 className="h3 blog-item-title">{post.title}</h3>
                                    <p className="blog-text">{post.text}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
