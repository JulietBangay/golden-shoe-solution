import { Link } from "react-router-dom";
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
                <Link
                  to="/frequently-asked-questions"
                  className="footerInternalLink"
                >
                  FAQs
                </Link>
              </Grid>
              <Grid item className="footerLink">
                <Link to="/contact" className="footerInternalLink">
                  Contact
                </Link>
              </Grid>
              <Grid item className="footerLink">
                <Link to="/terms-and-conditions" className="footerInternalLink">
                  Terms and conditions
                </Link>
              </Grid>
              <Grid item className="footerLink">
                <Link to="/privacy-policy" className="footerInternalLink">
                  Privacy Policy
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column" spacing={1}>
              <Grid item className="footerLink">
                <Link to="/about-us" className="footerInternalLink">
                  About us
                </Link>
              </Grid>
              <Grid item className="footerLink">
                <Link to="/returns" className="footerInternalLink">
                  Returns
                </Link>
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
            <a
              href="https://twitter.com/?lang=en"
              rel="noreferrer"
              target="_blank"
            >
              <TwitterIcon className="socialsLogo" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://en-gb.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon className="socialsLogo" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="socialsLogo" />
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
