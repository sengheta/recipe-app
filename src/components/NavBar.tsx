import { Box, Button, ButtonGroup } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="nav">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button>
            <Link to="/" className="site-title">
              {" "}
              Home Page{" "}
            </Link>
          </Button>
          <Button>
            <Link to="/ViewAllRecipes"> View All Recipes </Link>{" "}
          </Button>
        </ButtonGroup>
      </Box>
    </nav>
  );
}
