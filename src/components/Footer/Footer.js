import "./Footer.css"

export const createFooter = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
        <p>Powered by <a href="https://github.com/theHELDERscrolls" target="_blank"
            rel="noopener noreferrer">theHELDERscrolls</a>.</p>
`;
};
