import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Counter from '../Components/Counter/Counter';
import Navbar from '../Components/Navbar/Navbar';

export default function Router() {
   
    return (
        <div>
   
            <BrowserRouter>
                <Routes>
                    <Route path='/'      element={<Navbar><Counter /></Navbar>} />
                    <Route path='/page1' element={<Navbar><Page1 /> </Navbar>} />
                    <Route path='/page2' element={<Navbar> <Page2 /></Navbar>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
