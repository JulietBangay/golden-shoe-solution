import "./Children.css";

import { Grid } from "@mui/material";
import ShoeImage from "../../../images/shoe.png";

export default function Children() {
  return (
    <div className="children">
      <div className="productsTitle">Childrens Shoes</div>
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
          <Grid item xs={4}>
            <div className="productThumbContainer">
              <img src={ShoeImage} alt="" className="productImage" />
              <div className="productName">Product Name</div>
              <Grid container>
                <Grid item xs={6}>
                  <div className="productInformation">Product Information</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="productPrice">Product Price</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="productThumbContainer">
              <img src={ShoeImage} alt="" className="productImage" />
              <div className="productName">Product Name</div>
              <Grid container>
                <Grid item xs={6}>
                  <div className="productInformation">Product Information</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="productPrice">Product Price</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="productThumbContainer">
              <img src={ShoeImage} alt="" className="productImage" />
              <div className="productName">Product Name</div>
              <Grid container>
                <Grid item xs={6}>
                  <div className="productInformation">Product Information</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="productPrice">Product Price</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <button className="loadMoreButton">Load More</button>
      </div>
    </div>
  );
}
