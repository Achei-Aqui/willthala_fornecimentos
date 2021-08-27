import '../../styles/tools/containers.css';
import '../../styles/settings/colors.css';
import '../../styles/elements/inputs_forms.css';
import '../../styles/elements/pattern_button.css';
import '../../styles/desktop/register_style.css';
import './style.css';
import MainHeader from '../MainHeader';
import AddressRegister from '../AddressRegister';
import ContactRegister from '../ContactRegister';
import PasswordRegister from '../PasswordRegister';

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

						<fieldset class="data-info-contact">
							${ ContactRegister() }
						</fieldset>

						<fieldset class="data-infos-address">
							${ AddressRegister() }
						</fieldset>

						<fieldset class="data-password-contact">
							${ PasswordRegister() }
						</fieldset>

					</div>

					<input class="pattern_button" value="Enviar">
					
				</div>

			</form>

		</div>

	`;
}

export default PerfilRegister;
