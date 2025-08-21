import "./App.css";
import Nav from "./Nav";
import hero from "./assets/team_flag_image.jpg";
import slik1 from "./assets/brusilica.jpg";

import { motion } from "framer-motion";
function App() {
  return (
    <>
      <Nav />
      <div className="about">
        <div className="hero-text">
          <h1>
            CR<span className="third-letter">O</span>botics #7201
          </h1>
          <p>
            A small team of high school students aiming to compete <br />
            at a high level with a tight budget.
          </p>
        </div>
        <img src={hero} alt="Crobotics Team" className="hero-image" />
        <div
          className="scroll-arrow"
          onClick={() => {
            document
              .querySelector(".goals")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scroll down"
          tabIndex={0}
          role="button"
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              document
                .querySelector(".goals")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span />
        </div>
      </div>
      <div className="goals">
        <div className="goals-top">
          <motion.img
            src={slik1}
            alt=""
            className="slik1"
            initial={{ opacity: 0, x: -100 }} // start hidden
            whileInView={{ opacity: 1, x: 0 }} // animate in when visible
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          />
          <motion.div
            className="goals-text"
            initial={{ opacity: 0, y: 50 }} // start hidden
            whileInView={{ opacity: 1, y: 0 }} // animate in when visible
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // trigger only once, 30% in view
          >
            <h1>Our Mission</h1>
            <p>
              We want to show other people who are wanting to compete that it is
              not <br />
              about money and resources, but about passion, hard work, and{" "}
              <br />
              determination. With the right mindset and approach, anyone can{" "}
              <br />
              succeed, regardless of their financial or material circumstances.{" "}
              <br />
              <br />
              Despite facing competition from teams with much more resources, we{" "}
              <br />
              as a team have been able to achieve great success over several{" "}
              <br />
              years. This demonstrates that any individual or team can overcome{" "}
              <br />
              obstacles and come out with a great result. We aim to encourage{" "}
              <br />
              others to have faith in themselves and their abilities, and to{" "}
              <br />
              persist in pursuit of their goals, regardless of any perceived{" "}
              <br />
              disadvantages. Despite facing competition from teams with much
              more <br />
              resources, we as a team have been able to achieve great success
              over <br />
              several years. This demonstrates that any individual or team can{" "}
              <br />
              overcome obstacles and come out with a great result. We aim to{" "}
              <br />
              encourage others to have faith in themselves and their abilities,{" "}
              <br />
              and to persist in pursuit of their goals, regardless of any <br />
              perceived disadvantages. <br />
            </p>
          </motion.div>
        </div>
        <div className="goals-bottom">
          <motion.div
            className="goals-text"
            initial={{ opacity: 0, y: 50 }} // start hidden
            whileInView={{ opacity: 1, y: 0 }} // animate in when visible
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // trigger only once, 30% in view
          >
            <h1>Our Journey: From Idea to Reality</h1>
            <p>
              In 2017, Borna Massari, a student of Andrija Mohorovicica Rijeka{" "}
              <br />
              high school, with the help of prof. Patricija Nikolaus, prof.{" "}
              <br />
              Goran Boneta and six other students founded the Crobotics team.{" "}
              <br />
              Ever since its foundation, our team has welcomed many students.{" "}
              <br />
              From 2018 until now we have participated in various competitions{" "}
              <br />
              and achieved excellent results. The FRC competition held in New{" "}
              <br />
              York in 2018 has brought us 2 prizes: The 2018 Rookie Inspiration{" "}
              <br />
              Award and the 2018 Highest Rookie Seed Award. In the year 2020,{" "}
              <br />
              the competition was held in Istanbul where the team placed 22nd in{" "}
              <br />
              Europe. Last year, the FRC was held online due to the <br />
              epidemiological situation, where we achieved 19th place in the{" "}
              <br />
              group.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1AaoSsf5_Us?si=zzho00IHKn7crNjo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
