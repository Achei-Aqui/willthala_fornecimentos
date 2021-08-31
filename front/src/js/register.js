import '../styles/settings/colors.css';
import '../styles/generics/reset.css';
import '../styles/elements/generic_base.css';
import RegisterUser from "../objects/RegisterUser";

import { valida } from './validacao.js'

const $inputs = document.querySelectorAll( 'input' )

$inputs.forEach( input => {
	input.addEventListener( 'blur', ( event ) => {
		valida( event.target )
	} )
} )

const $register = document.querySelector( '#register' );
const $htmlNewRegister = RegisterUser();

$register.insertAdjacentHTML(
	'beforeend',
	`${ $htmlNewRegister }`
);
