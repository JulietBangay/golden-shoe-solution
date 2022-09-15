import "./FAQs.css";
import { Grid } from "@mui/material";

export default function FAQs() {
  return (
    <div className="faqs">
      <div className="faqsTitle">Frequently Asked Questions</div>
      <div className="topicsContainer">
        <div className="topicsTitle">FAQ topics</div>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <div className="topicsCard">
              <div className="topicsTitle">Delivery</div>

              <hr />
              <div className="faqsQuestion">Delivery Options</div>
              <hr />
              <div className="faqsQuestion">Where's my order?</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="topicsCard">
              <div className="topicsTitle">Returns and Refunds</div>

              <hr />
              <div className="faqsQuestion">How do I return?</div>
              <hr />
              <div className="faqsQuestion">Can I exchange?</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="topicsCard">
              <div className="topicsTitle">Order Issues</div>

              <hr />
              <div className="faqsQuestion">Missing item</div>
              <hr />
              <div className="faqsQuestion">Faulty item</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="topicsCard">
              <div className="topicsTitle">Products and stock</div>

              <hr />
              <div className="faqsQuestion">Sizing guide</div>
              <hr />
              <div className="faqsQuestion">Will an item be back in stock?</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="topicsCard">
              <div className="topicsTitle">
                Payment, promotional codes and vouchers
              </div>

              <hr />
              <div className="faqsQuestion">Payment types</div>
              <hr />
              <div className="faqsQuestion">Promo codes</div>
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="topicsCard">
              <div className="topicsTitle">Technical</div>

              <hr />
              <div className="faqsQuestion">
                Trouble signing into my account
              </div>
              <hr />
              <div className="faqsQuestion">Trouble with the website</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
