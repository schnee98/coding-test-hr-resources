import ContentTitle from "../components/ContentTitle.js";
import { appendChildren } from "../utils/nodeUtils.js";

const PAGE_TITLE = "Sign Up, Great PeoPle!";

export default function SignupPage() {
  const contents = document.createDocumentFragment();

  const contentTitle = ContentTitle(PAGE_TITLE);
  appendChildren([contentTitle], contents);

  return {
    contents,
    unmount: () => {},
  };
}
