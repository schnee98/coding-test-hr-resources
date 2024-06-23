import Card from "../components/Card.js";
import ContentTitle from "../components/ContentTitle.js";
import { appendChildren } from "../utils/nodeUtils.js";

const PAGE_TITLE = "Great PeoPle";

const fetchPersonalInfo = async () => {
  const personalInfo = JSON.parse(localStorage.getItem("personalInfo")) || [];

  if (personalInfo.length !== 0) return personalInfo;

  try {
    const request = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://localhost:3000/src/data/new_data.json", request);

    if (!response.ok) throw new Error("에러가 발생하였습니다.");

    const infoList = await response.json();
    localStorage.setItem("personalInfo", JSON.stringify(infoList));

    return infoList;
  } catch (error) {
    console.error(error.message);
  }
};

const renderCards = async (cards) => {
  const personalInfo = await fetchPersonalInfo();
  const cardList = personalInfo.map(({ nickname, mbti }, idx) => Card({ nickname, mbti, idx }));

  appendChildren(cardList, cards);
};

const watchCardStatus = () => {
  window.addEventListener("beforeunload", () => {
    const cards = [...document.querySelectorAll(".card")];
    const cardStatus = cards.map((card) => ({
      idx: card.dataset.idx,
      status: card.classList.toString(),
    }));

    localStorage.setItem('cardStatus', JSON.stringify(cardStatus));
  });
};

export default function HomePage() {
  const contents = document.createDocumentFragment();

  const contentTitle = ContentTitle(PAGE_TITLE);

  const cards = document.createElement("div");
  cards.id = "cards_container";
  
  renderCards(cards);
  appendChildren([contentTitle, cards], contents);
  watchCardStatus();

  return {
    contents,
    unmount: () => {},
  };
}
