import Ingredient from '../ingredient/ingredient'
import styles from './ingredients-type-list.module.css'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentTab } from '../../services/slices/ingredientsSlice'

export default function IngredientsTypeList({title, ingredients, id, currentRef}) {
  const dispatch = useDispatch()

  useEffect(() => {

    const observer = new IntersectionObserver(([entry]) => {
     
      if (entry.isIntersecting) {
        dispatch(setCurrentTab(entry.target.id))
      }

    } , {threshold: [1, .75]})

    if (currentRef.current) {
      observer.observe(currentRef.current)
    } 

    return () => {
      if (currentRef.current) {
        observer.unobserve(currentRef.current)
      }
    }
  }, [currentRef, dispatch])

  return (
    <li className={`${styles.listItem} pb-10`} id={id} ref={currentRef}>
      <h3 className='text text_type_main-medium pb-6'>{title}</h3>
      <ul className={`${styles.list} pr-2 pl-4`}>
        {ingredients.map(item => {
          return <Ingredient item={item} key={item._id}/>
        })}
      </ul>
    </li>
  )
}

IngredientsTypeList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  title: PropTypes.string.isRequired,
}