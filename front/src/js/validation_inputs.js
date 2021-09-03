window.errorInput = () => {
	console.log("Laura");
}

const errorInput = ( event, id) => {
	let keyboard = event.keyCode;
	let input = document.getElementById(id);
	spanMessage.innerHTML = '';

	if( keyboard >= 48 && keyboard <= 57 ) {
		input.classList.add('');
		return true;
	} else {

		input.innerHTML = 'Digite um valor válido.';
		return false;
	}
}
