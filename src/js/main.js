const notificationCounter = document.querySelector(".notifications-counter");
const notificationCards = document.querySelectorAll(
  ".notifications--notification-card"
);
const btnReadAll = document.querySelector(".mark-read");
let activeCounter = 0;
const activePosts = [];

const countActivePosts = function () {
  notificationCards.forEach((card) => {
    if (card.classList.contains("new-post")) {
      activePosts.push(card);
      activeCounter++;
    }
    notificationCounter.innerHTML = activeCounter;
  });
};

countActivePosts();

btnReadAll.addEventListener("click", () => {
  activePosts.forEach((card) => {
    card.classList.remove("new-post");
    const statusDot = card.querySelector(".status-dot");
    statusDot.classList.add("hidden-dot");
    activeCounter = 0;
    notificationCounter.innerHTML = activeCounter;
  });
});
