import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import './src/styles/elements/base.css';

import MainHeader from './src/components/MainHeader';

const $root = document.querySelector( '#root' );
const $htmlHeader = MainHeader();

$root.insertAdjacentHTML( 'beforeend', `${ $htmlHeader }` );
