export const anchorTemplate = (classA, hrefA, srcImg, altImg, text) => {
  return `<a class="${classA}" href="${hrefA}" target="_blank" rel="noopener noreferrer"><img src="${srcImg}" alt="${altImg}">${text}</a>`;
};
