import { Box, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import navbar from "../../data/navbar";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        borderBottom: "1px solid #d3d3d3",
      }}
    >
      <ul>
        {navbar.map((item) => (
          <li>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Navbar;
