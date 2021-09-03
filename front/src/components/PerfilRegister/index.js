import '../../styles/tools/containers.css';
import '../../styles/settings/colors.css';
import '../../styles/elements/inputs_forms.css';
import '../../styles/elements/pattern_button.css';
import './style.css';
import '../../js/masks_inputs.js'
import '../../styles/desktop/register_style.css';
import '../../js/validation_inputs.js';
import MainHeader from '../MainHeader';
import ButtonNext from '../../components/ButtonForm/ButtonNext';
import ButtonSend from '../../components/ButtonForm/ButtonSend';

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

				<div class="container-form-register-button-send">

					<div class="container-form">

						<!-- nome da empresa -->

						<fieldset class="data-info-contact">
							<section class="name-cnpj-phone-email" ">

								<div class="div-input div-company-name">
									<label for="input-company-name"> Nome da empresa:</label>
									<input class="input input-invalid-name-off" id="input-company-name" placeholder="B2W Companhia Digital" type="text" data-type="name" required>
									<div id="outputName" class="input-error-message-name-off">Este campo não está válido</div>
								</div>

								<div class="container-cnpj-phone">

									<div>
										<label for="input-company-cnpj"> CNPJ:</label>
										<input class="input" id="input-company-cnpj" placeholder="40.264.065/0001-84" type="text" maxlength="18" onkeyup="window.cnpjMask(event)"  onkeypress="inputError()" data-type="cnpj" required>
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
						</fieldset>



						<!-- endereço -->

						<fieldset class="data-infos-address">
							<section class="cep-street-city-state">

								<h2 class="h2-register h2-register-address">Endereço</h2>

								<div class="container-cep-street">
									<div class="div-input div-company-address-cep">
										<label for="input-company-cep"> CEP:</label>
										<input class="input" id="input-company-cep" placeholder="13720-218" type="text" onkeyup="cepMask(event)" data-type="cep" required>
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
						</fieldset>


						<!-- senha-->
						<fieldset class="data-password-contact">

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

										<div>
											<label for="input-company-password">Senha: </label>
											<input class="input input-password" type="password" name="register-password" id="input-company-password" minlength="6" maxlength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ ,.!@#$%^&*_=+-]).{6,8}$" required>
											<div class="input-error-message">Este campo não está válido</div>
										</div>

										<div>
											<label id="-confirm-password" for="input-company-password-repeat">Confirme a senha: </label>
											<input class="input input-password" type="password" name="register-password" id="input-company-password-repeat" minlength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ ,.!@#$%^&*_=+-]).{8,}$" required>
											<div class="input-error-message">Este campo não está válido</div>
										</div>

									</div>

								</div>

							</section>

							<div class="container-button-send-form">
								${ ButtonSend() }
							</div>

						</fieldset>

					</div>

				</div>

			</form>

		</div>

	`;
}

export default PerfilRegister;
