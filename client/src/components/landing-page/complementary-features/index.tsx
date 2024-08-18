import React from "react";
import "./complementary-features.css";
import FeatureImg from "@assets/images/screen.png";
import { features } from "@data/dummyDatas";

const ComplementaryFeatures = () => {

  return (
    <div className="padded-container">

      <div className="complementary-features-container">
        <h1>
          Complementary features
          <br />
          for your business needs
        </h1>
        {features.map((feature, index) => (
          <div className="complementary-features" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="feature-img">
                  <img src={FeatureImg} alt="FeatureImg" />
                </div>
                <div className="feature-details">
                  <div className="feature-contents">
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                  <div className="feature-btn">
                    <button className="launch-btn">Launch Demo</button>
                    <button className="info-btn">More info</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="feature-details">
                  <div className="feature-contents">
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                  <div className="feature-btn">
                    <button className="launch-btn">Launch Demo</button>
                    <button className="info-btn">More info</button>
                  </div>
                </div>
                <div className="feature-img">
                  <img src={FeatureImg} alt="FeatureImg" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplementaryFeatures;
