import "./AboutMe.css";

import { dataProfile } from "../../../data/myProfile";
import { anchorTemplate } from "../Anchor/Anchor";

export const createAboutMe = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
          <section id="aboutMe">
            <h1>${dataProfile.name}</h1>
            <img id="imgProfile" src="${
              dataProfile.avatar
            }" alt="Image profile">
            <div id="social">
              ${anchorTemplate(
                "social-link",
                "mailto: manuhelderruiz@gmail.com",
                "",
                "/assets/icons/icon_gmail.svg",
                "Email",
                "Email"
              )}
              ${anchorTemplate(
                "social-link",
                "https://www.linkedin.com/in/helder-manuel-vieira-ruiz-63a2821b4/",
                "",
                "/assets/icons/icon_linkedin.svg",
                "LinkedIn",
                "LinkedIn"
              )}
              ${anchorTemplate(
                "social-link",
                "https://github.com/theHELDERscrolls",
                "",
                "/assets/icons/icon_github.svg",
                "Github",
                "Github"
              )}
            </div>
            <p>${dataProfile.aboutMe}</p>
            <div id="icons">
              <div id="icons-carousel">
                <img src="/assets/icons/icon_angular.svg" alt="Angular">
                <img src="/assets/icons/icon_css.svg" alt="CSS3">
                <img src="/assets/icons/icon_figma.svg" alt="Figma">
                <img src="/assets/icons/icon_git.svg" alt="Git">
                <img src="/assets/icons/icon_github.svg" alt="Github">
                <img src="/assets/icons/icon_html5.svg" alt="HTML5">
                <img src="/assets/icons/icon_java.svg" alt="Java">
                <img src="/assets/icons/icon_javascript.svg" alt="JavaScript">
                <img src="/assets/icons/icon_lightroom.svg" alt="Lightroom">
                <img src="/assets/icons/icon_mysql.svg" alt="MySQL">
                <img src="/assets/icons/icon_php.svg" alt="PHP">
                <img src="/assets/icons/icon_react.svg" alt="React">
                <img src="/assets/icons/icon_sass.svg" alt="Sass">
                <img src="/assets/icons/icon_vitejs.svg" alt="Vite">
                <img src="/assets/icons/icon_vscode.svg" alt="Visual Studio Code">
              </div>
            </div>
          </section>
`;
};
