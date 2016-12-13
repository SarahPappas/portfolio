function displayEmail() {
	var el = document.getElementById("js-email");
	el.textContent = atob("cGFwcGFzLnNhcmFoQGdtYWlsLmNvbQ==");
}

document.body.onload = function () {
	setTimeout(displayEmail, 1000);
}