import "./style.css";

import { createNavbar } from "./src/components/Header/Header";
import { createAboutMe } from "./src/components/AboutMe/AboutMe";

const init = () => {
  createNavbar();
  createAboutMe();
};

init();
