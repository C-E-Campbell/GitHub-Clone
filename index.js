const historyBoxes = document.querySelectorAll(".history-item");
console.log(historyBoxes);
console.log(historyBoxes[7]);

historyBoxes.forEach(box => {
	let randomNum = Math.floor(Math.random() * 5);
	if (randomNum === 0) {
		box.style.background = "rgb(212, 212, 212)";
	} else if (randomNum === 1) {
		box.style.background = "#89cf8d";
	} else if (randomNum === 2) {
		box.style.background = "#51c468";
	} else if (randomNum === 3) {
		box.style.background = "#368a3d";
	} else if (randomNum === 4) {
		box.style.background = "#144617";
	}
});
