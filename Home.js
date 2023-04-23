
		var loginButton = document.getElementById("login");
		var popup = document.getElementById("login-popup");
		var close = document.getElementsByClassName("close")[0];

		loginButton.onclick = function() {
			popup.style.display = "block";
		}

		close.onclick = function() {
			popup.style.display = "none";
		}

		window.onclick = function(event) {
			if (event.target == popup) {
				popup.style.display = "none";
			}
		}
