import '../../styles/tools/containers.css';
import '../../styles/elements/inputs_forms.css';
import '../../styles/elements/pattern_button.css';
import '../../styles/elements/link_register.css';
import './style.css';
import '../../js/masks_inputs.js'

window.getLogin = () => {
	const cnpj = document.getElementById( 'cnpj' ).value;
	const cnpjValueReplace = cnpj.replace( /\D/g, '' )
	const senha = document.getElementById( 'senha' ).value;

	// const urlAPI = 'https://people-app.herokuapp.com/';
	const urlAPI = 'https://acheiaqui-api.herokuapp.com/auth';

	const infosLogin = {
		"cnpj": cnpjValueReplace,
		"senha": senha,
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

const FormLogin = () => {
	return /* html */ `
		<div class="container">
			<div class="div-form-login">

				<form action="POST" id="form-login">

					<div class="container-login-cnpj-password">

						<div class="container-login-cnpj">
							<label for="cnpj">CNPJ:
								<input id="cnpj" name="cnpj" class="input -cnpj" maxlength="18" pattern="^\\d{2}.\\d{3}.\\d{3}/\\d{4}-\\d{2}$" onkeyup="window.cnpjMask(event)" onkeypress="inputError()" data-type="cnpj" required>
							</label>
						</div>

						<div class="container-login-password">
							<label for="senha">Senha:
								<input id="senha" name="senha" class="input -password"  type="password" minlength="8" maxlength="20" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ ,.!@#$%^&*_=+-]).{8,20}$" data-type="password" required>
							</label>
						</div>

					</div>

					<br/>

					<div class="container">

						<button id="send-form" class="pattern_button button-send-form" type="submit" onclick="getLogin(event)" data-button-send="login">Enviar</button>
						<a class="link-register" href="src/html/register.html">Cadastre-se</a>

					</div>

				</form>


			</div>

		</div>
	`;
}

export default FormLogin;
