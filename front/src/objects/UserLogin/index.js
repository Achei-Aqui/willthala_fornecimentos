import FormLogin from "../../components/FormLogin";
import MainHeader from "../../components/MainHeader";

const UserLogin = () => {
	return `
		${ MainHeader() }
		${ FormLogin() }
	`;
}

export default UserLogin;
