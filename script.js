function removeButton() {
    var button = document.getElementById("addDefinition");
    button.remove();
  }
  


function changeText() {
  var button = document.getElementById("LoginButton");
  if (button.innerHTML == "Login") {
    button.innerHTML = "Logout";
  } else {
    button.innerHTML = "Login";
  }
}

alert("Ninja was liked");
