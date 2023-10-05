import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h3>Some of my Techncal Skills Include:</h3>
        <div className="row">
          <div className="col-lg-2 col-0"></div>
          <div className="col-lg-3 col-6">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <ul>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <ul>
              <li>Git</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className="col-lg-2 col-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
