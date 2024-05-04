import React from 'react'

const MealsDetailsPage = ({ params }: { params: { slug: string } }) => {
    console.log(params)
  return (
    <div>
        Meals Details Page
        <p>{params.slug}</p>
        </div>
  )
}

export default MealsDetailsPage