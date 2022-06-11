import tabsStyles from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTab } from '../../sevrices/slices/mainSlice'

export default function Tabs() {
  const dispatch = useDispatch()
  const {currentTab} = useSelector(state => state.main)

  return (
    <div className={tabsStyles.container}>

      <Tab 
        value="one" 
        active={currentTab === 'buns'} 
        onClick={() => dispatch(setCurrentTab('buns'))}
      >
         Булки
      </Tab>

      <Tab 
        value="two" 
        active={currentTab === 'sauces'} 
        onClick={() => dispatch(setCurrentTab('sauces'))}
      >
        Соусы
      </Tab>

      <Tab 
        value="three" 
        active={currentTab === 'mains'} 
        onClick={() => dispatch(setCurrentTab('mains'))}
      >
        Начинки
      </Tab>
      
    </div>
  )
}