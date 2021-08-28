import '../../styles/desktop/register_style.css';
import ButtonNext from "../ButtonForm/ButtonNext";

const ContactRegister = () => {
	return /* html */ `

		<section class="name-cnpj-phone-email">

			<div class="div-input div-company-name">
				<label for="input-company-name"> Nome da empresa:
					<input class="input" id="input-company-name" placeholder="B2W Companhia Digital" type="text" required>
				</label>
			</div>

			<div class="container-cnpj-phone">

				<label for="input-company-cnpj"> CNPJ:
					<input class="input" id="input-company-cnpj" placeholder="40.264.065/0001-84" type="text" required>
				</label>


				<label for="input-company-phone"> Telefone:
					<input class="input" id="input-company-phone" placeholder="(13) 5512-2323" type="tel" required>
				</label>

			</div>

			<div class="div-input div-company-email">
				<label for="input-company-email"> E-mail:
					<input class="input" id="input-company-email" placeholder="b2w@b2w.com.br" type="email" required>
				</label>
			</div>

		</section>

		${ ButtonNext() }
	`;
}

export default ContactRegister;
