export const viewPartner = (partner) => {
  console.log("Clicked on partner");
  console.log(partner);
  return {
      type: "VIEW_PARTNER",
      payload: partner
  }  
};