import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const CustomNavLink = ({ to, title }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={`font-semibold hover:text-violet-700 ${
        match ? "text-violet-700" : ""
      }`}
    >
      {title}
    </NavLink>
  );
};

export default CustomNavLink;
