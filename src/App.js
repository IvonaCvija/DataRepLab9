import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Header from './components/header';
import Contents from './components/contents';
import Footer from './components/footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element ={<Contents></Contents>}></Route>
        <Route path='/read' element ={<Header></Header>}></Route>
        <Route path='/create' element ={<Footer></Footer>}></Route>
      </Routes>

      {/* <Header></Header> 
      <Contents></Contents>
      <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
