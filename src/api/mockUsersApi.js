import delay from './delay';

const users = {
    rosa_melano: { 
        uid: "rosa_melano",
        fname: "Rosa",
        lname: "Melano",  
        profile_pic: "client2.jpeg",
        email: "rosa_melano@email.com",
        password: "melano1",
        phone_number: "888-888-8888",
        account_type: "planner" 
    },
    elver_galarga: { 
        uid: "elver_galarga",
        fname: "Elver",
        lname: "Galarga",  
        profile_pic: "elver_galarga.jpg",
        email: "elver_galarga@email.com",
        password: "galarga1",
        phone_number: "888-888-8888",
        account_type: "planner" 
    },
    john_smith: {
        uid: "john_smith",
        fname: "John",
        lname: "Smith",
        profile_pic: "john_smith.jpg",
        email: "john_smith@email.com",
        password: "smith1",
        phone_number: "888-888-8888",
        account_type: "planner"
    },
    jane_doe: {
        uid: "jane_doe",
        fname: "Jane",
        lname:  "Doe",
        profile_pic: "jane_doe.jpeg",
        email: "jane_doe@email.com",
        password: "doe1",
        phone_number: "888-888-8888",
        account_type: "planner"
    },
    fairbanks: {
        uid: "fairbanks",
        fname: "Fairbanks",
        lname: "Doe", 
        profile_pic: "wedding_venue_1.jpg",
        email: "fairbanks@email.com",
        password: "password",
        phone_number: "858-356-2135",
        address: "15150 San Dieguito Road, Rancho Santa Fe, CA 92067",
        account_type: "business",
        category: "venues",
        request:[]
    },
    banda_ms: {
        uid: "banda_ms",
        fname: "Banda MS",
        lname: "Doe",
        profile_pic: "banda_ms.jpg",
        email: "banda_ms@email.com",
        password: "password",
        phone_number: "777-777-7777",
        address: "Mazatlan, Sinaloa, Mexico",
        account_type: "business",
        category: "entertainment",
        request:[]
    },
    tacos_el_gordo: {
        uid: "tacos_el_gordo",
        fname: "Tacos El Gordo",
        lname: "Bobby",  
        profile_pic: "TACOS.png",
        email: "tacos_el_gordo@email.com",
        password: "password",
        phone_number: "619-691-8848",
        address: "689 H St, Chula Vista, CA 91910",
        account_type: "business",
        category: "foodNdrinks",
        request: []
    }

};

const current_user = { current_user: "tacos_el_gordo" };

const businesses = ["tacos_el_gordo","banda_ms", "fairbanks"];

class UsersApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, users));
            }, delay);
        });
    }

    static getCurrentUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, current_user));
            }, delay);
        });
    }
}

export default UsersApi;