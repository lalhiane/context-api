import { atom } from "recoil";

const productsState = atom({

    key: 'products', // unique ID (with respect to other atoms/selectors)
    
    default: [], // valeur par défaut (alias valeur initials)
  
});

export default productsState;