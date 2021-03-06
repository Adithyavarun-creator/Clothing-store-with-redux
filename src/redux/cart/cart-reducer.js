import CartActionTypes from "./cart-types"
import { AddItemToCart,removeitemfromcart } from "./cart-utils"

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    if(action.type === CartActionTypes.TOGGLE_CART_HIDDEN){
        return {
            ...state,
            hidden:!state.hidden
        }
    }

    if(action.type === CartActionTypes.ADD_ITEM){
        return{
            ...state,
            cartItems:AddItemToCart(state.cartItems,action.payload)
        }
    }

    if(action.type === CartActionTypes.CLEAR_ITEM_FROM_CART){
        return{
            ...state,
            cartItems:state.cartItems.filter(item => 
                item.id !== action.payload.id)
        }
    }

    if(action.type === CartActionTypes.REMOVE_ITEM){
        return{
            ...state,
            cartItems:removeitemfromcart(state.cartItems,action.payload)
        }
    }


    return state
}

export default cartReducer