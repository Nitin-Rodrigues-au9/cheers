// import React from 'react'
// import '../App.css'


// const Header = () => {
//     return (
//         <>
//             <div className="Container">
//                 <h2>MovieMania</h2>
//                 </div>

//         </>
//     )
// }

// export default Header

import React from "react";
import { Navbar, Container } from "react-bootstrap";
const header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
        <Container >
          <Navbar.Brand  href="#home">Movie Flix</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default header;

