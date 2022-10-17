import styles from './constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag, useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { setConstructorIngredients } from '../../services/slices/constructorIngredientsSlice'

export function ContructorIngredient({item, index}) {
  const {constructorIngredients} = useSelector(state => state.burgerConstructor)
  const dispatch = useDispatch()

  const [, dragRef] = useDrag({
    type: 'constructorIngredient',
    item: item,
  })

  const [, dropRef] = useDrop({
    accept: 'constructorIngredient',
    hover(el) {
      const dragIndex = constructorIngredients.indexOf(el)
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const copy = [...constructorIngredients]
      copy.splice(hoverIndex, 0, copy.splice(dragIndex, 1)[0])
      dispatch(setConstructorIngredients(copy))
    }
  })

  function deleteIngredientHandler(item) {
    const filtered = constructorIngredients.filter((i) => i.key !== item.key)
    dispatch(setConstructorIngredients(filtered))
  }

  return (
    <div className={styles.flexContainer} ref={dropRef} draggable>
      <div className={styles.icon} ref={dragRef}>
        <DragIcon type='primary'/>
      </div>
        
      <ConstructorElement 
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => deleteIngredientHandler(item)}
      />
    </div>
  )
}