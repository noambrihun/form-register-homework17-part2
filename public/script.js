function sendData(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("msg");

  fetch("/signup", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ username, email, password, confirmPassword })
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        location.href = "/home.html?u=" + data.username;
      } else {
        msg.innerText = data.error;
        msg.style.color = "red";
      }
    })
    .catch(err => console.log("Error:", err));
}
