import ContentTitle from "../components/ContentTitle.js";
import { appendChildren } from "../utils/nodeUtils.js";

const PAGE_TITLE = "Great PeoPle";

export default function HomePage() {
  const contents = document.createDocumentFragment();

  const contentTitle = ContentTitle(PAGE_TITLE);
  appendChildren([contentTitle], contents);

  return {
    contents,
    unmount: () => {},
  };
}
