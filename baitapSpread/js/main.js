const zoom = document.querySelector(".heading");

let jumpText = (hoverme) => {
	let show = [...hoverme];

	return show.map((show) => `<span>${show}</span>`).join("");
};

zoom.innerHTML = jumpText(zoom.innerText);
