import { appendChildren } from "../utils/nodeUtils.js";

const getCardStatusFromLocal = (index) => {
  const { status } = JSON.parse(localStorage.getItem('cardStatus'))[index];

  return status;
}

const toggleCardStatus = ({ currentTarget }) => currentTarget.classList.toggle("is-flipped");

export default function Card({ nickname, mbti, idx }) {
  const cardStatus = getCardStatusFromLocal(idx);

  const card = document.createElement("div");
  card.className = cardStatus;
  card.setAttribute("idx", idx);

  const frontSide = document.createElement("div");
  frontSide.classList.add("card_plane", "card_plane--front");
  frontSide.innerText = nickname;

  const backSide = document.createElement("div");
  backSide.classList.add("card_plane", "card_plane--back");
  backSide.innerText = mbti;

  appendChildren([frontSide, backSide], card);

  card.addEventListener("click", toggleCardStatus);

  return card;
}
