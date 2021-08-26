import '../../styles/tools/containers.css';
import '../../styles/elements/inputs_forms.css';
import '../../styles/desktop/login_style.css'
import './style.css';

const FormLogin = () => {
	return /* html */ `
		<div class="container">
			<div class="div-form-login">

				<form action="POST" class="form-login">

					<label for="cnpj-login">CNPJ:
						<input id="cnpj-login" class="input -cnpj">
					</label>

					<br/>

					<label for="password-login">Senha:
						<input id="password-login" class="input -password">
					</label>

					<br/>

				</form>

			</div>

		</div>
	`;
}

export default FormLogin;
