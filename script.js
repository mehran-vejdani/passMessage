const messageInput = document.querySelector(".message-input");
const submitBtn = document.querySelector("button[type=submit]");
const messageOutput = document.querySelector(".message-output");

submitBtn.addEventListener("click", submitBtnFunc);

function submitBtnFunc() {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.classList.add("message-list");
  li.innerText = messageInput.value;
  ul.appendChild(li);
  messageOutput.appendChild(li);
  messageInput.value = "";
}
messageInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    submitBtnFunc();
  }
});
