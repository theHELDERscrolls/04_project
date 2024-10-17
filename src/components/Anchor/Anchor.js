export const anchorTemplate = (
  classAnchor,
  hrefAnchor,
  classImg,
  srcImg,
  altImg,
  text
) => {
  return `<a class="${classAnchor}" href="${hrefAnchor}" target="_blank" rel="noopener noreferrer"><img class="${classImg}" src="${srcImg}" alt="${altImg}"><span>${text}</span></a>`;
};
