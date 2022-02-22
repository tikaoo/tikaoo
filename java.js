var btn = document.getElementById("btn");
var on = document.getElementById("on");

btn.onclick = function () {
  if (btn.innerHTML === "apagar a luz") {
    on.src = "apagada.png";
    btn.innerHTML = "acender a luz";
  } else {
    on.src = "acesa.png";
    btn.innerHTML = "apagar a luz";
  }
};
