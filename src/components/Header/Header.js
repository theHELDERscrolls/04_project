import { btnTemplate } from "../Button/Button";
import "./Header.css";

export const createNavbar = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
        <nav id="navbar" class="default-display-navbar">
            <ul class="default-display-navbar">
                <li class="default-display-navbar">
                    <a href="#">About</a>
                </li>
                <li class="default-display-navbar">
                    <a href="#">Experience</a>
                </li>
                <li class="default-display-navbar">
                    <a href="#">Projects</a>
                </li>
                <li class="default-display-navbar">
                    ${btnTemplate(
                      "changeMode-btn",
                      "",
                      "/assets/icons/icon_system.svg",
                      "mode button",
                      ""
                    )}
                </li>
                <li class="default-display-navbar">
                    ${btnTemplate(
                      "changeLang-btn",
                      "",
                      "/assets/icons/icon_language.svg",
                      "language button",
                      ""
                    )}
                </li>
            </ul>
        </nav>
`;
};
