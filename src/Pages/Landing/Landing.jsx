import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./Landing.css";

const Landing = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "20px",
        padding: "50px",
      }}
    >
      <div className="landing-icon">
        <img src="/images/landing/web-development.png" alt="code" />
      </div>
      <div className="landing-content">
        <Typography variant="h3">Leetcode Tracker</Typography>
        <Typography variant="subtitle1">
          Prepare for your next interview
        </Typography>
        <Link className="landing-link" to="/tracker">
          <Button
            sx={{
              backgroundColor: "#222",
              color: "#fff",
              padding: "5px 20px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            Try Now!
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Landing;
