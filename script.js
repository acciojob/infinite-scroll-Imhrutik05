function addItems(items) {
	let ol = document.getElementById('infi-list');
	for (let i = 0; i < items; i++){
		let li = document.createElement('li');
		li.textContent = `Item ${ol.children.length + 1}`;
		ol.appendChild(li);
	}
	setTimeout(checkScroll, 50);  // Delay check to allow DOM update
}

function checkScroll() {
	let ol = document.getElementById('infi-list');
	if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight - 1) {
		addItems(2);
	}
}

document.getElementById('infi-list').addEventListener('scroll', checkScroll);
addItems(10);