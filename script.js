const newsletterPopup = document.getElementById("newsletterPopup");

// Show the popup after 5 seconds
setTimeout(() => {
  newsletterPopup.style.display = "block";
}, 5000);

// Close the popup when the close button is clicked
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  newsletterPopup.style.display = "none";
});


// Close the popup if user clicks outside the popup content
window.addEventListener("click", (event) => {
  if (event.target == newsletterPopup) {
    newsletterPopup.style.display = "none";
  }
});