export default function ContentTitle(title) {
  const contentTitle = document.createElement("div");
  
  const titleText = document.createElement('h1');
  titleText.textContent = title;
  contentTitle.appendChild(titleText);

  return contentTitle;
}
