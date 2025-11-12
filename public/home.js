const params = new URLSearchParams(location.search);
const name = params.get("u");
document.getElementById("welcome").innerText = "Hello " + (name || "User") + "!";
