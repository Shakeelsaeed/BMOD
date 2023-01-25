import React from "react";
import "bulma/css/bulma.css";
import { connect } from "react-redux";
import Img from "./Assets/background.png";
import Home from "./components/Home/Home";
import "font-awesome/css/font-awesome.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Ideas from "./components/Common/Ideas";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import AddGig from "./components/AddGig/AddGig";
import Profile from "./components/Profile/Profile";
import GigView from "./components/views-gigs/GigView";
import Investors from "./components/Common/Investors";
import ScrollToTop from "./components/Common/ScrollToTop";
import EditProfile from "./components/Profile/EditProfile";
import Overview from "./components/AddGig/Components/Overview";
import ProtectedRoute from "./components/Common/protectedRoute";
import Entrepreneures from "./components/Common/Entrepreneures";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import InvestorProfile from "./components/InvestorProfile/InvestorProfile";
import Active from "./components/Profile/components/childcomponents/Active";
import Pending from "./components/Profile/components/childcomponents/Pending";
import { checkAuthenticated, getusers } from "./redux-implementation/actions";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ActiveGigs from "./components/Admin/childcomponents/ActiveGigs";
import Users from "./components/Admin/childcomponents/Users";
import ChatPage from "./Chat/Pages/ChatPage";
function App({ checkAuthenticated, getusers, state }) {
  const location = useLocation();
  React.useEffect(() => {
    checkAuthenticated();
    getusers();
    if (location.pathname === "/home") {
      const body = document.getElementsByTagName("body");
      body[0].style.background = "#472169";
      console.log(body[0], body[0].style);
    } else {
      const body = document.getElementsByTagName("body");
      body[0].style.background = `url(${Img})`;
      console.log(body[0], body[0].style);
    }
  }, [checkAuthenticated, getusers]);
  return (
    <main>
      <Navbar />
      {/* <div className="container"> */}
      <ScrollToTop>
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/signup"
            render={() => {
              if (!state.isAuthenticated) return <Signup />;
              else return <Redirect to="/profile" />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/search" component={Ideas} />
          <Route path="/addidea" component={AddGig} />
          <Route path="/ideas" component={Ideas} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/investors" component={Investors} />
          <Route path="/entrepreneur" component={Entrepreneures} />
          <Route path="/editprofile/:id" component={EditProfile} />
          <Route path="/profile/editidea/:id" component={Overview} />
          <Route path="/idea/:id" component={GigView} />
          <ProtectedRoute
            path="/investor-dashboard"
            component={InvestorProfile}
          />
          {/* <ProtectedRoute path="/profile" component={Profile} /> */}
          <Route path="/chats" component={ChatPage} />
          <ProtectedRoute
            exact
            path="/profile/active"
            render={() => {
              return (
                <Profile>
                  <Active />
                </Profile>
              );
            }}
          />
          <ProtectedRoute
            exact
            path="/profile/pending"
            render={() => {
              return (
                <Profile>
                  <Pending />
                </Profile>
              );
            }}
          />
          <ProtectedRoute
            exact
            path="/admin/active"
            render={() => {
              return (
                <AdminDashboard>
                  <ActiveGigs />
                </AdminDashboard>
              );
            }}
          />
          <ProtectedRoute
            exact
            path="/admin/users"
            render={() => {
              return (
                <AdminDashboard>
                  <Users />
                </AdminDashboard>
              );
            }}
          />
          <Redirect from="/" exact to="/home" />
          <Redirect from="/profile" exact to="/profile/active" />
        </Switch>
      </ScrollToTop>
      {/* </div> */}
      <Footer />
    </main>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { checkAuthenticated, getusers })(App);
