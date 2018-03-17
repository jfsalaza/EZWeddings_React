import delay from './delay';

const my_partners = {
    rosa_melano: {
        fairbanks: {
            chat: [],
            todo: []
        },
        tacos_el_gordo: {
            chat: [],
            todo: []
        }
    },
    elver_galarga: {
        fairbanks: {
            chat: [],
            todo: []
        },
        tacos_el_gordo: {
            chat: [],
            todo: []
        },
        banda_ms: {
            chat: [],
            todo: []
        }
    },
    john_smith: {
        fairbanks: {
            chat: [],
            todo: []
        },
        tacos_el_gordo: {
            chat: [],
            todo: []
        },
        banda_ms: {
            chat: [],
            todo: []
        }
    },
    jane_doe: {
        fairbanks: {
            chat: [],
            todo: []
        },
        tacos_el_gordo: {
            chat: [],
            todo: []
        },
        banda_ms: {
            chat: [],
            todo: []
        }
    },
    fairbanks: {
        rosa_melano: {
            chat: [],
            todo: []
        },
        elver_galarga: {
            chat: [],
            todo: []
        },
        john_smith: {
            chat: [],
            todo: []
        },
        jane_doe: {
            chat: [],
            todo: []
        }
    },
    tacos_el_gordo: {
        rosa_melano: {
            chat: [],
            todo: []
        },
        elver_galarga: {
            chat: [],
            todo: []
        },
        john_smith: {
            chat: [],
            todo: []
        },
        jane_doe: {
            chat: [],
            todo: []
        }
    },
    banda_ms: {
        elver_galarga: {
            chat: [],
            todo: []
        },
        john_smith: {
            chat: [],
            todo: []
        },
        jane_doe: {
            chat: [],
            todo: []
        }
    }
};


//const my_partners2 = [{uid: "rosa_melano"}, {uid:"elver_galarga"}];
//const my_partners = {rosa_melano: "rosa", elver_galarga: "elver"};


class MyPartnersApi {
    static getAllMyPartners() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, my_partners));
            }, delay);
        });
    }

    static sendMessage(message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const from = message.from;
                const to = message.to;
                const msg = message.msg;
                const sender = Object.assign({}, my_partners[from]);
                //const newChat = Object.assign([], sender[to].chat, [msg]);
                const newPartner = {chat: msg, todo: sender[to].todo};
                sender[to] = newPartner;
                my_partners[from] = sender;
                
               console.log("In API");
               console.log(message);

                //my_partners.push(message);
               // my_partners[message.msg] = message;
                //resolve(my_partners);
                let newSender = {};
                newSender[from] = sender;
                resolve(newSender);
            }, delay);
        });
    }
}

export default MyPartnersApi;