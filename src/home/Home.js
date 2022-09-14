import { Button, Grid } from "@mui/material";
import NewInImage from "../images/example-new-in-image.jpg";
import iosDownload from "../images/app-store-download.png";
import googleDownload from "../images/google-play-download.png";
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
          <Grid item xs={2}>
            <button variant="contained" className="cardButton">
              Women
            </button>
          </Grid>
          <Grid item xs={2}>
            <button variant="contained" className="cardButton">
              Men
            </button>
          </Grid>
          <Grid item xs={2}>
            <button variant="contained" className="cardButton">
              Children
            </button>
          </Grid>
          <Grid item xs={2}>
            <button variant="contained" className="cardButton">
              Babies
            </button>
          </Grid>
          <Grid item xs={2}>
            <button variant="contained" className="cardButton">
              School
            </button>
          </Grid>
          <Grid item xs={2}>
            <button variant="contained" className="cardButton">
              Bags {"&"} Accessories
            </button>
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
