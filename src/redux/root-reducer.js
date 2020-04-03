import { combineReducers } from "redux";

// import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});