import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Modal from '@aamal/p14-plugin-modale/dist/components/Modal'
import { ModalActions} from '@aamal/p14-plugin-modale/dist/components/ModalActions'
import { ModalContent} from '@aamal/p14-plugin-modale/dist/components/ModalContent'
import { ModalTitle } from '@aamal/p14-plugin-modale/dist/components/ModalTitle'
import './App.css';
import {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Employees from "./pages/Employees";

function App() {
    //const [myModal, setMyModal ] = useState(false)
  return (
    <div className="App">
        <Router>
            <div className={"main"}>
                <Header/>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/employees" exact element={<Employees />}/>
                    <Route path="*" element={<Navigate to={'/'} />}/>
                </Routes>
            </div>
        </Router>
        <Footer/>
        {/*
        <p>hello</p>
        <Modal label="my-super-bright-alert"  show={myModal} setShow={setMyModal}>
            <ModalTitle> Modal Title</ModalTitle>
            <ModalContent>*****Modal Message*****</ModalContent>
            <ModalActions>
                <button type="button" onClick={() =>setMyModal(!myModal)}>Close Modal</button>
            </ModalActions>
        </Modal>
        */}
    </div>
  );
}

export default App;
