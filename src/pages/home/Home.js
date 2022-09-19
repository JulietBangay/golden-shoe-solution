import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import NewInImage from "../../images/example-new-in-image.jpg";
import iosDownload from "../../images/app-store-download.png";
import googleDownload from "../../images/google-play-download.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div
        className="newProductsCard"
        style={{
          backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${NewInImage}) `,
        }}
      >
        <div className="cardTitle">New Arrivals</div>
        <Grid container spacing={2} className="cardGridContainer">
          <Grid item md={2} sm={4} xs={6}>
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Ladies Shoes: New" }}
            >
              <button variant="contained" className="cardButton">
                Ladies
              </button>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Mens Shoes: New" }}
            >
              <button variant="contained" className="cardButton">
                Men
              </button>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Childrens Shoes: New" }}
            >
              <button variant="contained" className="cardButton">
                Children
              </button>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Baby Shoes: New" }}
            >
              <button variant="contained" className="cardButton">
                Baby
              </button>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "School Shoes: New" }}
            >
              <button variant="contained" className="cardButton">
                School
              </button>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link
              to="/products"
              className="categoryLink"
              state={{ title: "Bags and Accessories: New" }}
            >
              <button variant="contained" className="cardButton">
                Bags {"&"} Accessories
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="mobileAppCard">
        <div className="mobileAppTitle">
          Don't miss out, download the mobile app!
        </div>
        <div className="mobileAppLinks">
          <Grid container justifyContent="center">
            <Grid item>
              <a
                href="https://www.apple.com/uk/app-store/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={iosDownload} alt="" className="iosButton" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://play.google.com/store/apps?gl=GB"
                rel="noreferrer"
                target="_blank"
              >
                <img src={googleDownload} alt="" className="googleButton" />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="newsLetterCard">
        <div className="newsLetterCardTitle">Newsletter</div>
        <div className="newsLetterSubtitle">
          Sign up to the Golden Shoe newsletter to recieve exclusive offers,
          tips, and vouchers!
        </div>
        <button className="newsletterButton">Sign up now</button>
      </div>
    </div>
  );
}
