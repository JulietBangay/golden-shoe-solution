import { Grid } from "@mui/material";
import "./Navbar.css";
import Logo from "../../images/example-logo-golden-shoe.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Grid container alignItems="center" className="mainNav">
          <Grid item xs={3} className="navItem" style={{ height: "100%" }}>
            <img src={Logo} alt="Golden Shoe" className="navbarLogo" />
          </Grid>
          <Grid
            item
            xs={1}
            className="navItem"
            style={{ height: "100%" }}
          ></Grid>
          <Grid item xs={2} style={{ height: "100%" }}>
            <button className="navButton">Home</button>
          </Grid>
          <Grid item xs={2} style={{ height: "100%" }}>
            <button className="navButton">Products</button>
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
            Contact
          </Grid>
          <Grid item xs={1} className="navText">
            About us
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
