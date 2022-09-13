import classes from "../styles/Intro.module.css";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  hidden: { opacity: 0, translateX: "-100px" },
  visible: { opacity: 1, translateX: "0px" },
};
const Intro = ({ color }) => {
  let givenColor = color ? color.toLowerCase() : "white";
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={classes.container} style={{ backgroundColor: givenColor }}>
      <span className="animate__animated animate__fadeIn">
        Hello, I am <span className={classes.name}> Bhavesh Bhagtani</span>
      </span>
      <span data-aos="slide-right" className={classes.brief}>
        I am a senior studying Computer Science at Whitworth University
      </span>
      {/* <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        ref={ref}
        variants={variant}
        initial={"hidden"}
        animate={control}
        className={classes.btn}
        onClick={() => console.log("Hello, I am a Senior")}
      >
        <img
          alt="know-more"
          src="https://img.icons8.com/sf-regular-filled/96/000000/sort-right.png"
        />
      </motion.button> */}
    </div>
  );
};
export default Intro;
