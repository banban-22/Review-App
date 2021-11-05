const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "image/image2.png",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur rerum neque doloribus quos doloremque ad ipsum odit ea! Quas repellat sed animi repudiandae, facere et fugit ex deserunt aliquid libero?",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "System Engineer",
    img: "image/image3.jpeg",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur rerum neque doloribus quos doloremque ad ipsum odit ea! Quas repellat sed animi repudiandae, facere et fugit ex deserunt aliquid libero?",
  },
  {
    id: 3,
    name: "John Code",
    job: "UI Designer",
    img: "image/image2.png",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur rerum neque doloribus quos doloremque ad ipsum odit ea! Quas repellat sed animi repudiandae, facere et fugit ex deserunt aliquid libero?",
  },
  {
    id: 4,
    name: "Rose Hilton",
    job: "Product Designer",
    img: "image/image3.jpeg",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur rerum neque doloribus quos doloremque ad ipsum odit ea! Quas repellat sed animi repudiandae, facere et fugit ex deserunt aliquid libero?",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  //   console.log(item);
  showPerson(currentItem);
});

// Show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show prev person
prevBtn.addEventListener("click", function () {
  if (currentItem <= 0) {
    currentItem = reviews.length - 1;
  }
  currentItem--;
  showPerson(currentItem);
});

// show modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openBtn.addEventListener("click", openModal);

// close modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close Modal by clicking the "esc" key
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
