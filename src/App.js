import Header from "./components/Header.js";

export default function App({ $target }) {
  const headerComponent = Header();
  $target.appendChild(headerComponent);

  const pageContent = document.createElement('main');
  pageContent.id = 'page_content';
  

  return {
    setPage: ({ contents }) => {
      pageContent.innerHTML = '';
      pageContent.appendChild(contents);
      $target.appendChild(pageContent);
    },
    unmount: () => $target.removeChild(headerComponent),
  };
}
