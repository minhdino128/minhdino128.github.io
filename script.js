"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

const messages = [
  "Không Bao Giờ 😤",
  "Anh bicc lỗi rồi ạa 🥺",
  "Mong em tha lỗi choo Anh :((",
  "Anh saii rồi, anh đáng trách ạ 😭",
  "Em đừng giận Anh nữa nhoo 🥹",
  "Anh iu em nhắm nhunnn đóoooo 💗",
  "Anh hứa sẽ ngoan hơn màaa 🧸",
  "Bé iuuu đừng giận anh nữa 😭",
  "Cho anh một cơ hội nhaaa 💖",
  "Anh hong dám làm em buồn nữa 🥺",
  "Anh sẽ nghe lời em màaaa 🌷",
  "Anh xin lỗiii công chúa của anh 👑",
  "Anh thương em nhìu lắmmm 💕",
  "Em là cả thế giới của anh đóoo 🥹",
  "Đừng giận anh nữa màaaa 😭",
  "Anh biết lỗi thật rồi ạaa 💗",
  "Anh chỉ muốn em vui thôiii 🌸",
  "Bấm nút tha lỗi đi bé iuuu 💝",
  "Anh xin lỗi nhìu nhìu lắm 🥺",
  "Tha lỗi cho anh nhaaa 💗"
];

let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  noCount++;

  const progress = Math.min(
    noCount / (messages.length - 1),
    1
  );

  const imageIndex = Math.min(
    Math.ceil(noCount / 4),
    MAX_IMAGES
  );

  changeImage(imageIndex);

  // Nút đồng ý to dần
  const yesScale = 1 + progress * 5;
  yesButton.style.transform = `scale(${yesScale})`;

  // Nút từ chối nhỏ dần nhưng không biến mất
  const noScale = Math.max(0.03, 1 - progress * 0.97);

  // Đổi câu chữ
  noButton.textContent =
    messages[Math.min(noCount, messages.length - 1)];

  // Cho nút từ chối nhảy lung tung
  moveNoButtonRandom(noScale);
});

function moveNoButtonRandom(scale) {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const randomX = Math.max(0, Math.random() * maxX);
  const randomY = Math.max(0, Math.random() * maxY);

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  noButton.style.transform = `scale(${scale})`;
}

function handleYesClick() {
  titleElement.innerHTML =
    "Anh cảm ơn bé iuuu nhìu nhắmmm 💗<br>" +
    "Anh hứa hongg làm em buồn nữa đouuu:33 💕";

  buttonsContainer.classList.add("hidden");
  noButton.style.display = "none";

  changeImage("yes");

  document.body.classList.add("accepted");
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}
