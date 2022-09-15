import "./About.css";
import { Grid } from "@mui/material";

export default function About() {
  return (
    <div className="about">
      <div className="aboutTitle">About us</div>
      <div className="gridContainer">
        <Grid container className="aboutCardsGrid">
          <Grid item md={4} sm={6} xs={12} className="aboutCard">
            <div className="aboutCardContentContainer">
              <div className="aboutCardTitle">Our Values</div>
              <div className="aboutCardContent">Learn more</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className="aboutCard">
            <div className="aboutCardContentContainer">
              <div className="aboutCardTitle">Who we are</div>
              <div className="aboutCardContent">Learn more</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className="aboutCard">
            <div className="aboutCardContentContainer">
              <div className="aboutCardTitle">Sustainability</div>
              <div className="aboutCardContent">Learn more</div>
            </div>
          </Grid>{" "}
          <Grid item md={4} sm={6} xs={12} className="aboutCard">
            <div className="aboutCardContentContainer">
              <div className="aboutCardTitle">Corporate responsibility</div>
              <div className="aboutCardContent">Learn more</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className="aboutCard">
            <div className="aboutCardContentContainer">
              <div className="aboutCardTitle">Investors</div>
              <div className="aboutCardContent">Learn more</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className="aboutCard">
            <div className="aboutCardContentContainer">
              <div className="aboutCardTitle">Media enquiries</div>
              <div className="aboutCardContent">Learn more</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
