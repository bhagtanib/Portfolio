import classes from "../styles/About.module.css";

const About = () => {
  return (
    <div id="about" className={classes.container}>
      <h1 className={classes.title}>About Page</h1>
      <div className={classes.pageContent}>
        <div className={classes.profileContainer}>
          <img
            className={classes.profile}
            alt="my-profile"
            src="https://media-exp1.licdn.com/dms/image/C5103AQEAApkE6W-3sQ/profile-displayphoto-shrink_800_800/0/1578456681657?e=1668038400&v=beta&t=RBfYVazpa3dWkWLMotmGYQ4Qt5hcjr4c12xO63qjdDk"
          ></img>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.info}>
            I'm an international student at the Whitworth University pursuing a
            Bachelor's degree in Computer Science. I have completed an
            independent web development course from Udemy which has allowed me
            to work on some of the most exciting projects.
          </p>
          <p className={classes.info}>
            As a developer, I'm wildly enthusiastic about coding,
            problem-solving, and software development. I am always ready to
            learn to grow professionally in this field.
          </p>{" "}
          <p className={classes.info}>
            {" "}
            I am proficient in JavaScript, Python, Java, HTML5, CSS3, React,
            SCSS, Flask, Express.js, Node.js, SQL, PostgreSQL, and Git.
            Furthermore, I am familiar with Redux, SQLite, and Django.
          </p>
          <button className={classes.infoBtn}>View Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
