import { Button, Grid } from "@mui/material";
import NewInImage from "../images/example-new-in-image.jpg";
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
    </div>
  );
}
