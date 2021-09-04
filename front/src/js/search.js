import '../styles/settings/colors.css';
import '../styles/generics/reset.css';
import '../styles/elements/generic_base.css';

import SearchUser from '../objects/SearchUser'

const $search = document.querySelector( '#search' );
const $htmlSearchInfos = SearchUser();

$search.insertAdjacentHTML(
	'beforeend',
	`${ $htmlSearchInfos }`
);
