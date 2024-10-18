import { btnTemplate } from "../Button/Button";
import "./Header.css";

export const createNavbar = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
        <nav id="navbar" class="default-display">
            <ul class="default-display">
                <li class="default-display">
                    <a href="#aboutMe">About</a>
                </li>
                <li class="default-display">
                    <a href="#work-experience">Experience</a>
                </li>
                <li class="default-display">
                    <a href="#">Projects</a>
                </li>
                <li class="default-display">
                    ${btnTemplate(
                      "changeMode-btn",
                      "default-display",
                      "moon-sun",
                      "/assets/icons/icon_moon.svg",
                      "mode button",
                      ""
                    )}
                </li>
            </ul>
        </nav>
`;
};
