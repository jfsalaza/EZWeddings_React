export const addPartner = (partner) =>{
    console.log("in addPartner action " + partner.email);
    return{
        type: "PARTNER_ADDED",
        payload: partner
    }
};