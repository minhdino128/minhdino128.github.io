
"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

// CÂU NÓI CỦA NÚT TỪ CHỐI
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

  // Tiến trình từ 0 đến 1
  const progress = Math.min(
    noCount / (messages.length - 1),
    1
  );

  // Ảnh mèo thay đổi
  const imageIndex = Math.min(
    Math.ceil(noCount / 4),
    MAX_IMAGES
  );

  changeImage(imageIndex);

  // Nút đồng ý lớn dần
  const yesScale = 1 + progress * 5;

  yesButton.style.transform =
    `scale(${yesScale})`;

  // Nút từ chối nhỏ dần
  // Nhỏ nhất 3%, không biến mất
  const noScale = Math.max(
    0.03,
    1 - progress * 0.97
  );

  noButton.style.transform =
    `scale(${noScale})`;

  // Thay câu nói
  noButton.textContent =
    messages[Math.min(noCount, messages.length - 1)];

  // Nút từ chối luôn nằm trên nút đồng ý
  // Để vẫn có thể bấm khi nó rất nhỏ
  noButton.style.zIndex = "20";
  yesButton.style.zIndex = "10";

  // Không khóa nút từ chối
  // Không đặt opacity = 0
  // Không đặt display = none

});

// KHI NHẤN ĐỒNG Ý
function handleYesClick() {

  titleElement.innerHTML =
    "Anh cảm ơn bé iuuu nhìu lắmmm 💗<br>" +
    "Anh hứa hongg làm em buồn nữa đouuu 🥹💕";

  buttonsContainer.classList.add("hidden");

  changeImage("yes");

  document.body.classList.add("accepted");
}

// ĐỔI ẢNH MÈO
function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}
