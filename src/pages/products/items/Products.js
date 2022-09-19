import "./Products.css";

import { Grid } from "@mui/material";
import ShoeImage from "../../../images/shoe.png";
import { useLocation, Link } from "react-router-dom";

export default function Products() {
  const state = useLocation().state;
  return (
    <div className="products">
      <div className="productsTitle">{state.title}</div>
      <div className="productsContainer">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <div className="sortFilter">Sort</div>
          </Grid>
          <Grid item xs={3}>
            <div className="sortFilter">Filter</div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="productsGrid">
          <Grid item md={4} sm={6} xs={12}>
            <Link to="/product-details" className="productsLink">
              <div className="productThumbContainer">
                <img src={ShoeImage} alt="" className="productImage" />
                <div className="productName">Product Name</div>
                <Grid container>
                  <Grid item xs={6}>
                    <div className="productInformation">
                      Product Information
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="productPrice">£0.00</div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Link to="/product-details" className="productsLink">
              <div className="productThumbContainer">
                <img src={ShoeImage} alt="" className="productImage" />
                <div className="productName">Product Name</div>
                <Grid container>
                  <Grid item xs={6}>
                    <div className="productInformation">
                      Product Information
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="productPrice">£0.00</div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Link to="/product-details" className="productsLink">
              <div className="productThumbContainer">
                <img src={ShoeImage} alt="" className="productImage" />
                <div className="productName">Product Name</div>
                <Grid container>
                  <Grid item xs={6}>
                    <div className="productInformation">
                      Product Information
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="productPrice">£0.00</div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
        </Grid>
        <button className="loadMoreButton">Load More</button>
      </div>
    </div>
  );
}
