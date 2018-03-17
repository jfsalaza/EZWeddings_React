import delay from './delay';

const my_partners = {
    rosa_melano: [
        { uid: "fairbanks", chat: [], todo: [] },
        { uid: "tacos_el_gordo", chat: [], todo: [] }
    ],
    elver_galarga: [
        { uid: "fairbanks", chat: [], todo: [] },
        { uid: "tacos_el_gordo", chat: [], todo: [] },
        { uid: "banda_ms", chat: [], todo: []}
    ],
    john_smith: [
        { uid: "fairbanks", chat: [], todo: [] },
        { uid: "tacos_el_gordo", chat: [], todo: [] },
        { uid: "banda_ms", chat: [], todo: []}
    ],
    jane_doe: [
        { uid: "fairbanks", chat: [], todo: [] },
        { uid: "tacos_el_gordo", chat: [], todo: [] },
        { uid: "banda_ms", chat: [], todo: []}
    ],
    fairbanks: [
        { uid: "rosa_melano", chat: [], todo: []},
        { uid: "elver_galarga", chat: [], todo: []},
        { uid: "john_smith", chat: [], todo: [] },
        { uid: "jane_doe", chat: [], todo: []}
    ],
    tacos_el_gordo: [
        { uid: "rosa_melano", chat: [], todo: []},
        { uid: "elver_galarga", chat: [], todo: []},
        { uid: "john_smith", chat: [], todo: [] },
        { uid: "jane_doe", chat: [], todo: []}
    ],
    banda_ms: [
        { uid: "rosa_melano", chat: [], todo: []},
        { uid: "elver_galarga", chat: [], todo: []},
        { uid: "john_smith", chat: [], todo: [] },
        { uid: "jane_doe", chat: [], todo: []}
    ]
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
        const message2 = Object.assign({}, message);
        const my_partners2 = Object.assign({}, my_partners);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const partners = my_partners2[message2.from];
                for(let i = 0; i < partners.length; i++) {
                    let partner = partners[i];
                    if(partner.uid == message2.to) {
                        //my_partners2.push(message2.msg)
                        console.log("IN HERE");
                    }
                }
                resolve(Object.assign({}, my_partners, {msg: message}));
            }, delay);
        });
    }
}

export default MyPartnersApi;