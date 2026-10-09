"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "tớ iu bạn ,tớ hứa hongg làm bạn buồn nữa đouuu :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Tớ bicc lỗi rồi ạa",
    "Mong bạn tha lỗi choo Tớ :((",
    "Tớ saii rồi , tớ đáng trách ạ",
    "Bạn đừng giận Tớ nữa nhoo",
    "Tớ iu bạn nhắm nhunnn đóoooo",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
const listWishes = [
        "Không bao giờ dỗi nữa đâu mà 🥺",
    "Tớ biết lỗi thật rồi ạ...",
    "Đừng bấm 'Không' mà, tớ đau lòng lắm",
    "Cho tớ một cơ hội chuộc lỗi nha?",
    "Hứa từ nay sẽ nghe lời bạn mà!",
    "Bạn mà không tha lỗi là tớ khóc á 😭",
    "Thôi mà, tớ yêu bạn nhất thế giới!",
    "✨ Thương bạn nhất ✨",
    "💖 Đừng giận tớ nữa nha 💖",
    "🌸 Tớ biết lỗi rồi 🌸",
    "🔥 Mãi yêu bạn 🔥",
    "🌈 Thế giới của tớ là bạn 🌈",
    "💎 Đừng bỏ rơi tớ mà 💎",
    "🧸 Xin lỗi bạn iuu nhìu nhìu 🧸"
    ];

    const wishWrap = document.getElementById('wish-wrap');

    function createWish() {
        if (!wishWrap) return;
        const wish = document.createElement('div');
        wish.className = 'flying-wish';
        
        // Lấy ngẫu nhiên câu chúc
        wish.innerText = listWishes[Math.floor(Math.random() * listWishes.length)];
        
        // Vị trí ngang ngẫu nhiên
        wish.style.left = Math.random() * 80 + 5 + 'vw';
        
        // Tốc độ bay (từ 7 đến 10 giây - nhanh hơn xíu cho đỡ chán)
        const duration = Math.random() * 3 + 7;
        wish.style.animationDuration = duration + 's, 3s'; 

        // Làm cho mỗi câu chúc bắt đầu đổi màu ở một điểm khác nhau
        wish.style.animationDelay = `0s, -${Math.random() * 3}s`;

        wishWrap.appendChild(wish);

        setTimeout(() => {
            if(wish.parentNode) wish.remove();
        }, duration * 1000);
    }

    // Cứ 2 giây thả một câu chúc màu mè lên
    setInterval(createWish, 500);