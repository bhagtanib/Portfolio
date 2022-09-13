import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.topContent}>
          <p className={classes.title}> Contact </p>
          <p className={classes.question}>Interested in hiring me?</p>
          <button className={classes.emailBtn}>Contact Me!</button>
        </div>
      </div>
      <div className={classes.bottom}>
        <button className={classes.navigateTop}></button>
        <div className={classes.socialLinks}>
          <img
            alt="twitter"
            src="https://img.icons8.com/ios-glyphs/60/ffffff/twitter--v1.png"
          />
          <a
            href="https://www.linkedin.com/in/bhavesh-bhagtani/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="linkedin"
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-2--v1.png"
            />
          </a>
          <a href="https://github.com/bhagtanib">
            <img
              alt="GitHUb"
              src="https://img.icons8.com/ios-glyphs/60/ffffff/github.png"
            />
          </a>
        </div>
        <h1 className={classes.copyright}>
          © 2020 - Design idea by Jacobo Martínez
        </h1>
      </div>
    </div>
  );
};

export default Footer;
