import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Employees from "./pages/Employees";

function App() {
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
    </div>
  );
}

export default App;
