import { Grid, Popper, Box, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/example-logo-golden-shoe.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div className="navbar">
      <div>
        <Grid container alignItems="center" className="mainNav">
          <Grid item xs={5} className="navItem" style={{ height: "100%" }}>
            <Link to="/" className="navbarLink">
              <img src={Logo} alt="Golden Shoe" className="navbarLogo" />
            </Link>
          </Grid>
          <Grid
            item
            xs={1}
            className="navItem"
            style={{ height: "100%" }}
          ></Grid>
          <Grid item xs={2} style={{ height: "100%" }}>
            <Link to="/" className="navbarLink">
              <button className="navButton">Home</button>
            </Link>
          </Grid>

          <Grid item xs={2} style={{ height: "100%" }}>
            <button
              className="navButton"
              aria-describedby={id}
              onClick={handleClick}
            >
              My Account
            </button>

            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Box
                    sx={{
                      border: 1,
                      p: 1,
                      bgcolor: "background.paper",
                      borderRadius: "5px",
                    }}
                  >
                    <div>
                      <button className="signupButton">Sign up</button>
                    </div>

                    <div>
                      <button className="loginButton">Login</button>
                    </div>
                  </Box>
                </Fade>
              )}
            </Popper>
          </Grid>
          <Grid item xs={2} style={{ height: "100%" }}>
            <Link to="/my-bag" className="navbarLink">
              <button className="navButton">
                My Bag
                <ShoppingBasketIcon className="bagIcon" />
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="miniNav">
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={2} className="navText">
            <Link to="/frequently-asked-questions" className="navbarLink">
              Help {"&"} FAQs
            </Link>
          </Grid>
          <Grid item xs={2} className="navText">
            <Link to="/contact" className="navbarLink">
              Contact
            </Link>
          </Grid>
          <Grid item xs={2} className="navText">
            <Link to="/about-us" className="navbarLink">
              About us
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="shopCard">
        <Grid container>
          <Grid item md={2} xs={4} className="shopCategories">
            {" "}
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Ladies Shoes" }}
            >
              Ladies{" "}
            </Link>
          </Grid>

          <Grid item md={2} xs={4} className="shopCategories">
            {" "}
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Mens Shoes" }}
            >
              Men{" "}
            </Link>
          </Grid>

          <Grid item md={2} xs={4} className="shopCategories">
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Childrens Shoes" }}
            >
              Children
            </Link>
          </Grid>
          <Grid item md={2} xs={4} className="shopCategories">
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Baby Shoes" }}
            >
              Baby
            </Link>
          </Grid>
          <Grid item md={2} xs={4} className="shopCategories">
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "School Shoes" }}
            >
              School
            </Link>
          </Grid>
          <Grid item md={2} xs={4} className="shopCategories">
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Bags and Accessories" }}
            >
              Accessories
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
