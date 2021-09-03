window.cnpjMask = ( event ) => {
	let cnpjValue = document.querySelector( '[data-type="cnpj"]' );
	console.log( cnpjValue );

	let widthValue = cnpjValue.value.length;

	let keyboard = event.keyCode;

	if ( keyboard != 8 ) { // space
		switch ( widthValue ) {

			case 2:
				cnpjValue.value = cnpjValue.value += '.';
				break;

			case 6:
				cnpjValue.value = cnpjValue.value += '.';
				break;

			case 10:
				cnpjValue.value = cnpjValue.value += '/';
				break;

			case 15:
				cnpjValue.value = cnpjValue.value += '-';
				break;

		}
	}

	console.log( cnpjValue.value );
	console.log( typeof cnpjValue.value );
	console.log( cnpjValue.value.replace( /\D/g, '' ) );
}

window.phoneMask = ( event ) => {
	const phoneValue = document.querySelector( '[data-type="phone"]' );
	let widthValue = phoneValue.value.length;
	let keyboard = event.keyCode;

	if ( keyboard != 8 ) { // space
		switch ( widthValue ) {

			case 1:
				phoneValue.value = '(' + phoneValue.value;
				break;

			case 3:
				phoneValue.value = phoneValue.value + ') ';
				break;

			case 9:
				phoneValue.value = phoneValue.value + '-';
				break;
			case 15:
				let fifteenDigits = 0;
				let fifteenDigitsReplaced = 0;
				phoneValue.value = phoneValue.value.replace( /\D/g, '' );
				fifteenDigits = phoneValue.value;
				fifteenDigitsReplaced = fifteenDigits.replace( /^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3" );
				phoneValue.value = fifteenDigitsReplaced;
		}
	}
}

window.cepMask = ( event ) => {

	let cepValue = document.querySelector( '[data-type="cep"]' );
	let widthValue = cepValue.value.length;
	let keyboard = event.keyCode;

	if ( keyboard != 8 ) {
		if(widthValue == 5) {
			cepValue.value = cepValue.value += '-';
		}
	}

}
