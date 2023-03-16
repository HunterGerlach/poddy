function injectPoddy() {
  const poddyImage = document.createElement("img");
  poddyImage.src = chrome.runtime.getURL("img/poddy.png");
  poddyImage.id = "poddy";
  document.body.appendChild(poddyImage);
}

window.addEventListener("load", () => {
  injectPoddy();
});
