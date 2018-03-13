import delay from './delay';

const users = [ "rosa_melano", "elver_galarga", "john_smith", "jane_doe", "fairbanks", "banda_ms", "tacos_el_gordo"];

const current_user = ["tacos_el_gordo"];

class UsersApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static getCurrentUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], current_user));
            }, delay);
        });
    }
}

export default UsersApi;