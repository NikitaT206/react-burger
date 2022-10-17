import { combineReducers } from 'redux';
import orderDetailReducer from '../slices/orderDetailSlice';
import ingredientsReducer from '../slices/ingredientsSlice';
import constructorIngredientsReducer from '../slices/constructorIngredientsSlice';
import ingredientDetailReducer from '../slices/ingredientDetailSlice';
import formsReducer from '../slices/formsSlice';
import userReducer from '../slices/userSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorIngredientsReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderDetailReducer,
  forms: formsReducer,
  user: userReducer,
})