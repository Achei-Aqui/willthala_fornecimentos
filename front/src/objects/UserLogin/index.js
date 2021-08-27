import ButtonLogin from "../../components/ButtonLogin";
import FormLogin from "../../components/FormLogin";
import MainHeader from "../../components/MainHeader";

const UserLogin = () => {
	return `
		${ MainHeader() }
		${ FormLogin() }
		${ ButtonLogin() }
	`;
}

export default UserLogin;
