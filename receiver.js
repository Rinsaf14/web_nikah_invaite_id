document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const receiverElement = document.querySelector("#receiver");

      receiverElement.textContent.Content = data.Penerima;
    })
    .catch((error) => console.error("Error:", error));
});
