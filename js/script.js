var divs = ['#home', '#skills', '#projects', '#contact'];
var index = 0;
const words = ["Soy Desarrollador.", "Soy Freelancer.", "Soy Mentor.", "Soy Instructor.", "Soy Conferencista.", "Soy Gamer."];
let i = 0;
let timer;

$(document).ready(function () {
	$('#next').on('click', function () {
		if (index == 3) {
			$("#next").attr("disabled", true);
		} else {
			$("#next").attr("disabled", false);
			$(divs[index]).fadeOut('slow', function () {
				index++;
				console.log(index);
				$(divs[index]).fadeIn('slow');
			});
		}
	});

	$('#prev').on('click', function () {
		if (index == 0) {
			$("#prev").attr("disabled", true);
		} else {
			$("#prev").attr("disabled", false);
			$(divs[index]).fadeOut('slow', function () {
				index--;
				//console.log(index);
				$(divs[index]).fadeIn('slow');
			});
		}
	});


	function typingEffect() {
		let word = words[i].split("");
		var loopTyping = function () {
			if (word.length > 0) {
				document.getElementById('word').innerHTML += word.shift();
			} else {
				deletingEffect();
				return false;
			};
			timer = setTimeout(loopTyping, 200);
		};
		loopTyping();
	};

	function deletingEffect() {
		let word = words[i].split("");
		var loopDeleting = function () {
			if (word.length > 0) {
				word.pop();
				document.getElementById('word').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, 200);
		};
		loopDeleting();
	};

	typingEffect();
});