import delay from './delay';

const users = [
    {
    uid: "rosa_melano",
    contact_info: {
      name: "Rosa Melano",
      phone_number: "888-888-8888",
      email: "rosa_melano@email.com"
    },
    profile_pic: "client2.jpeg",
    account_type: "planner",
    partners: ["fairbanks"]
  },
  {
    uid: "elver_galarga",
    contact_info: {
      name: "Elver Galarga",
      phone_number: "888-888-8888",
      email: "elver_galarga@email.com"
    },
    profile_pic: "elver_galarga.jpg",
    account_type: "planner",
    partners: ["tacos_el_gordo", "fairbanks", "banda_ms"]
  },
  {
    uid: "john_smith",
    contact_info: {
      name: "John Smith",
      phone_number: "888-888-8888",
      email: "john_smith@email.com"
    },
    profile_pic: "john_smith.jpg",
    account_type: "planner",
    partners: ["tacos_el_gordo", "fairbanks", "banda_ms"]
  },
  {
    uid: "jane_doe",
    contact_info: {
      name: "Jane Doe",
      phone_number: "888-888-8888",
      email: "jane_doe@email.com"
    },
    profile_pic: "jane_doe.jpeg",
    account_type: "planner",
    partners: ["tacos_el_gordo", "fairbanks", "banda_ms"]
  },
  {
    uid: "fairbanks",
    contact_info: {
      name: "Fairbanks Ranch Country Club",
      phone_number: "858-356-2135",
      email: "info.frcc@bayclubs.com",
      address: "15150 San Dieguito Road, Rancho Santa Fe, CA 92067"
    },
    profile_pic: "wedding_venue_1.jpg",
    account_type: "business",
    partners: ["rosa_melano", "elver_galarga", "john_smith", "jane_doe"],
    ad: {},
    business_type: ["venues"]
  },
  {
    uid: "banda_ms",
    contact_info: {
      name: "Banda MS",
      phone_number: "777-777-7777",
      email: "banda_ms@email.com",
      address: "Mazatlan, Sinaloa, Mexico"
    },
    profile_pic: "banda_ms.jpg",
    account_type: "business",
    partners: ["rosa_melano", "elver_galarga", "john_smith", "jane_doe"],
    ad: {},
    business_type: ["entertainment"]
  },
  {
    uid: "tacos_el_gordo",
    contact_info: {
      name: "Tacos El Gordo",
      phone_number: "619-691-8848",
      email: "tacos_el_gordo@email.com",
      address: "689 H St, Chula Vista, CA 91910"
    },
    profile_pic: "TACOS.png",
    account_type: "business",
    partners: ["rosa_melano", "elver_galarga", "john_smith", "jane_doe"],
    ad: {},
    business_type: ["foodNdrinks"]
  }];

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