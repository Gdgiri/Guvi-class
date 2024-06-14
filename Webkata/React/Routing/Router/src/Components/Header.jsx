import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <link
        rel="shortcut icon"
        href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplay-lh.googleusercontent.com%2FlAFgx9P9v6g9CGiJ4yXEghRTGikQg88xuxOg30t_licriW4ODAyXVK4NHBJj-HGILw&f=1&nofb=1&ipt=2ae58c220515dfe8a797e3674202f3a13fb9b49da35366a69302f07d1f528d4e&ipo=images"
        type="image/x-icon"
      />
      <header>
        <NavLink to="/" activeClassName="active">
          Guvi
        </NavLink>
      </header>
    </>
  );
};

export default Header;
