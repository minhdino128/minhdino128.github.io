
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
let currentScale = 1;
let positionReady = false;

// Khoảng dịch chuyển mỗi lần
const MIN_MOVE = 20;
const MAX_MOVE = 60;

// Khoảng cách an toàn giữa hai nút
const SAFE_GAP = 20;

// Thiết lập vị trí ban đầu
function setupNoButton() {
  // Lấy tọa độ nút đồng ý
  const yesRect = yesButton.getBoundingClientRect();

  const x = Math.min(
    window.innerWidth - 30,
    yesRect.right + 110
  );

  const y = Math.min(
    window.innerHeight - 30,
    yesRect.top + yesRect.height / 2
  );

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  positionReady = true;
}

// Tạo hình chữ nhật của nút từ chối
function getNoRect(x, y, scale) {
  const width = noButton.offsetWidth * scale;
  const height = noButton.offsetHeight * scale;

  return {
    left: x - width / 2,
    right: x + width / 2,
    top: y - height / 2,
    bottom: y + height / 2
  };
}

// Kiểm tra hai nút có chạm nhau không
function isOverlapping(noRect, yesRect) {
  return (
    noRect.left < yesRect.right + SAFE_GAP &&
    noRect.right > yesRect.left - SAFE_GAP &&
    noRect.top < yesRect.bottom + SAFE_GAP &&
    noRect.bottom > yesRect.top - SAFE_GAP
  );
}

// Dịch chuyển nút từ chối đoạn ngắn
function moveNoButtonRandom(scale) {
  if (!positionReady) setupNoButton();

  const currentX = parseFloat(noButton.style.left);
  const currentY = parseFloat(noButton.style.top);

  const yesRect = yesButton.getBoundingClientRect();

  const width = noButton.offsetWidth * scale;
  const height = noButton.offsetHeight * scale;

  const minX = width / 2 + 8;
  const maxX = window.innerWidth - width / 2 - 8;

  const minY = height / 2 + 8;
  const maxY = window.innerHeight - height / 2 - 8;

  let found = false;
  let targetX = currentX;
  let targetY = currentY;

  for (let i = 0; i < 150; i++) {
    const angle = Math.random() * Math.PI * 2;

    const distance =
      MIN_MOVE + Math.random() * (MAX_MOVE - MIN_MOVE);

    const x = Math.max(
      minX,
      Math.min(maxX, currentX + Math.cos(angle) * distance)
    );

    const y = Math.max(
      minY,
      Math.min(maxY, currentY + Math.sin(angle) * distance)
    );

    const noRect = getNoRect(x, y, scale);

    if (!isOverlapping(noRect, yesRect)) {
      targetX = x;
      targetY = y;
      found = true;
      break;
    }
  }

  // Nếu không tìm được vị trí phù hợp thì giữ nguyên
  if (!found) {
    targetX = currentX;
    targetY = currentY;
  }

  noButton.style.left = `${targetX}px`;
  noButton.style.top = `${targetY}px`;

  noButton.style.transform =
    `translate(-50%, -50%) scale(${scale})`;
}

// Nút từ chối
noButton.addEventListener("click", function () {
  noCount++;

  const progress = Math.min(
    noCount / (messages.length - 1),
    1
  );

  // Đổi ảnh mèo
  const imageIndex = Math.min(
    Math.ceil(noCount / 4),
    MAX_IMAGES
  );

  changeImage(imageIndex);

  // Nút đồng ý to dần
  // Giới hạn mức phóng to để có chỗ cho nút từ chối
  const yesScale = 1 + progress * 2.2;

  yesButton.style.transform =
    `scale(${yesScale})`;

  // Nút từ chối nhỏ dần, tối thiểu 3%
  currentScale = Math.max(
    0.03,
    1 - progress * 0.97
  );

  // Thay câu nói
  noButton.textContent =
    messages[Math.min(noCount, messages.length - 1)];

  // Nhảy một đoạn ngắn
  moveNoButtonRandom(currentScale);
});

// Nút đồng ý
yesButton.addEventListener("click", function () {
  titleElement.innerHTML =
    "Anh cảm ơn bé iuuu nhìu lắmmm 💗<br>" +
    "Anh hứa hongg làm em buồn nữa đouuu 🥹💕";

  buttonsContainer.classList.add("hidden");
  noButton.style.display = "none";

  changeImage("yes");
  document.body.classList.add("accepted");
});

// Đổi ảnh mèo
function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

// Chờ trang tải xong rồi đặt vị trí nút
window.addEventListener("load", setupNoButton);
