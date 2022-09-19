import { Grid, Rating } from "@mui/material";
import { useState } from "react";
import ShoeImage from "../../../images/shoe.png";
import "./ProductDetails.css";

export default function ProductDetails() {
  return (
    <div className="productDetails">
      <Grid container spacing={2} className="productDetailsGrid">
        <Grid item md={6} sm={12} className="productImageGridItem">
          <img src={ShoeImage} alt="" className="productImage" />
        </Grid>
        <Grid item md={6} sm={12} className="productInformationGridSide">
          <Grid
            container
            direction="column"
            className="productInformationGridItem"
            spacing={2}
          >
            <Grid item className="productDetailsName">
              Product Name
            </Grid>
            <Grid item className="productDetailsPrice">
              £0.00
            </Grid>
            <Grid item className="productDetailsRatingItem">
              <Grid container alignItems="center" justifyContent="flex-start">
                <Grid item>
                  <Rating value={5} readOnly className="productDetailsRating" />
                </Grid>
                <Grid item>
                  <span className="productDetailsReviews">{"(1)"}</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="productDetailsSelectSize">
              Select Size
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                spacing={1}
                className="productDetailsSizingGrid"
                justifyContent="center"
              >
                <Grid item>
                  <button className="productDetailSizeButton">Size 1</button>
                </Grid>
                <Grid item>
                  <button className="productDetailSizeButton">Size 2</button>
                </Grid>
                <Grid item>
                  <button disabled className="productDetailSizeButtonDisabled">
                    Size 3 (out-of-stock)
                  </button>
                </Grid>
              </Grid>
              <Grid item>
                <button className="addtoBasketButton">Add to basket</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="productDetailsReviewsContainer">
        <div className="reviewsTitle">Reviews</div>
        <div className="exampleReviews">
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <Rating value={5} readOnly className="productDetailsRating" />
            </Grid>
            <Grid item xs={9}>
              <p className="reviewContent">An example review</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
