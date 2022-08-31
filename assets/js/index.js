
// Search Function
 
let classNum
document.querySelector('.searchButton').addEventListener("click", search)

function search(){
	classNumStr = document.querySelector('.searchInput').value
	classNum = parseInt(classNumStr)
	let tragetURL
	if(Number.isInteger(classNum) && classNum > 0){
		if(classNum <= 47)
		classNum < 10 ?  window.location.replace(`https://100devsfollowalong.netlify.app/classes/class-0${classNum}.html`) : window.location.replace(`https://100devsfollowalong.netlify.app/classes/class-${classNum}.html`)
		else{
			alert(`We don't have that class yet.`)
		}
	}
	else{
		alert(`${classNumStr} is not a valid class number.`)
	}
}

//