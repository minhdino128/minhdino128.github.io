
"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

// Những câu xin lỗi
const messages = [
  "Không bao giờ 😤",
  "Anh bicc lỗi rồi ạaa 🥺",
  "Mong em tha lỗi cho anh :((",
  "Anh saii rồi, anh đáng trách ạ 😭",
  "Em đừng giận anh nữa nhooo 🥹",
  "Anh iu em nhắm nhunnn đóoooo 💗",
  "Anh hứa sẽ ngoan hơn màaa 🧸",
  "Đừng giận anh nữa màaa 😭",
  "Cho anh một cơ hội nữa nha 💖",
  "Anh hứa hong làm em buồn nữa 🥺",
  "Anh sẽ nghe lời em màaa 🌷",
  "Em là công chúa của anh đó 👑",
  "Anh xin lỗiii bé iuuu 😭",
  "Tha lỗi cho anh đi màaa 💗",
  "Anh iu em nhìu nhìu lắmmm 🥹",
  "Bé ơi đừng giận anh nữa 💞",
  "Anh biết anh sai rồiii 🥺",
  "Anh chỉ muốn em vui thôiii 🌸",
  "Bấm nút hồng tha lỗi đi mà 💝",
  "Anh xin lỗi công chúa của anh 💗"
];

let noCount = 0;
let finished = false;

// Nút đồng ý
yesButton.addEventListener("click", handleYesClick);

// Nút từ chối
noButton.addEventListener("click", function () {
  if (finished) return;

  noCount++;

  const progress = Math.min(
    noCount / (messages.length - 1),
    1
  );

  // Thay ảnh mèo
  const imageIndex = Math.min(
    Math.ceil(noCount / 4),
    MAX_IMAGES
  );

  changeImage(imageIndex);

  // Nút chấp nhận phóng to dần
  const yesScale = 1 + progress * 5;

  yesButton.style.transform =
    `scale(${yesScale})`;

  // Nút từ chối nhỏ dần
  const noScale = Math.max(
    0.01,
    1 - progress * 0.99
  );

  noButton.style.transform =
    `scale(${noScale})`;

  // Thay câu nói trên nút
  noButton.textContent =
    messages[Math.min(noCount, messages.length - 1)];

  // Giữ nút chấp nhận ở phía trước
  yesButton.style.zIndex = "10";
  noButton.style.zIndex = "1";

  // Khi nút từ chối nhỏ nhất
  if (progress >= 1) {
    finished = true;

    noButton.classList.add("tiny");

    // Vẫn hiện nhưng không bấm được
    noButton.disabled = true;
    noButton.style.pointerEvents = "none";
    noButton.style.opacity = "1";

    yesButton.textContent =
      "Tha lỗi cho anh nhaaa 🥹💗";
  }
});

// Khi nhấn tha lỗi
function handleYesClick() {
  titleElement.innerHTML =
    "Anh cảm ơn bé iuuu nhìu lắmmm 💗<br>" +
    "Anh hứa sẽ thương em và hong làm em buồn nữa đouuu 🥹💕";

  buttonsContainer.classList.add("hidden");

  changeImage("yes");

  document.body.classList.add("accepted");
}

// Đổi hình mèo
function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}
