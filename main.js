import "./style.css";

import { createNavbar } from "./src/components/Header/Header";
import { createAboutMe } from "./src/components/AboutMe/AboutMe";
import { lighDarkBtn } from "./src/utils/changeMode";
import { createFooter } from "./src/components/Footer/Footer";

const init = () => {
  createNavbar();
  lighDarkBtn();
  createAboutMe();
  createFooter();
};

init();
