import React from "react";
import { connect } from "react-redux";
// import ideas from "../../StaticData/ideas";
import DemoCarousel from "./components/DemoCarousel";
import DescriptionSection from "./components/DescriptionSection";
import PopularSection from "./components/PopularSection";
import { getideas } from "../../redux-implementation/actions";
import Img from "../../Assets/background.png";
import { useLocation } from "react-router-dom";
function Home({ state, getideas }) {
  const location = useLocation();
  React.useEffect(() => {
    getideas();
    if (location.pathname === "/home") {
      const body = document.getElementsByTagName("body");
      body[0].style.background = "#472169";
      console.log(body[0], body[0].style);
    } else {
      const body = document.getElementsByTagName("body");
      body[0].style.background = `url(${Img})`;
      console.log(body[0], body[0].style);
    }
  }, [getideas]);
  return (
    <>
      <DemoCarousel />
      <DescriptionSection />
      {state.ideas && <PopularSection ideas={state.ideas} />}
    </>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, { getideas })(Home);
