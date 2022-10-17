import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import ProtectedRoute from '../protected-route/protected-route'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../pages/login/login'
import { Register } from '../../pages/register/register'
import { ResetPassword } from '../../pages/reset-password/reset-password'
import { ForgotPassword } from '../../pages/forgot-password/forgot-password'
import { Profile } from '../../pages/profile/profile'
import { Main } from '../../pages/main/main'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserMe, setLoggedIn, setLogOut, setUser } from '../../services/slices/userSlice'
import { getCookie, logout, refreshToken, changeUserData } from '../../utils/burger-api'
import { setIngredients, setIngredientsList } from '../../services/slices/ingredientsSlice'
import { clearIngredient, closeIngredientDetails } from '../../services/slices/ingredientDetailSlice'

function App() {

  const {orderDetails} = useSelector(state => state.orderDetail)
  const {ingredients} = useSelector(state => state.ingredients)

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(setIngredients())
  }, [dispatch])

  useEffect(() => {
    if (ingredients) {
      dispatch(setIngredientsList())
    }
  }, [ingredients, dispatch])

  useEffect(() => {
    if (localStorage.getItem('refreshToken') && getCookie('accessToken') === undefined) {
      refreshToken(localStorage.getItem('refreshToken'))
        .then(data => {
          if (data.success) {
            localStorage.setItem('refreshToken', data.refreshToken)
            document.cookie = `accessToken=${data.accessToken}; max-age=1200`
            dispatch(getUserMe())
          }
        })
        .catch(err => {
          Promise.reject(err)
        })
    }
  }, [])

  useEffect(() => {
    if (getCookie('accessToken') !== undefined) {
      dispatch(getUserMe())
    }
  }, [])

  function onCloseModal() {
    dispatch(clearIngredient())
    dispatch(closeIngredientDetails())
    history.goBack()
  }

  return (
    <div className={styles.app}>
      
      <AppHeader/>

        <Switch>

          <ProtectedRoute path={['/profile', '/profile/orders', '/profile/logout']}>
            <Profile/>
          </ProtectedRoute>

          <Route path={'/'} exact={true}>
            <Main/>
          </Route>

          <Route path={'/login'}>
            <Login/>
          </Route>

          <Route path={'/register'}>
            <Register/>
          </Route>

          <Route path={'/forgot-password'}>
            <ForgotPassword/>
          </Route>

          <Route path={'/reset-password'}>
            <ResetPassword/>
          </Route>

          <Route path={'/ingredient/:id'} exact={true}>
            <IngredientDetails/>
          </Route>

          <Route path={`ingredient/:id`} children={({match}) => {
            return (
              <Modal onClose={onCloseModal}>
                <IngredientDetails/>
              </Modal>
            )
          }}>
          </Route>

          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
     
      {/* {ingredientDetails && (
        <Modal onClose={onCloseModal}>
          <IngredientDetails/>
        </Modal>
      )} */}
      {orderDetails  && <OrderDetails />}
      
    </div>
  )
}

export default App
