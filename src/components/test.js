import React from 'react'
import RecipeCards from './RecipeCards'

export default function test(props) {
  return (
    <div>
        <RecipeCards
        recipeData={props.recipeData}
        />
    </div>
  )
}
