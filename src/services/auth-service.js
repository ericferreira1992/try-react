export default class AuthService {
    static get user()  { return JSON.parse(localStorage.getItem('AuthSession')); }
    static set user(value) { localStorage.setItem('AuthSession', JSON.stringify(value)); }

    static get logged() { return AuthService.user !== null; }

    static login(user, pass) {
        return new Promise((resolver, reject) => {
            setTimeout(() => {
                resolver({
                    user: user,
                    name: 'Eric Ferreira'
                });
            }, 1000);
        });
    }

    static logout() {
        AuthService.user = null;  
    }
}