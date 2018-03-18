import delay from './delay';

const my_partners = {
    rosa_melano: {
        fairbanks: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        tacos_el_gordo: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    },
    elver_galarga: {
        fairbanks: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        banda_ms: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    },
    john_smith: {
        fairbanks: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        banda_ms: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    },
    jane_doe: {
        fairbanks: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        tacos_el_gordo: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        banda_ms: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    },
    fairbanks: {
        rosa_melano: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        elver_galarga: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        john_smith: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        jane_doe: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    },
    tacos_el_gordo: {
        rosa_melano: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        jane_doe: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    },
    banda_ms: {
        elver_galarga: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        john_smith: {
            chat: [],
            todo: [],
            idCounter: 0
        },
        jane_doe: {
            chat: [],
            todo: [],
            idCounter: 0
        }
    }
};


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
                const chat = message.chat;
                const sender = Object.assign({}, my_partners[from]);
                const newPartner = {chat: chat, todo: sender[to].todo, idCounter: sender[to].idCounter};
                ////
                const receiver = Object.assign({}, my_partners[to]);
                const newReceiverSide = {chat: chat, todo: receiver[from].todo, idCounter: receiver[from].idCounter};
                receiver[from] = newReceiverSide;
                my_partners[to] = receiver;
                let newReceiver = {};
                newReceiver[to] = receiver;
                ////
                sender[to] = newPartner;
                my_partners[from] = sender;
                
                let newSender = {};
                newSender[from] = sender;
                resolve([newSender, newReceiver]);
            }, delay);
        });
    }

    // static addPartner(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() =>{
                
    //         }, delay);
    //     });
    // }
    static addToDo(todoLoad) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const current_user = Object.assign({}, my_partners[todoLoad.current_user]);
                const partner = todoLoad.partner;
                const idCounter = todoLoad.idCounter;
                const todoList = todoLoad.list;
                current_user[partner] = {chat: current_user[partner].chat, todo: todoList, idCounter: idCounter};
                ////
                const partnerSide = Object.assign({}, my_partners[todoLoad.partner]);
                partnerSide[todoLoad.current_user] = {chat: current_user[partner].chat, todo: todoList, idCounter: idCounter};
                my_partners[todoLoad.partner] = partnerSide;
                let newPartnerSide = {};
                newPartnerSide[todoLoad.partner] = partnerSide;
                ////
                my_partners[todoLoad.current_user] = current_user;

                let newCurrentUser = {};
                newCurrentUser[todoLoad.current_user] = current_user;
                resolve([newCurrentUser, newPartnerSide]);
            }, delay);
        });
    }

}

export default MyPartnersApi;