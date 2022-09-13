import classes from "../styles/Experience.module.css";
import { projects } from "../assets/data";
const Project = () => {
  console.log(projects);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.list}>
        {projects.map((current) => (
          <div className={classes.project}>
            <div data-aos="slide-left" className={classes.info}>
              <p className={classes.projectTitle}>{current.title}</p>
              <div className={classes.descriptionContainer}>
                {current.description.map((description, i) => (
                  <div key={i}>
                    <p className={classes.projectDescription}>{description}</p>
                  </div>
                ))}
              </div>

              <div className={classes.actions}>
                <button className={`${classes.live} ${classes.btn}`}>
                  See Live
                </button>
                <button className={`${classes.code} ${classes.btn}`}>
                  Source Code
                </button>
              </div>
            </div>
            <div data-aos="slide-right" className={classes.ss}>
              <img alt="" src={`images/${current.image}`}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
