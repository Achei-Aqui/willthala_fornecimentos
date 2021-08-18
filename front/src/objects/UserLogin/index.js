import ButtonSend from "../../components/ButtonSend";
import FormLogin from "../../components/FormLogin";
import MainHeader from "../../components/MainHeader";

const UserLogin = () => {
	return `
		${ MainHeader() }
		${ FormLogin() }
		${ ButtonSend() }
	`;
}

export default UserLogin;
