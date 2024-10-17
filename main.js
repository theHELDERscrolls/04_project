import "./style.css";

import { createNavbar } from "./src/components/Header/Header";
import { createAboutMe } from "./src/components/AboutMe/AboutMe";
import { lighDarkBtn } from "./src/utils/changeMode";

const init = () => {
  createNavbar();
  lighDarkBtn();
  createAboutMe();
};

init();
