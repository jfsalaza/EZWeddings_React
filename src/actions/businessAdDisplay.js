export const businessAdSelected = (business) => {
    console.log("Business selected" + business.uid) ;
    return{
        type:"BUSINESS_SELECTED",
        payload: business
    }
};