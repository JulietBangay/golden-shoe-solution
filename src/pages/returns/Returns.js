import { Grid, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Returns.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Returns() {
  const [formView, setFormView] = useState(false);
  return (
    <div className="returns">
      <div className="returnsTitle">Returns</div>
      <Grid container>
        <Grid item md={4} sm={12}>
          <Link to="/frequently-asked-questions" className="returnsLink">
            <div className="returnsQuestionsContainer">
              Questions frequently asked about returns
              <ArrowForwardIosIcon className="returnsForwardArrow" />
            </div>
          </Link>
        </Grid>
        <Grid item md={8} sm={12}>
          <div className="returnsInformation">
            It is easy to return your order. The fastest way to get a refund is
            to return your items in store.
            <br />
            <br />
            You have 28 days to return any item from the day you recieve your
            order. Other exclusions may apply. Please see our returns policy for
            more information.
          </div>
          {!formView && (
            <div className="returnsFormContainer">
              To create a return please{" "}
              <span
                className="returnsFormOpen"
                onClick={() => setFormView(true)}
              >
                click here!
              </span>
            </div>
          )}
          {formView && (
            <div className="returnsFormContainer">
              <form>
                <div className="returnsFieldTitle">First Name</div>
                <TextField className="returnsTextfield" />
                <div className="returnsFieldTitle">Last Name</div>
                <TextField className="returnsTextfield" />
                <div className="returnsFieldTitle">Email</div>
                <TextField className="returnsTextfield" />
                <div className="returnsFieldTitle">Order Number</div>
                <TextField className="returnsTextfield" />
                <div>
                  <button className="createReturnButton">
                    Create My Return
                  </button>
                </div>
              </form>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
