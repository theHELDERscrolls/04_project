import "./style.css";

import { createNavbar } from "./src/components/Header/Header";
import { createAboutMe } from "./src/components/AboutMe/AboutMe";
import { lighDarkBtn } from "./src/utils/changeMode";
import { createFooter } from "./src/components/Footer/Footer";
import { createExperience } from "./src/components/Experience/Experience";
import { activeDisplay } from "./src/utils/displayElement";
import { createEducation } from "./src/components/Education/Education";
import { createProjects } from "./src/components/Projects/Projects";

const init = () => {
  createNavbar();
  lighDarkBtn();
  createAboutMe();
  createExperience();
  activeDisplay();
  createEducation();
  // createProjects();
  createFooter();
};

init();
