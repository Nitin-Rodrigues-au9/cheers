import React from 'react'
import Header from './container/Header'
import { Container } from "react-bootstrap";
import {Row,Col} from 'react-bootstrap'
import MoviesList from './container/MoviesList'
import "./bootstrap.min (1).css";
import "./index.css"
import Footer from "./container/Footer"
const App = () => {
    return (
        <div>
            <main>
            <Header/>
            <Row  md={2}>
              
            <Container >  <Row md={2}><MoviesList/></Row></Container>
            </Row>
            <Footer/>
            </main>
        </div>
    )
}

export default App
