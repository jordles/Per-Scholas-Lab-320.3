import React from 'react'
import Score from './Score'

function Learner({learner}) {
  return (
    <>
    <h1>{learner.name}</h1>
    <p>Bio: {learner.bio}</p>
    {learner.scores.map(score => (
      <Score key={score.date} score={score} />
    ))}
    </>
  )
}

export default Learner