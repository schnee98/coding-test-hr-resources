import ContentTitle from "../components/ContentTitle.js";
import { appendChildren } from "../utils/nodeUtils.js";

const PAGE_TITLE = "Sign Up, Great PeoPle!";

const NAME_FIELD = `
  <div>
    <span class="form_description">이름</span>
    <span class="mark">(필수*)</span>
  </div>
  <input id="name" placeholder="이름" />
`;

const EMAIL_FIELD = `
  <div>
    <span class="form_description">이메일</span>
    <span class="mark">(필수*)</span>
  </div>
  <input id="email" placeholder="이메일" />
`;

const NICKNAME_FILED = `
  <div>
    <span class="form_description">닉네임</span>
    <span class="mark">(필수*)</span>
  </div>
  <input id="nickname" placeholder="닉네임" />
`;

const ROLE_FIELD = `
  <div>
    <span class="form_description">직군</span>
    <span class="mark">(필수*)</span>
  </div>
  <select id="role" name="role">
      <option value="">직군을 선택해주세요</option>
      <option value="backend">백엔드</option>
      <option value="frontend">프론트엔드</option>
      <option value="fullstack">풀스택</option>
  </select>
`;

const MBTI_FIELD = `
  <div>
    <span class="form_description">MBTI</span>
  </div>
  <input id="mbti" placeholder="MBTI" />
`;

const SUBMIT_BUTTON = `
  <button type="submit">등록</button>
`;

const renderFields = (forms) => {
  const nameField = document.createElement("span");
  nameField.className = "form_elem";
  nameField.innerHTML = NAME_FIELD;

  const emailField = document.createElement("span");
  emailField.className = "form_elem";
  emailField.innerHTML = EMAIL_FIELD;

  const nicknameField = document.createElement("span");
  nicknameField.className = "form_elem";
  nicknameField.innerHTML = NICKNAME_FILED;

  const roleField = document.createElement("span");
  roleField.className = "form_elem";
  roleField.innerHTML = ROLE_FIELD;

  const mbtiField = document.createElement("span");
  mbtiField.className = "form_elem";
  mbtiField.innerHTML = MBTI_FIELD;

  const submitButton = document.createElement("span");
  submitButton.className = "form_elem";
  submitButton.innerHTML = SUBMIT_BUTTON;

  appendChildren([nameField, emailField, nicknameField, roleField, mbtiField, submitButton], forms);
}

export default function SignupPage() {
  const contents = document.createDocumentFragment();

  const contentTitle = ContentTitle(PAGE_TITLE);

  const forms = document.createElement("div");
  forms.id = "form_container";

  renderFields(forms);
  appendChildren([contentTitle, forms], contents);

  return {
    contents,
    unmount: () => {},
  };
}
