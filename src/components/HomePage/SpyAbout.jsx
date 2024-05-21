import React from 'react';

const SpyAbout = () => {
  return (
    <div className="about-intro">
      <h2 className="about-intro-title" id="title1">
        S&P Dow Jones Indices
      </h2>
      <h2 className="about-intro-title" id="title2">
        helps investors around the globe
      </h2>
      <h2 className="about-intro-title" id="title3">
        make decisions with conviction.
      </h2>
      <div className="about-intro-text-section">
        <div className="animated-arrow"></div>
        <div className="bar vert"></div>
        <div className="about-intro-text">
          As the world's leading resource for benchmarks and
          investable indices, our solutions are widely considered
          indispensable in tracking market performance, evaluating
          portfolios, and developing investment strategies.
        </div>
      </div>
    </div>
  );
};

export default SpyAbout;
