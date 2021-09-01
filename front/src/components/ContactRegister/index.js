import '../../styles/desktop/register_style.css';
import '../../js/masks_inputs.js';
import ButtonNext from "../ButtonForm/ButtonNext";

const ContactRegister = () => {

	return /* html */ `

		<section class="name-cnpj-phone-email">

			<div class="div-input div-company-name">
				<label for="input-company-name"> Nome da empresa:</label>
				<input class="input" id="input-company-name" placeholder="B2W Companhia Digital" type="text" data-type="name" required>
				<div class="input-error-message">Este campo não está válido</div>
			</div>

			<div class="container-cnpj-phone">

				<div>
					<label for="input-company-cnpj"> CNPJ:</label>
					<input class="input" id="input-company-cnpj" placeholder="40.264.065/0001-84" type="text" maxlength="18" onkeyup="window.cnpjMask(event)" data-type="cnpj" required>
					<div class="input-error-message">Este campo não está válido</div>
				</div>


				<div>
					<label for="input-company-phone"> Telefone:</label>
					<input class="input" id="input-company-phone" placeholder="(13) 5512-2323" type="tel" maxlength="15" onkeyup="window.phoneMask(event)" data-type="phone" required>
					<div class="input-error-message">Este campo não está válido</div>
				</div>

			</div>

			<div class="div-input div-company-email">
				<label for="input-company-email"> E-mail:</label>
				<input class="input" id="input-company-email" placeholder="b2w@b2w.com.br" type="email" required>
				<div class="input-error-message">Este campo não está válido</div>
			</div>

		</section>

		${ ButtonNext() }
	`;
}

export default ContactRegister;
