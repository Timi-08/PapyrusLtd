import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

import Card from "./Card";
import PopupModal from "./PopupModal";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import cardsData from "../cards.json";

const categories = [
  { key: "all", label: "All Categories" },
  { key: "birthday", label: "Birthday" },
  { key: "anniversary", label: "Anniversary" },
  { key: "friendship", label: "Friendship" },
  { key: "newyear", label: "New Year" },
  { key: "mother&fathersday", label: "Mother & Father's Day" },
  { key: "other", label: "Other" },
];

const CategorySection = () => {
  const { categoryName } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  const navigate = useNavigate();

  useEffect(() => {
    const flatCards = cardsData.categories.flatMap((cat) =>
      (cat.cards || []).map((card) => ({
        ...card,
        category: cat.name
          ? cat.name.toLowerCase().replace(/\s/g, "").replace(/['&]/g, "")
          : "",
      }))
    );
    setAllProducts(flatCards);

    const handleResize = () => setIsMobile(window.innerWidth <= 720);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products =
    categoryName && categoryName !== "all"
      ? allProducts.filter(
          (p) => p.category === categoryName.replace(/['&]/g, "")
        )
      : allProducts;

  const filteredProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price") {
      return Number(a.price) - Number(b.price);
    }
    if (sort === "title") {
      return a.title?.localeCompare(b.title);
    }
    return 0;
  });

  const displayCategory =
    categoryName && categoryName !== "all"
      ? categories.find((cat) => cat.key === categoryName)?.label ||
        "All Categories"
      : "All Categories";

  const handleCategoryChange = (e) => {
    navigate(`/category/${e.target.value}`);
  };

  return (
    <div className="category-sec">
      {isMobile ? (
        <select
          className="category-dropdown"
          value={categoryName || "all"}
          onChange={handleCategoryChange}
        >
          {categories.map((cat) => (
            <option key={cat.key} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </select>
      ) : (
        <h2>{displayCategory}</h2>
      )}

      {!isMobile && (
        <div className="categories-list">
          <ul>
            {categories.map((cat) => (
              <li key={cat.key}>
                <NavLink
                  to={`/category/${cat.key}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {cat.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="categories-display">
        <img
          src="/Categories-sec-bg.png"
          alt=""
          className="categories-sec-bg"
        />
        <div className="categories-container">
          <div className="functionality">
            <SortBy value={sort} onChange={(e) => setSort(e.target.value)} />
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <hr />
          <div className="cards">
            <div className="cards-container">
              <div className="cards-grid">
                {sortedProducts.map((p, i) => (
                  <Card
                    key={p.id || i}
                    img={p.image}
                    title={p.title}
                    price={`₹${p.price}`}
                    onClick={() => navigate(`/item/${p.id || i}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <PopupModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default CategorySection;
