import React from "react";
import Video from "../../../Assets/videothumbHome.png";
import CustomModal from "../../Common/CustomModal";

function DescriptionSection(props) {
  return (
    <div className="description-section">
      <div className="container">
        <div className="flex row content">
          <div className="content-box">
            <h2 style={{ color: "#472169" }}>
              A whole new way for Entrepreneurs and Idea Makers to Raise
              Investments.
            </h2>
            <p style={{ color: "#472169" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              tempore, consequatur ullam qui hic ab molestiae magni dignissimos
              quidem deserunt quis? Repellendus a, placeat natus consequuntur
              consequatur iusto aut? Laborum.
            </p>
            <p style={{ color: "#472169" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aut sit laboriosam vero eaque expedita ducimus aspernatur ea nobis
              similique odit excepturi tempore, dolorum nesciunt velit iure id
              quo dolorem.
            </p>
          </div>
          <CustomModal
            button={
              <div className="videothumb">
                <img src={Video} alt="Thumbnail" />
              </div>
            }
            children={
              <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/UvWMlNZuQTc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
