import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <div className="sitemap">
      <div className="sitemap-container">
        <h1 className="sitemap-title">Site Map</h1>

        <div className="sitemap-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="sitemap-card">
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
