import styles from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTab } from '../../services/slices/ingredientsSlice'

export default function Tabs({bunsRef, saucesRef, mainsRef}) {
  const dispatch = useDispatch()
  const {currentTab} = useSelector(state => state.ingredients)

  function handleScroll(ref, tab) {
    ref.current.scrollIntoView({ behavior: "smooth" })
    dispatch(setCurrentTab(tab))
  }

  return (
    <div className={styles.container}>

      <Tab 
        value="one" 
        active={currentTab === 'buns'} 
        onClick={() => handleScroll(bunsRef, 'buns')}
      >
         Булки
      </Tab>

      <Tab 
        value="two" 
        active={currentTab === 'sauces'} 
        onClick={() => handleScroll(saucesRef, 'sauces')}
      >
        Соусы
      </Tab>

      <Tab 
        value="three" 
        active={currentTab === 'mains'} 
        onClick={() => handleScroll(mainsRef, 'mains')}
      >
        Начинки
      </Tab>
      
    </div>
  )
}