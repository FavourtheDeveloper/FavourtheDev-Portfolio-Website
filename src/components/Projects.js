import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Password Protected File Sharing Site",
      about:
        "It gives a feature that encrypts an uploaded file with a password and generates a link where the file can be downloaded by only those who have the password.",
      techs: ["NodeJs", "MongoDb", "ExpressJs"],
      code: "https://github.com/FavourtheDeveloper/Password-Protected-File-Sharing-Site-With-Node.js-MongoDB-and-Express.git",
      livedemi: "demo.com",
    },
    {
      id: 2,
      title: "Node Js Passport Login System",
      about:
        "Login and Registration System developed using Node.js, Express.js, MongoDB, and Passport.js. It offers secure user authentication and registration, making it suitable for various web applications.",
      techs: ["NodeJs", "MongoDb", "ExpressJs", "Passport JS"],
      code: "https://github.com/FavourtheDeveloper/Node-JS-with-Express-Passport-Auth.git",
      livedemi: "demo.com",
    },
    {
      id: 3,
      title: "F-Blog",
      about:
        "This is a Simple Blog Website Project created with Node.js, Express.js, and MongoDB. It provides an easy-to-use platform for creating and managing blog content.",
      techs: ["Node Js", "Express Js", "MongoDb"],
      code: "https://github.com/FavourtheDeveloper/F-BLOG.git",
      livedemi: "demo.com",
    },
    {
      id: 4,
      title: "Database System with PHP",
      about:
        "This is a PHP-based Database System designed for managing employee records. It allows for creating, viewing, updating, and deleting employee information, simplifying HR tasks.",
      techs: ["PHP"],
      code: "https://github.com/FavourtheDeveloper/Database-System-with-PHP.git",
      livedemi: "demo.com",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h3>Some Projects I worked on</h3>
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="projectcard">
                <h4>{project.title}</h4>
                <p>{project.about}</p>
                {project.techs.map((tech, index) => (
                  <button key={index}>{tech}</button>
                ))}
                <div className="githubicon text-center">
                <a href={project.code} target="_blank"><i class="fab fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
