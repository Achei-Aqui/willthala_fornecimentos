import '../../styles/tools/containers.css';
import '../../styles/elements/inputs_forms.css';
import '../../styles/elements/pattern_button.css';
import '../../styles/elements/link_register.css';
import './style.css';
import '../../js/masks_inputs.js';

window.getLogin = ( event ) => {
	event.preventDefault();
	// const cnpj = document.getElementById( 'cnpj' ).value;
	// const senha = document.getElementById( 'senha' ).value;

	const optionsPOSTAuth = {
		method: 'POST',
		url: 'https://acheiaqui-api.herokuapp.com/auth',
		data: {
			cnpj: '40.065.264/0001-48',
			senha: 'Laura123@*'
		}
	}

	axios.request( optionsPOSTAuth ).then( function ( response ) {
		let dataResnposePOSTAuth = response.data;
		// console.log( dataResnposePOSTAuth );

		if ( response.status == 200 ) {
			const token = dataResnposePOSTAuth.token;
			window.location.href = `./src/html/search.html?token=${token}`;
		}

	} ).catch( function ( error ) {
		console.error( error );
	} );
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
