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
}

export default MyPartnersApi;