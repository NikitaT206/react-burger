import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'
import { ingredintsUrl } from '../../utils/constants'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'

function App() {
  const [ingredients, setIngredients] = useState([])
  const [ingredient, setIngredient] =useState({})
  const [orderDetails, setOrderDetails] = useState(false)
  const [ingredientDetails, setIngredientDetails] = useState(false)

  const [buns, setBuns] = useState([])
  const [fillings, setFillings] = useState([])
  const [sauces, setSauces] = useState([])
  const [mains, setMains] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

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
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  async function getIngredients() {
    try {
      const response = await fetch(ingredintsUrl)
      const json = await response.json()
      return setIngredients(json.data)
    } catch (err) {
      return console.log(err)
    }
  }

  useEffect(() => {
    getIngredients()    
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
      <AppHeader/>

      {ingredients && ( 
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
      
    </div>
  )
}

export default App;