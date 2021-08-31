import ButtonNext from "../ButtonForm/ButtonNext";
const AddressRegister = () => {

	return /* html */ `

		<section class="cep-street-city-state">

			<h2 class="h2-register h2-register-address">Endereço</h2>

			<div class="container-cep-street">
				<div class="div-input div-company-address-cep">
					<label for="input-company-cep"> CEP:</label>
					<input class="input" id="input-company-cep" placeholder="13720-218" type="text" required>
					<div class="input-error-message">Este campo não está válido</div>
				</div>

				<div class="div-input div-company-address-street">
					<label for="input-company-street"> Logradouro: </label>
					<input class="input" id="input-company-street" placeholder="Rua Francisco Venceslau" type="text" required>
					<div class="input-error-message">Este campo não está válido</div>
				</div>
			</div>

			<div class="container-complement-number">

				<div class="container-number-no-number">
					<div class="div-input div-company-address-number">
						<label for="input-company-number"> Número: </label>
						<input class="input" id="input-company-number" placeholder="1250" type="text">
						<div class="input-error-message">Este campo não está válido</div>
					</div>
				</div>

				<div class="div-input div-company-address-complement">
					<label for="input-company-complement"> Complemento: </label>
					<input class="input" id="input-company-complement" placeholder="bl 2 apto 31" type="text">
					<div class="input-error-message">Este campo não está válido</div>
				</div>

			</div>

			<div class="container-neighborhood-city-state">

				<div class="div-input div-company-address-neighborhood">
					<label for="input-company-neighborhood"> Bairro: </label>
					<input class="input" id="input-company-neighborhood" placeholder="Jd. Caçula" type="text" required>
					<div class="input-error-message">Este campo não está válido</div>
				</div>

				<div class="div-input div-company-address-city">
					<label for="input-company-city"> Cidade: </label>
					<input class="input" id="input-company-city" placeholder="Caçapava" type="text" required>
					<div class="input-error-message">Este campo não está válido</div>
				</div>

				<div class="div-input div-company-address-state">
					<label for="input-company-state"> Estado:

						<div class="div-company-address-select-option-state">
							<select class="input categories-select" name="categories" id="input-company-state" required>
								<option selected disabled value="">Selecione...</option>
								<option value="AC">AC</option>
								<option value="AL">AL</option>
								<option value="AP">AP</option>
								<option value="AM">AM</option>
								<option value="BA">BA</option>
								<option value="CE">CE</option>
								<option value="DF">DF</option>
								<option value="ES">ES</option>
								<option value="GO">GO</option>
								<option value="MA">MA</option>
								<option value="MT">MT</option>
								<option value="MS">MS</option>
								<option value="MG">MG</option>
								<option value="PA">PA</option>
								<option value="PB">PB</option>
								<option value="PR">PR</option>
								<option value="PE">PE</option>
								<option value="PI">PI</option>
								<option value="RJ">RJ</option>
								<option value="RN">RN</option>
								<option value="RS">RS</option>
								<option value="RO">RO</option>
								<option value="RR">RR</option>
								<option value="SC">SC</option>
								<option value="SP">SP</option>
								<option value="SE">SE</option>
								<option value="TO">TO</option>
							</select>
						</div>
					</label>

					<div class="input-error-message">Este campo não está válido</div>
					
					<!-- <input class="input" id="input-company-state" type="text" required> -->

				</div>

			</div>

		</section>

		${ ButtonNext() }
	`;
}

export default AddressRegister;
