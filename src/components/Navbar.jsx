// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Birthday", path: "/category/birthday" },
//   { name: "Anniversary", path: "/category/anniversary" },
//   { name: "Friendship", path: "/category/friendship" },
//   { name: "New Year", path: "/category/newyear" },
//   { name: "Mothers Day", path: "/category/mother&fathersday" },
//   { name: "Gallery", path: "/gallery" },
//   { name: "About Us", path: "/about" },
//   { name: "Contact Us", path: "/contact" },
//   { name: "Site Map", path: "/sitemap" },
// ];

// const Navbar = () => {
//   const [showCategories, setShowCategories] = useState(false);

//   const categoryLinks = [
//     "Birthday",
//     "Anniversary",
//     "Friendship",
//     "New Year",
//     "Mothers Day",
//   ];
//   const [menuOpen, setMenuOpen] = useState(false);

//   const mobileLinks = navLinks.filter((link) => [
//     { name: "Home", path: "/" },
//     { name: "Birthday", path: "/category/birthday" },
//     { name: "Anniversary", path: "/category/anniversary" },
//     { name: "Friendship", path: "/category/friendship" },
//     { name: "New Year", path: "/category/newyear" },
//     { name: "Mothers Day", path: "/category/mother&fathersday" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact Us", path: "/contact" },
//     { name: "Site Map", path: "/sitemap" },
//   ]);

//   const homeLink = navLinks.find((link) => link.name === "Home");
//   const restLinks = navLinks.filter(
//     (link) => link.name !== "Home" && !categoryLinks.includes(link.name)
//   );
//   const categories = navLinks.filter((link) =>
//     categoryLinks.includes(link.name)
//   );

//   return (
//     <nav className="navbar">
//       <div className="desktop-nav">
//         <ul>
//           <li>
//             <NavLink
//               to={homeLink.path}
//               className={({ isActive }) => (isActive ? "active" : "")}
//               end={homeLink.path === "/"}
//             >
//               {homeLink.name}
//             </NavLink>
//           </li>

//           <li className="categories-dropdown">
//             <button onClick={() => setShowCategories(!showCategories)}>
//               Categories ▾
//             </button>
//             {showCategories && (
//               <ul className="dropdown-menu">
//                 {categories.map((link) => (
//                   <li key={link.name}>
//                     <NavLink
//                       to={link.path}
//                       className={({ isActive }) => (isActive ? "active" : "")}
//                       onClick={() => setShowCategories(false)}
//                     >
//                       {link.name}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           {categories.map((link) => (
//             <li key={link.name} className="category-link">
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) => (isActive ? "active" : "")}
//                 end={link.path === "/"}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}

//           {restLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) => (isActive ? "active" : "")}
//                 end={link.path === "/"}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mobile-nav">
//         <img src="/Logo.png" alt="Logo" className="logo2" />
//         <i
//           className="ri-menu-line menu-icon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         ></i>

//         {menuOpen && (
//           <ul className="mobile-dropdown">
//             {mobileLinks.map((link) => (
//               <li key={link.name}>
//                 <NavLink
//                   to={link.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={({ isActive }) => (isActive ? "active" : "")}
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Birthday", path: "/category/birthday" },
  { name: "Anniversary", path: "/category/anniversary" },
  { name: "Friendship", path: "/category/friendship" },
  { name: "New Year", path: "/category/newyear" },
  { name: "Mothers Day", path: "/category/mother&fathersday" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Site Map", path: "/sitemap" },
];

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const categoryLinks = [
    "Birthday",
    "Anniversary",
    "Friendship",
    "New Year",
    "Mothers Day",
  ];

  const homeLink = navLinks.find((link) => link.name === "Home");
  const restLinks = navLinks.filter(
    (link) => link.name !== "Home" && !categoryLinks.includes(link.name)
  );
  const categories = navLinks.filter((link) =>
    categoryLinks.includes(link.name)
  );

  return (
    <nav className="navbar">
      <div className="desktop-nav">
        <ul>
          <li>
            <NavLink
              to={homeLink.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              end={homeLink.path === "/"}
            >
              {homeLink.name}
            </NavLink>
          </li>

          <li className="categories-dropdown">
            <button onClick={() => setShowCategories(!showCategories)}>
              Categories ▾
            </button>
            {showCategories && (
              <ul className="dropdown-menu">
                {categories.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={() => setShowCategories(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {categories.map((link) => (
            <li key={link.name} className="category-link">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {restLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobile-nav">
        <img src="/Logo2.png" alt="Logo" className="logo2" />
        <i
          className="ri-menu-line menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>

        {menuOpen && (
          <ul className="mobile-dropdown">
            {/* Home always first */}
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li
              className="mobile-categories"
              onClick={() => setShowCategories(!showCategories)}
            >
              <span className="dropdown-toggle">Categories ▾</span>
              {showCategories && (
                <ul className="mobile-submenu">
                  {categories.map((link) => (
                    <li key={link.name}>
                      <NavLink
                        to={link.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setShowCategories(false);
                        }}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {restLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
