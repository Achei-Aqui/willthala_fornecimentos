import '../styles/settings/colors.css';
import '../styles/generics/reset.css';
import '../styles/elements/generic_base.css';
import '../styles/elements/pattern_button.css'
import '../styles/search.css';
import MainHeader from '../components/MainHeader'

const $search = document.querySelector( '#search' );
console.log( $search, 'finalmente foi' );

$search.insertAdjacentHTML(
	'beforeend',
	`${ MainHeader() }`
);


const urlParam = new URLSearchParams( window.location.search );
const myParam = urlParam.get( 'token' );
console.log( myParam );

const urlAPIContacts = 'https://acheiaqui-api.herokuapp.com/contatos';
const optionsGETContacts = {
	method: 'GET',
	headers: {
		Authorization: `Bearer ${ myParam }`,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}

const dataInfos = [];

fetch( urlAPIContacts, optionsGETContacts )

	.then( ( resp ) => resp.json() )

	.then( function ( data ) {

		// console.log( dataInfos, '456' );
		dataInfos.push( data )

		console.log( dataInfos, '789' );
		console.log( dataInfos[ 0 ].content[8].endereco );

		let html = '';
		dataInfos.forEach( info => {
			let htmlSegment = /* html */`
				<div class="container">
					<div class="infos">
						<div class="card-infos">
							<div>
								<div class="info -cnpj">
									<span>${ info.content[ 8 ].cnpj }</span>
								</div>
								<div class="info -name">
									<span>${ info.content[ 8 ].nome }</span>
								</div>
							</div>

							<div class="info -category">
								<span>${ info.content[ 8 ].categoria }</span>
							</div>

							<div class="info -address">
								<div>
									<span>
										${ info.content[ 8 ].endereco.rua },
										${ info.content[ 8 ].endereco.numero}
										${ complementIsNotNull(info.content[ 8 ].endereco.complemento)}
									</span>
								</div>

								<div>
									<span>${ info.content[ 8 ].endereco.bairro + ", " }</span>
									<span>${ info.content[ 8 ].endereco.cidade + " - "}</span>
									<span>${ info.content[ 8 ].endereco.estado }</span>
								</div>
								<div><span>${ info.content[ 8 ].endereco.cep }</span></div>
							</div>

							<div class="info -contact">
								<div><span>${ info.content[ 8 ].telefone }</span></div>
								<div><span>${ info.content[ 8 ].email }</span></div>
							</div>

						</div>
					</div>

					<button class="pattern_button">Pesquisar</button>
				</div>
			`

			html += htmlSegment;

			$search.insertAdjacentHTML(
				'beforeend',
				html
			);
		} );
	} )

	.catch( function ( error ) {

		console.log( error );
	} );

// console.log(response, '123');


const complementIsNotNull = (data) => {
	if(data != null){
		return "- " + data;
	}
}
