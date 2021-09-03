import '../../../styles/elements/pattern_button.css';

window.sendRegister = (e) => {
	/* const cnpj = document.getElementById( 'cnpj' ).value;
	const cnpjValueReplace = cnpj.replace( /\D/g, '' )
	const senha = document.getElementById( 'senha' ).value; */

	// const urlAPI = 'https://people-app.herokuapp.com/';
	const urlAPI = 'https://acheiaqui-api.herokuapp.com/register';

	const infosLogin = {
		"cnpj":"39.336.284/0001-27",
		"tipo":"ROLE_COMPRADOR",
		"email":"laura@laura.com",
		"senha":"Laura123@**",
		"categoria":"BRINQUEDOS",
		"nome":"LAUTA TECH LTDA.",
		"telefone":"(13) 98758-8455",
		"cep":"04525-330",
		"bairro":"GRAJAU",
		"cidade":"TANGAMANDAPIO",
		"estado":"SP",
		"rua":"RUA CLEMENTINO SALVADOR",
		"complemento":"GALPÃO 13",
		"numero":"12568"
}
	/* const dictionary = {
		name: "Laura Custódio Marinho",
		age: 27,
		cpf: "46547981321",
		rg: "",
		birth_date: "1994-03-25",
		sex: "masculino",
		sign: "",
		mother_name: "",
		father_name: "",
		email: "whateveeer@hotmail.com",
		telefone_number: "",
		mobile: "",
		height: null,
		weight: null,
		type_blood: "",
		favorite_color: ""
	} */

	const request = new Request( urlAPI, {
		method: 'POST',
		body: JSON.stringify( infosLogin ),
		headers: {
			'content-type': 'application/json'
		}
	} );

	// request.use(cors());

	fetch( request )
		.then(
			function ( data ) {
				console.log( data, "RESPONSE" );
			}
		).catch(
			function ( error ) {
				console.log( error );
			}
		);
}

const ButtonSend = () => {
	return /* html */ `
		<button class="pattern_button button-send-form" type="submit" onclick="sendRegister(event)">Enviar</button>
	`;
}

export default ButtonSend;
