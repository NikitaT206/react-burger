import tabsStyles from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'

export default function Tabs() {
  const [current, setCurrent] = useState('one')

  return (
    <div className={tabsStyles.container}>

      <Tab 
        value="one" 
        active={current === 'one'} 
        onClick={() => setCurrent('one')}
      >
         Булки
      </Tab>

      <Tab 
        value="two" 
        active={current === 'two'} 
        onClick={() => setCurrent('two')}
      >
        Соусы
      </Tab>

      <Tab 
        value="three" 
        active={current === 'three'}
        onClick={() => setCurrent('three')}
      >
        Начинки
      </Tab>
      
    </div>
  )
}