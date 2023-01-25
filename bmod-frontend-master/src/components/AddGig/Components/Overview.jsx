import React from "react";
import { connect } from "react-redux";
import { addidea } from "../../../redux-implementation/actions";
import toast, { Toaster } from "react-hot-toast";

function Overview({ addidea, state }) {
  const [toOverview, setToOverview] = React.useState(true);
  const [toDescription, setToDescription] = React.useState(false);
  React.useEffect(() => {
    if (state.postedidea && state.postedidea.status === 200) {
      toast.success(
        "Your Idea is Posted and is under some checks now Kindly wait untill Admin Approves it Thanks. 😊."
      );
    } else if (state.postedidea && state.postedidea.status > 400) {
      toast.error("Your Idea is not Posted 😒 Please Try Again .");
    } else if (state.postedidea === null) {
      toast.error("Your Idea is not Posted 😒 Please Try Again .");
    }
  }, [state]);
  function move() {
    if (toOverview === true) {
      setToOverview(false);
      setToDescription(true);
    } else {
      setToOverview(true);
      setToDescription(false);
    }
  }
  function addactive(view) {
    if (view === "a") {
      if (toOverview) return "fit-breadcrumbs-icon active-icon";
      else return "fit-breadcrumbs-icon";
    } else if (view === "b") {
      if (toDescription) return "fit-breadcrumbs-icon active-icon";
      else return "fit-breadcrumbs-icon";
    }
  }
  const [title, settitle] = React.useState("");
  const [thumbnail, setthumbnail] = React.useState("");
  const [investment, setinvestment] = React.useState("");
  const [required, setrequired] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [video, setvideo] = React.useState("");
  const [doc, setdoc] = React.useState("");
  function formSubmit(e) {
    e.preventDefault();
    addidea(title, thumbnail, description, investment, doc, required, video);
  }
  return (
    <div className="flex column" style={{ marginTop: "75px" }}>
      <div className="top-navbar-container wizard-mode">
        <Toaster position="top-right" reverseOrder={true} />
        <nav className="fit-breadcrumbs top-navbar wizard fit-breadcrumbs-progress">
          <ul className="flex">
            <li className="flex" style={{ marginLeft: "20px" }}>
              <span className={addactive("a")}>1</span>
              <span className="fit-crumb current fit-crumb-current">
                <span className="crumb-content">
                  Overview<div className="floating-border"></div>
                </span>
              </span>
              <span
                className="fit-icon fit-breadcrumbs-separator"
                style={{ width: "12px", height: "12px" }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ margin: "0 10px" }}
                ></i>
              </span>
            </li>
            <li className="flex" style={{ marginLeft: "20px" }}>
              <span className={addactive("b")}>2</span>
              <span className="fit-crumb disabled fit-crumb-next">
                <span
                  className="crumb-content"
                  title="Complete the current step before moving on"
                >
                  Details<div className="floating-border"></div>
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <form
        onSubmit={formSubmit}
        enctype="multipart/form-data"
        className="form w-800"
        style={{ background: "white" }}
      >
        {toOverview && (
          <>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  autoFocus
                  required
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Thumbnail</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="file"
                  placeholder="Thumbnail"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => setthumbnail(e.target.files[0])}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Investment Percentage</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="number"
                  placeholder="Investment %age"
                  value={investment}
                  onChange={(e) => setinvestment(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Required Investment</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="number"
                  placeholder="Required Total Investment"
                  value={required}
                  onChange={(e) => setrequired(e.target.value)}
                />
              </div>
            </div>
            <div
              className="field is-grouped flex"
              style={{ justifyContent: "flex-end" }}
            >
              <div className="control">
                <button className="button is-link" onClick={move}>
                  Next{" "}
                  <i
                    className="fa fa-angle-right"
                    style={{ marginLeft: "5px" }}
                  ></i>
                </button>
              </div>
            </div>
          </>
        )}
        {toDescription && (
          <>
            <div className="field">
              <label className="label">Brief Description</label>
              <div className="control">
                <textarea
                  className="input"
                  required
                  rows="20"
                  columns="20"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Pitch Video</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="file"
                  placeholder="Video"
                  // value={title}
                  accept="video/*"
                  onChange={(e) => setvideo(e.target.files[0])}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Legal Documentation</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="file"
                  placeholder="Legal Documentation"
                  // value={title}
                  accept="application/pdf"
                  onChange={(e) => setdoc(e.target.files[0])}
                />
              </div>
            </div>

            <div
              className="field is-grouped flex"
              style={{ justifyContent: "space-between" }}
            >
              <button className="button is-link" onClick={move}>
                <i
                  className="fa fa-angle-left"
                  style={{ marginRight: "5px" }}
                ></i>
                Previous{" "}
              </button>
              <div className="control">
                <button
                  className="button is-link"
                  type="submit"
                  onClick={formSubmit}
                >
                  Submit{" "}
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, { addidea })(Overview);
