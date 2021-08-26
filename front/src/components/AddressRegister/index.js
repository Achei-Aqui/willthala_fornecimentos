const AddressRegister = () => {

	return /* html */ `

		<h2 class="h2-register h2-register-address">Endereço</h2>

		<div class="container-cep-street">
			<div class="div-input div-company-address-cep">
				<label for="input-company-cep"> CEP:
					<input class="input" id="input-company-cep" type="text" required>
				</label>
			</div>

			<div class="div-input div-company-address-street">
				<label for="input-company-street"> Logradouro:
					<input class="input" id="input-company-street" type="text" required>
				</label>
			</div>
		</div>

		<div class="container-complement-number">

			<div class="div-input div-company-address-number">
				<label for="input-company-number"> Número:
					<input class="input" id="input-company-number" title="Caso seu endereço não contenha número, preencha esse campo com o valor '0' (zero)" type="text" required>
				</label>
			</div>

			<div class="div-input div-company-address-complement">
				<label for="input-company-complement"> Complemento:
					<input class="input" id="input-company-complement" type="text">
				</label>
			</div>

		</div>

		<div class="container-neighborhood-city-state">

			<div class="div-input div-company-address-neighborhood">
				<label for="input-company-neighborhood"> Bairro:
					<input class="input" id="input-company-neighborhood" type="text" required>
				</label>
			</div>

			<div class="div-input div-company-address-city">
				<label for="input-company-city"> Cidade:
					<input class="input" id="input-company-city" type="text" required>
				</label>
			</div>

			<div class="div-input div-company-address-state">
				<label for="input-company-state"> Estado:
					<input class="input" id="input-company-state" type="text" required>
				</label>
			</div>

		</div>
	`;
}

export default AddressRegister;
