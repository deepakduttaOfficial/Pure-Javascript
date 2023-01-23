const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  faqData.map((data) => createFaq(data));
}
showFaq();

function createFaq(data) {
  const faq = document.createElement("div");
  faq.setAttribute("class", "faq");
  accordianBody.appendChild(faq);

  const faq_header = document.createElement("div");
  faq_header.setAttribute("class", "faq_header");
  faq.appendChild(faq_header);

  const h3 = document.createElement("h3");
  faq_header.appendChild(h3).innerText = data.question;

  const p = document.createElement("p");
  faq.appendChild(p).innerText = data.answer;
  p.setAttribute("id", `answer-${data.id}`);

  const show_btn = document.createElement("button");
  show_btn.setAttribute("class", "show_btn");
  faq_header.appendChild(show_btn).innerText = "+";
  show_btn.setAttribute("onclick", `btnStatusUpdate(${data.id})`);
}

function btnStatusUpdate(id) {
  const answer = document.getElementById(`answer-${id}`);
  if (answer.classList.contains(`hidden`)) {
    answer.removeAttribute("class");
  } else {
    answer.setAttribute("class", "hidden");
  }
}
