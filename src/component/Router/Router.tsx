import React from 'react';
import ReactDOM from 'react-dom';



import { Route, Navigate,  Routes, BrowserRouter} from 'react-router-dom'
import Home from '../Home/Home.jsx'
import GenericForm from '../Form/Form.jsx'
const Router = ()=>{
    
    return(
        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/form" element={<GenericForm/>} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
           
        </div>
        </BrowserRouter>
    )
    
}
export default Router;


