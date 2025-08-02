// Attention to detail in comments
// - In the video, the "treats and walks" is flipping back and forth just slightly after everything else is, so I put a
//   80ms delay on them.
// - "bio" and "treats" go "left/right" whereas "walks" goes "right/left".
// - The happy dog icons on the right side of the screen alternate facing left/right/left.
// - When the top happy dog is facing right, then the "bio" bone should have it's left side forward.
window.addEventListener("load", () => {
	[
		"bioBone",
		"happyDog1",
		"happyDog2",
		"happyDog3",
	].forEach(item => {
		flipBetween(item)
	})

	setTimeout(() => {
		[
			"treatsBone",
			"walksBone",
		].forEach(data => {
			flipBetween(data)
		});
	}, 50)

})

function flipBetween(elementId) {
	setInterval(function () {
		const htmlElement = document.getElementById(elementId);

		if (htmlElement.classList.contains("flipped")) {
			htmlElement.classList.remove("flipped");
		} else {
			htmlElement.classList.add("flipped");
		}

	}, 400);
}
