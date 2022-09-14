import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../../images/example-logo-golden-shoe.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Grid container className="footerGrid">
          <Grid item xs={4}>
            <img src={Logo} alt="Golden Shoe" className="footerLogo" />
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <strong>Help</strong>
              </Grid>
              <Grid item className="footerLink">
                FAQs
              </Grid>
              <Grid item className="footerLink">
                Contact
              </Grid>
              <Grid item className="footerLink">
                Terms and conditions
              </Grid>
              <Grid item className="footerLink">
                Privacy Policy
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column" spacing={1}>
              <Grid item className="footerLink">
                Join now
              </Grid>
              <Grid item className="footerLink">
                About us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          className="socialsGrid"
        >
          <Grid item>
            <TwitterIcon className="socialsLogo" />
          </Grid>
          <Grid item>
            <FacebookIcon className="socialsLogo" />
          </Grid>
          <Grid item>
            <InstagramIcon className="socialsLogo" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
