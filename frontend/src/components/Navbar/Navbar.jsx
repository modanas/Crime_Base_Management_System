import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-cont">
          <div className="logo-wrapper">
            <img
              src="https://imgs.search.brave.com/kQE8fhYav0akThM3dPq3UVRucSpK1rtlOKniMrZwbs4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84MS82My9p/bnZlc3RpZ2F0aW9u/LWdseXBoLWljb24t/Y3JpbWUtYW5kLWV4/cGxvcmF0aW9uLXZl/Y3Rvci0yNTI0ODE2/My5qcGc"
              alt=""
            />
            <h1>InmateInsights</h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
