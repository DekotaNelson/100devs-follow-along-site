
const searchButton = document.querySelector('.searchButton')
let classNum
searchButton.addEventListener("click", search)

// search when pressing Enter
window.addEventListener("keypress", (event) => {
	if (event.key == "Enter") {
		search()
	}
})

// Search Function

function search() {
	classNumStr = document.querySelector('.searchInput').value
	classNum = parseInt(classNumStr)
	let tragetURL
	if (Number.isInteger(classNum) && classNum > 0) {
		if (classNum <= 52)
			classNum < 10 ? window.location.replace(`https://100devsfollowalong.netlify.app/classes/class-0${classNum}.html`) : window.location.replace(`https://100devsfollowalong.netlify.app/classes/class-${classNum}.html`)
		else {
			alert(`We don't have that class yet.`)
		}
	}
	else {
		alert(`${classNumStr} is not a valid class number.`)
	}
}

//