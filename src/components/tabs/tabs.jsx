import React from 'react';
import tabsStyles from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default class Tabs extends React.Component {

  state = {
    current: 'one'
  }

  setCurrent = (current) => {
    this.setState({current: current})
  }

  render() {
    return (
      <div className={`${tabsStyles.container} pb-10`}>

        <Tab 
          value="one" 
          active={this.state.current === 'one'} 
          onClick={() => this.setCurrent('one')}
        >
          Булки
        </Tab>

        <Tab 
          value="two" 
          active={this.state.current === 'two'} 
          onClick={() => this.setCurrent('two')}
        >
          Соусы
        </Tab>

        <Tab 
          value="three" 
          active={this.state.current === 'three'} 
          onClick={() => this.setCurrent('three')}
        >
          Начинки
        </Tab>
      
      </div>
    )
  }
}