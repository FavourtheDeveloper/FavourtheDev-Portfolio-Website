import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project1",
      about:
        "Bookr is an accommodation booking website that provides users with the ability to book hotel rooms for their vacation.Its features includes a user data form, calendar, different room types to choose from, and a cart to display the price.",
      techs: ["React", "Bootstrap", "MongoDb"],
      code: "demo.com",
      livedemi: "demo.com",
    },
    {
      id: 2,
      title: "Project1",
      about:
        "Bookr is an accommodation booking website that provides users with the ability to book hotel rooms for their vacation.Its features includes a user data form, calendar, different room types to choose from, and a cart to display the price.",
      techs: ["React", "Bootstrap", "MongoDb"],
      code: "demo.com",
      livedemi: "demo.com",
    },
    {
      id: 3,
      title: "Project1",
      about:
        "Bookr is an accommodation booking website that provides users with the ability to book hotel rooms for their vacation.Its features includes a user data form, calendar, different room types to choose from, and a cart to display the price.",
      techs: ["React", "Bootstrap", "MongoDb"],
      code: "demo.com",
      livedemi: "demo.com",
    },
    {
      id: 4,
      title: "Project4",
      about:
        "Bookr is an accommodation booking website that provides users with the ability to book hotel rooms for their vacation.Its features includes a user data form, calendar, different room types to choose from, and a cart to display the price.",
      techs: ["React", "Bootstrap", "SQL"],
      code: "demo.com",
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
                <a href=""><i class="fab fa-github fa-3x"></i></a>
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
