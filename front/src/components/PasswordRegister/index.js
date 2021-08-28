import ButtonSend from "../ButtonForm/ButtonSend";

const PasswordRegister = () => {
	return /* html */ `
		<section class="category-type-image-password">

			<div class="container-password">

				<label for="categories"> Categoria:</label>

				<div class="container-category-type">

					<div class="div-input div-company-category">

						<select class="input categories-select" name="categories" id="categories-buy" required>
							<option selected disabled value="">Selecione...</option>
							<option value="food">Alimento</option>
							<option value="toys">Brinquedo</option>
							<option value="appliances">Eletrodoméstico</option>
							<option value="electronics">Eletroeletrônico</option>
							<option value="sports">Esporte</option>
							<option value="furniture">Móvel</option>
							<option value="perfumery">Perfumaria</option>
							<option value="clothing">Vestuário</option>
						</select>

					</div>

					<div class="div-input div-type-radio">

						<div class="div-button-type-radio">
							<input class="input-radio -provider" id="provider" name="type-button" type="radio" checked>
							<label for="provider">Fornecedor</label>
						</div>

						<div class="div-button-type-radio">
							<input class="input-radio -buyer" id="buyer" name="type-button" type="radio">
							<label for="buyer">Comprador</label>
						</div>

					</div>

				</div>

				<div class="div-input div-company-password">

					<label for="input-company-password">Senha:
						<input class="input input-password" type="password" name="register-password" id="input-company-password">
					</label>

					<label id="-confirm-password" for="input-company-password-repeat">Confirme a senha:
						<input class="input input-password" type="password" name="register-password" id="input-company-password-repeat">
					</label>

				</div>

			</div>

		</section>

		<div class="container-button-send-form">
			${ ButtonSend() }
		</div>
	`;
}

export default PasswordRegister;
