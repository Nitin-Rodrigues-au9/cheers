import React, {useState} from 'react'
import axios from 'axios'
import '../App.css'
import {Row,Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const MoviesList = () => {

    let [Movie,setMovie] = useState([''])

    const fetchMovie = async()=>{
        const data =  await axios.get('http://localhost:5000/api/getMovies')
        setMovie([data.data.message])
        console.log(data.data.message)
        console.log(Movie[0])

    }

    
    return (
        <>
        <h1>Movies list here:-</h1>

        <div>
            <button onClick={fetchMovie}>Get Movies</button>
        </div> 
        {Movie[0] ? Movie[0].map((item)=>{
            return(
                <div>
                   
                   
                   
                <Card className="my-3  rounded" >
              
                      
                    <Card.Img src={item.image} alt={item.title}/>
                    <Card.Body>
                    <Card.Title as='div'><h2> Title:{item.title}</h2> </Card.Title>
                    <Card.Text as='div'><p> subTitle:{item.subTitle}</p> </Card.Text>
                    <Card.Text as='div'> <p>Description:{item.description}</p></Card.Text>
                    
                    <Card.Title as='div'>
                        
                    
                       Ratings:{item.rating}<Rating value={item.rating}/>
                   </Card.Title>
                    </Card.Body>
                   
              
                </Card>
               
              
               
                </div>
            )
        }):<h1>no movies data here</h1>}
        
        </>
    )
}

export default MoviesList
