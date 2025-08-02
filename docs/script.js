// Attention to detail in comments
// - In the video, the "treats and walks" is flipping back and forth just slightly after everything else is, so I put a
//   80ms delay on them.
// - "bio" and "treats" go "left/right" whereas "walks" goes "right/left".
// - The puppy icons on the right side of the screen alternate facing left/right/left.
// - When the top puppy is facing right, then the "bio" bone should have it's left side forward.
window.onload = function () {
	[
		{
			imageId: "bio",
			image: "bone3D-flipped.png",
			imageFlipped: "bone3D.png"
		},
		{
			imageId: "puppy1",
			image: "puppy-flipped.png",
			imageFlipped: "puppy.png"
		},
		{
			imageId: "puppy2",
			image: "puppy.png",
			imageFlipped: "puppy-flipped.png"
		},
		{
			imageId: "puppy3",
			image: "puppy-flipped.png",
			imageFlipped: "puppy.png"
		}
	].forEach(item => {
		flipBetween(item)
	})

	setTimeout(() => {
		[
			{
				imageId: "treats",
				image: "bone3D-flipped.png",
				imageFlipped: "bone3D.png"
			},
			{
				imageId: "walks",
				image: "bone3D.png",
				imageFlipped: "bone3D-flipped.png"
			},
		].forEach(data => {
			flipBetween(data)
		});
	}, 80)
}

function flipBetween(data) {
	setInterval(function () {
		const element = document.getElementById(data.imageId);

		if (element.style.backgroundImage.includes(data.image)) {
			element.style.backgroundImage = `url('assets/${data.imageFlipped}')`;
		} else {
			element.style.backgroundImage = `url('assets/${data.image}')`;
		}

	}, 350);
}
