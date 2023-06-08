export class AuthService {
  loggedIn: boolean = false;

  isLoggedIn() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return promise;
  }
  logIn() {
    this.loggedIn = true;
    return this.loggedIn;
  }
  logOut() {
    this.loggedIn = false;
    return this.loggedIn;
  }
}
