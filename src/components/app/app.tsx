import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <div className={appStyles.flexContainer}>
        <BurgerIngredients/>
      </div>
    </div>
  );
}

export default App;
