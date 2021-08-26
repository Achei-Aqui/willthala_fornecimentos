import '../styles/settings/colors.css';
import '../styles/generics/reset.css';
import '../styles/elements/generic_base.css';
import RegisterUser from "../objects/RegisterUser";

const $register = document.querySelector( '#register' );
const $htmlNewRegister = RegisterUser();

$register.insertAdjacentHTML(
	'beforeend',
	`${ $htmlNewRegister }`
);
