import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
import { getIngregients } from '../../utils/burger-api'
import BurgerMenu from '../burger-menu/burger-menu'

function App() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

  const [ingredients, setIngredients] = useState([])
  const [ingredient, setIngredient] =useState({})
  const [orderDetails, setOrderDetails] = useState(false)
  const [ingredientDetails, setIngredientDetails] = useState(false)

  const [buns, setBuns] = useState([])
  const [fillings, setFillings] = useState([])
  const [sauces, setSauces] = useState([])
  const [mains, setMains] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function toogleBurgerMenu() {
    setBurgerMenuOpen(!burgerMenuOpen)
  }

  function onIngredientClickHandler(ingredient) {
    setIngredient(ingredient)
    setIngredientDetails(true)
  }

  function onMakeOrderHandler() {
    setOrderDetails(true)
  }

  function closeModal() {
    setOrderDetails(false)
    setIngredientDetails(false)
    setIngredient({})
  }

  useEffect(() => {
    getIngregients()
      .then(data => setIngredients(data.data))
      .catch(err => Promise.reject(err))
  }, [])

  useEffect(() => {
    if (ingredients) {
      setFillings(ingredients.filter(item => item.type !== 'bun'))
      setBuns(ingredients.filter(item => item.type === 'bun'))
      setSauces(ingredients.filter(item => item.type === 'sauce'))
      setMains(ingredients.filter(item => item.type === 'main'))
    }
  }, [ingredients])

  return (
    <div className={appStyles.app}>
      <AppHeader toogleBurgerMenu={toogleBurgerMenu} burgerMenuOpen={burgerMenuOpen}/>

      {ingredients.length > 0 && ( 
        <main className={appStyles.flexContainer}>
          <BurgerIngredients 
            buns={buns} 
            sauces={sauces}
            mains={mains} 
            onIngredientClick={onIngredientClickHandler}
          />
          <BurgerConstructor 
            onMakeOrder={onMakeOrderHandler} 
            bun={buns[0]} 
            fillings={fillings}
            totalPrice={totalPrice}
          />
        </main>
      )}
     
      {ingredientDetails && <IngredientDetails ingredient={ingredient} onClose={closeModal}/>}
      {orderDetails  && <OrderDetails onClose={closeModal}/>}

      <BurgerMenu burgerMenuOpen={burgerMenuOpen}/>
      
    </div>
  )
}

export default App;
