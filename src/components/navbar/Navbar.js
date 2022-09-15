import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/example-logo-golden-shoe.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Navbar() {
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
            <button className="navButton">My Account</button>
          </Grid>
          <Grid item xs={2} style={{ height: "100%" }}>
            <button className="navButton">
              My Bag
              <ShoppingBasketIcon className="bagIcon" />
            </button>
          </Grid>
        </Grid>
      </div>
      <div className="miniNav">
        <Grid container>
          <Grid item xs={9}></Grid>
          <Grid item xs={1} className="navText">
            Help {"&"} FAQs
          </Grid>
          <Grid item xs={1} className="navText">
            <Link to="/contact" className="navbarLink">
              Contact
            </Link>
          </Grid>
          <Grid item xs={1} className="navText">
            About us
          </Grid>
        </Grid>
      </div>
      <div className="shopCard">
        <Grid container>
          <Grid item xs={2} className="shopCategories">
            {" "}
            <Link to="/ladies" className="categoryLink">
              Women{" "}
            </Link>
          </Grid>

          <Grid item xs={2} className="shopCategories">
            {" "}
            <Link to="/men" className="categoryLink">
              Men{" "}
            </Link>
          </Grid>

          <Grid item xs={2} className="shopCategories">
            <Link to="/children" className="categoryLink">
              Children
            </Link>
          </Grid>
          <Grid item xs={2} className="shopCategories">
            <Link to="/baby" className="categoryLink">
              Baby
            </Link>
          </Grid>
          <Grid item xs={2} className="shopCategories">
            <Link to="/school" className="categoryLink">
              School
            </Link>
          </Grid>
          <Grid item xs={2} className="shopCategories">
            <Link to="/accessories" className="categoryLink">
              Accessories
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
