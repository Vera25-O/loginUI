function mainFunction() {
	var user = document.getElementById("username");
	var pass = document.getElementById("password");

	user.onfocus = function () {
		if (user.value === "Username") {
			user.value = "";
		}
	};
	user.onblur = function () {
		if (user.value === "") {
			user.value = "Username";
		}
	};

	pass.onfocus = function () {
		if (pass.value === "Password") {
			pass.value = "";
		}
	};
	pass.onblur = function () {
		if (pass.value === "") {
			pass.value = "Password";
		}
	};
	
}

window.onload = function () {
	mainFunction();
}