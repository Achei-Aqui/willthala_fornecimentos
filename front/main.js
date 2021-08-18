import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import './src/styles/elements/base.css';

import UserLogin from './src/objects/UserLogin';

const $root = document.querySelector( '#root' );
const $htmlLogin = UserLogin();

$root.insertAdjacentHTML( 'beforeend', `${ $htmlLogin }` );
