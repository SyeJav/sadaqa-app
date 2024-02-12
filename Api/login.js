import axios from "axios";

export class Login {
  static async requestLogin(user) {
    return (await axios.get(``)).data;
  }

  static async requestSignUp(user) {
    return (await axios.get(``)).data;
  }

  static async requestForgotPassword() {
    return (await axios.get(``)).data;
  }
}
