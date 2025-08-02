const speedOfCycle = 100;

window.addEventListener("load", () => {
	// Loop every second
	setInterval(() => {
		popOut(document.getElementById("f1"))
		setTimeout(() => {
			popBack(document.getElementById("f1"))
			popOut(document.getElementById("o1"))
			setTimeout(() => {
				popBack(document.getElementById("o1"))
				popOut(document.getElementById("o2"))
				setTimeout(() => {
					popBack(document.getElementById("o2"))
					popOut(document.getElementById("f2"))
					setTimeout(() => {
						popBack(document.getElementById("f2"))
						popOut(document.getElementById("i"))
						setTimeout(() => {
							popBack(document.getElementById("i"))
							popOut(document.getElementById("e"))
							setTimeout(() => {
								popBack(document.getElementById("e"))
							}, speedOfCycle)
						}, speedOfCycle)
					}, speedOfCycle)
				}, speedOfCycle)
			}, speedOfCycle)
		}, speedOfCycle)
	}, speedOfCycle * 8)
})

function popOut(element) {
	element.classList.add("foofieLetterPoppedOut")

}

function popBack(element) {
	element.classList.remove("foofieLetterPoppedOut")
}