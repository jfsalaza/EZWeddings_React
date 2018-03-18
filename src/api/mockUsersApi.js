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

// const businessAds = {
//     tacos_el_gordo: {
//         ad: {
//             thisAd: "hello"
//         }
//     },
//     fairbanks: {
//         ad: {
//             thisAd:"hello 2"
//         }
//     },
//     banda_ms: {
//         ad: {
//             thisAd: "Hello 3"
//         }
//     }
// }


const planner_todo = {
    rosa_melano: {
        todo: [],
        idCounter: 0
    },
    elver_galarga: {
        todo: [],
        idCounter: 0
    },
    john_smith: {
        todo: [],
        idCounter: 0
    },
    jane_doe: {
        todo: [],
        idCounter: 0
    }
};

const requests = {
    tacos_el_gordo: [
        {
            uid: "elver_galarga",
            msg: "Hello I'm looking for a food vendor for my wedding, think you can help?"
        },
        {
            uid: "john_smith",
            msg: "your tacos suck"
        }
    ],
    banda_ms: [],
    fairbanks: []
};

const current_user = { current_user: "rosa_melano" };

const businesses = ["tacos_el_gordo","banda_ms", "fairbanks"];

class UsersApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, users));
            }, delay);
        });
    }

    static getRequests(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, requests));
            }, delay);
        });
    }

    static getPlannerToDo(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, planner_todo));
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

    static getBusinessAd(){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(Object.assign({}, businessAds));
            }, delay);
        });
    }
    static addToDo(todoLoad) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const current_user = Object.assign({}, planner_todo[todoLoad.current_user]);
                const idCounter = todoLoad.idCounter;
                const todoList = todoLoad.list;
                current_user["todo"] = todoList; 
                current_user["idCounter"] = idCounter;
                planner_todo[todoLoad.current_user] = current_user;

                let newCurrentUser = {};
                newCurrentUser[todoLoad.current_user] = current_user;
                resolve(newCurrentUser);
            }, delay);
        });
    }

    static handleRequest(requestLoad){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                requests[requestLoad.current_user] = requestLoad.requests;
                let newCurrentUser = {};
                newCurrentUser[requestLoad.current_user] = requests[requestLoad.current_user];
                resolve(newCurrentUser);
            }, delay);
        });
    };
}

export default UsersApi;