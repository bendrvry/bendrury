// script.js

// Function to open the modal
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Close modal on pressing Esc key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Function to cycle through the image sets
let currentSet = 1;
const totalSets = 3;
const switchInterval = 15000; // 15 seconds

function switchImages() {
  // Remove the "active" class from the current set
  document.getElementById(`set${currentSet}`).classList.remove('active');
  
  // Move to the next set, cycling back to 1 if needed
  currentSet = (currentSet % totalSets) + 1;

  // Add the "active" class to the next set
  document.getElementById(`set${currentSet}`).classList.add('active');
}

// Start the image switching after 10 seconds
setInterval(switchImages, switchInterval);

// Initial set to active
document.getElementById(`set${currentSet}`).classList.add('active');

