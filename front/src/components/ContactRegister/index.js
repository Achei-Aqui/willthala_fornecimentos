const ContactRegister = () => {
	return /* html */ `
		<section class="name-cnpj-phone-email">

			<div class="div-input div-company-name">
				<label for="input-company-name"> Nome da empresa:
					<input class="input" id="input-company-name" type="text" required>
				</label>
			</div>

			<div class="container-cnpj-phone">
				<div class="div-input div-company-cnpj">
					<label for="input-company-cnpj"> CNPJ:
						<input class="input" id="input-company-cnpj" type="text" required>
					</label>
				</div>
				<div class="div-input div-company-phone">
					<label for="input-company-phone"> Telefone:
						<input class="input" id="input-company-phone" type="tel" required>
					</label>
				</div>
			</div>

			<div class="div-input div-company-email">
				<label for="input-company-email"> E-mail:
					<input class="input" id="input-company-email" type="email" required>
				</label>
			</div>

		</section>
	`;
}

export default ContactRegister;
