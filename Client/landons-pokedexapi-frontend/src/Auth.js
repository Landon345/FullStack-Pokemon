import { Register, Login, Logout } from "./Api/AuthApi";

class Auth {
  constructor() {
    this.authenticated = false;
    this.message = "";
    if (localStorage.getItem("token")) {
      this.authenticated = true;
    }
  }

  async register(cb, newUser) {
    const data = await Register(newUser);
    if (data.user) {
      console.log("register success");
      localStorage.setItem("token", data.user.api_token);
      localStorage.setItem("name", data.user.name);
      this.authenticated = true;
    } else {
      console.log("register false");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      this.message = "Something went wrong";
      this.authenticated = false;
    }
    cb(this.message);
  }

  async login(cb, user) {
    const data = await Login(user);
    if (data.user) {
      localStorage.setItem("token", data.user.api_token);
      localStorage.setItem("name", data.user.name);
      this.message = "logged in";
      this.authenticated = true;
    } else {
      this.message = "Username or password incorrect.";
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      this.authenticated = false;
    }

    await cb(this.message);
  }

  async logout(cb) {
    await Logout();
    this.authenticated = false;
    this.admin = false;
    this.message = "";
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
  getMessage() {
    return this.message;
  }
}

export default new Auth();
