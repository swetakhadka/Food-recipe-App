import React, { useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

import { getUser, isloggedIn } from "../../utils/FirebaseUtils";
import { userContext } from "../../App";

function Header(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const user = React.useContext(userContext);
  const [currentLocation, setCurrentLocation] = React.useState(currentPath);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  const links = [
    { link: `/`, title: `Home` },
    { link: `/gallery`, title: "Gallery" },
    { link: `/student-form`, title: `Student Form` },
    { link: `/recipes`, title: "Recipes" },
  ];
  const getCurrentLinkStyle = (data) => {
    let condition = currentLocation === data.link;
    return {
      background: condition ? `var(--main-color)` : "",
      color: condition ? `#fff` : "",
      boxShadow: condition
        ? "rgba(0, 0, 0, 0.25) 2px 14px 28px, rgba(0, 0, 0, 0.22) 2px 10px 10px"
        : "",
    };
  };
  return (
    <div className={`header-wrapper`}>
      <nav>
        <ul>
          {links.map((item) => (
            <li key={item.link}>
              <Link style={getCurrentLinkStyle(item)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
          (
          <img
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
            alt=""
            src={user?.imageUrl}
          />
          )
        </ul>
      </nav>
    </div>
  );
}

export default Header;
