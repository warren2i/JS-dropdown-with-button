
function GetSelectedValue(){
				var e = document.getElementById("command-select");
				var result = e.options[e.selectedIndex].value;
			}

			function GetSelectedText(){
				var e = document.getElementById("command-select");
				var result = e.options[e.selectedIndex].text;
				alert(result);

			}
