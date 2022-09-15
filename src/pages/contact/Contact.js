import "./Contact.css";
import { TextField, MenuItem, Select, Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactUsTitle">We'd love to hear from you</div>
      <div className="contactUsSubtitle">Call Us</div>
      <p className="contactUsParagraph">07xxxxxxxxx</p>
      <div className="contactUsSubtitle">Call opening hours</div>
      <p className="contactUsParagraph">
        Monday - Friday: 7am - 7pm
        <br />
        Saturday - Sunday: 9am - 6pm
        <br />
        <br />
        Calls from a UK landlinewill be at the basic national call rates. Calls
        from mobiles may vary, please check with your provider.
      </p>
      <div className="contactUsSubtitle">Let's connect on social media</div>
      <p className="contactUsParagraph">
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
      </p>
      <div className="webformContainer">
        <div className="contactUsSubtitle">Send us a message</div>
        <p className="contactUsParagraph">
          If you choose to contact us via our webform, please include as much
          relevant information as you can, such as order date, return date,
          order number, return tracking number, and product description. Please
          allow 48 business hours for us to respond to your enquiry.
        </p>
        <form className="contactUsForm">
          <div className="webformFieldName">Name</div>
          <TextField
            color="primary"
            variant="outlined"
            className="webformTextField"
          />
          <div className="webformFieldName">Email</div>
          <TextField
            color="primary"
            variant="outlined"
            className="webformTextField"
          />
          <div className="webformFieldName">Re-type email</div>
          <TextField
            color="primary"
            variant="outlined"
            className="webformTextField"
          />
          <div className="webformFieldName">Reason for emailing</div>
          <Select color="primary" variant="outlined" className="webformSelect">
            <MenuItem>Order or Delivery</MenuItem>
            <MenuItem>Return or Refund</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>Stores</MenuItem>
            <MenuItem>Other</MenuItem>
          </Select>
          <div className="webformFieldName">Your Message</div>
          <TextField
            multiline
            rows={4}
            color="primary"
            variant="outlined"
            className="webformTextField"
          />
          <button className="contactUsButton">Send Message</button>
        </form>
      </div>
    </div>
  );
}
