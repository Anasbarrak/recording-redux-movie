import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Movielist() {
    const movie=useSelector(state=>state.Movies)
    console.log(movie)
  return (
    <div>
        {movie.map(e=>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            )}
    
    </div>
  )
}

export default Movielist