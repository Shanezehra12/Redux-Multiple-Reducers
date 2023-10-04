import { ADD_ITEM, REMOVE_ITEM, CHANGE_THEME } from "../ActionTypes";

export const addItemToCart = (data) => ({
    type: ADD_ITEM,
    payload: data,
})

export const removeItemFromCart = (index) => ({
    type: REMOVE_ITEM,
    payload: index,
})

export const changeTheme = (type) => ({
    type: CHANGE_THEME,
    payload: type,
})