/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { updateprofile } from "../../redux-implementation/actions";

function EditProfile({ state, updateprofile, history }) {
  const [firstName, setFirstName] = React.useState(state.user.first_name);
  const [lastName, setlastName] = React.useState(state.user.last_name);
  const [profile, setprofiel] = React.useState(state.user.profile);
  const [cnic, setcnic] = React.useState(state.user.cnic);
  const [phone, setphone] = React.useState(state.user.phone);
  function formSubmit(e) {
    e.preventDefault();
    updateprofile(firstName, lastName, profile, cnic, phone, state.user._id);
    history.push("/profile/active");
  }
  return (
    <div className="container">
      <div className="flex center h-120">
        {state.user && (
          <form
            action={`http://localhost:4001/editprofile/${state.user._id}`}
            method="HTTP_METHOD"
            enctype="multipart/form-data"
            className="form"
            onSubmit={formSubmit}
            style={{ marginTop: "90px", background: "white" }}
          >
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  autoFocus
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">CNIC</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="CNIC Number"
                  value={cnic}
                  onChange={(e) => setcnic(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Profile Picture</label>
              <div className="control">
                <input
                  className="input"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  // value={REQUEST_URL + state.user.profile}
                  onChange={(e) => e.target.files[0]}
                />
              </div>
            </div>
            <div
              className="field is-grouped flex"
              style={{ justifyContent: "space-between" }}
            >
              <div className="control">
                <button
                  className="button is-link"
                  type="submit"
                  onClick={formSubmit}
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { updateprofile })(EditProfile);
