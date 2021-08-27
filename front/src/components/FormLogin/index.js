import '../../styles/tools/containers.css';
import '../../styles/elements/inputs_forms.css';
import './style.css';

const FormLogin = () => {
	return /* html */ `
		<div class="container">
			<div class="div-form-login">

				<form action="POST" class="form-login">

					<div class="container-login-cnpj-password">

						<div class="container-login-cnpj">
							<label for="cnpj-login">CNPJ:
								<input id="cnpj-login" class="input -cnpj">
							</label>
						</div>

						<div class="container-login-password">
							<label for="password-login">Senha:
								<input id="password-login" class="input -password">
							</label>
						</div>
						
					</div>

					<br/>

				</form>

			</div>

		</div>
	`;
}

export default FormLogin;
