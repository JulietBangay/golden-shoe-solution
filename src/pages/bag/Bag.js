import "./Bag.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function Bag() {
  return (
    <div className="bag">
      <div className="bagTitle">
        <WorkOutlineIcon className="bagPageIcon" />
        <div>Your shopping bag is empty</div>
      </div>
      <div className="bagInformation">
        Sign in to save or access already saved items in your shopping bag.
      </div>
      <div className="bagAccountButtons">
        <button className="bagSignupButton">Create an account</button>
        <div>
          <button className="bagLoginButton">I already have an account</button>
        </div>
      </div>
    </div>
  );
}
