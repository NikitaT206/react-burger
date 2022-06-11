import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorIngredientStyles from './constructor-ingredient.module.css'
import { useDrag, useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { setConstructorIngredients } from '../../sevrices/slices/mainSlice'

export function ContructorIngredient({item, index}) {
  const {constructorIngredients} = useSelector(state => state.main)
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

  const deleteIngredientHandler = (item) => {
    const filtered = constructorIngredients.filter((i, index, arr) => arr.indexOf(i) !== arr.lastIndexOf(item))
    dispatch(setConstructorIngredients(filtered))
  }

  return (
    <div className={constructorIngredientStyles.flexContainer} key={item._id} ref={dropRef} draggable>
      <div className={constructorIngredientStyles.icon} ref={dragRef}>
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