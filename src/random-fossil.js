import axios from "axios";

document
  .querySelector("#get-random-fossil")
  .addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log("posting to random_fossil.json");
    axios.post("/random-fossil.json", {}).then((promise) => {
      document.querySelector("#random-fossil-image").innerHTML = `<img src="${promise.data.img}"/>`;
      document.querySelector("#random-fossil-name").innerText = promise.data.name;
    });
  });
