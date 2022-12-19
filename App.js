let img = document.getElementById("img");
let input = document.getElementById("input");
let generate = document.getElementById("submit");
generate.addEventListener("click", submitHandler);
function submitHandler() {
  img.style.display = "block";
  let str = input.value;
  if (str.length === 0) {
    return;
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${str}`;
    input.value = " ";
  }
}
