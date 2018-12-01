let localMain = document.getElementById('lokalno-main');
let localSmall = document.querySelectorAll('.local-small');

let nationalMain = document.getElementById('nacionalno-main');
let nationalSmall = document.querySelectorAll('.national-small');


let updateCheckboxes = (bigBox, smallBox) => {
	
	smallBox.addEventListener('change', (event) => {
		if(event.target.checked) {
			let checkBig = () => {
				bigBox.checked = true;
			}
			checkBig();
		}
	});

	bigBox.addEventListener('change', (event) => {
		if (!event.target.checked) {
			let uncheckSmall = () => {
				smallBox.checked = false;
			}
			uncheckSmall();
		}
	});
}


let loopThroughBoxes = () => {
	for (let i = 0; i < localSmall.length; i++) {
		updateCheckboxes(localMain, localSmall[i]);
	};
	for (let i = 0; i < nationalSmall.length; i++) {
		updateCheckboxes(nationalMain, nationalSmall[i]);
	};
}

loopThroughBoxes();
