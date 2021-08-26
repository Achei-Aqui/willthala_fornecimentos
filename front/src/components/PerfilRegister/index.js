import '../../styles/tools/containers.css';
import '../../styles/settings/colors.css';
import '../../styles/elements/inputs_forms.css';
import '../../styles/desktop/register_style.css';
import './style.css';
import MainHeader from '../MainHeader';
import AddressRegister from '../AddressRegister';

const PerfilRegister = () => {
	return /* html */ `
		<div class="container">

			<div class="div-main-header-register-logo">
				${ MainHeader() }
				<h2 class="h2-register">Cadastro</h2>
				<img class="logo-header -provider" src="https://icon-library.com/images/icon-clipboard/icon-clipboard-3.jpg">

				<!-- <img src="https://icon-library.com/images/buying-icon/buying-icon-4.jpg"> -->
			</div>

			<form class="form-register" action="" method="post">

				<fieldset class="data-info-contact">

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

					<div class="container-password">
						<div class="div-input div-company-password">
							<label for="input-company-password">Senha:
								<input class="input input-password" type="password" name="register-password" id="input-company-password">
							</label>
							<br>
							<label id="-confirm-password" for="input-company-password-repeat">Confirme a senha:
								<input class="input input-password" type="password" name="register-password" id="input-company-password-repeat">
							</label>
						</div>
					</div>

					<div class="container-category-type">
						<div class="div-input div-company-category">
							<label for="categories"> Categoria:
								<select class="input categories-select" name="categories" id="categories-buy" required>
									<option selected disabled value="">Selecione...</option>
									<option value="food">Alimentos</option>
									<option value="toys">Brinquedos</option>
									<option value="appliances">Eletrodomésticos</option>
									<option value="electronics">Eletroeletrônico</option>
									<option value="sports">Esportes</option>
									<option value="furniture">Móveis</option>
									<option value="perfumery">Perfumaria</option>
									<option value="clothing">Vestuário</option>
								</select>
							</label>
						</div>
						<div class="div-input div-type-radio"> Tipo:

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

				</fieldset>

				<fieldset class="data-infos-address">

					${ AddressRegister() }

				</fieldset>

			</form>

		</div>

	`;
}

export default PerfilRegister;
