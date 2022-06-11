import Ingredient from '../ingredient/ingredient'
import ingredientsTypeListStyles from './ingredients-type-list.module.css'
import PropTypes from 'prop-types'
import { ingredientType } from '../../utils/types'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentTab } from '../../sevrices/slices/mainSlice'

export default function IngredientsTypeList({title, ingredients, id}) {
  const ref = useRef()
  const dispatch = useDispatch()

  useEffect(() => {

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {
        dispatch(setCurrentTab(ref.current.id))
      }
    } , {
      rootMargin: '40px',
      threshold: [1, .75, 1],
    })

    if (ref.current) {
      observer.observe(ref.current)
    } 

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [dispatch])

  return (
    <li className={`${ingredientsTypeListStyles.listItem} pb-10`} id={id} ref={ref}>
      <h3 className='text text_type_main-medium pb-6'>{title}</h3>
      <ul className={`${ingredientsTypeListStyles.list} pr-2 pl-4`}>
        {ingredients.map(item => {
          return <Ingredient item={item} key={item._id}/>
        })}
      </ul>
    </li>
  )
}

IngredientsTypeList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  title: PropTypes.string.isRequired,
}