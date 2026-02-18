import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/templates/Header'
import AddProduct from './components/products/AddProduct'
import ViewProduct from './components/products/ViewProduct'
import Logout from './components/products/Logout'
import EditProduct from './components/products/EditProduct'

function App() {
  

  return (
    <>
        <BrowserRouter>
              <Header></Header>

              <Routes>
                <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
                <Route path='/viewproduct' element={<ViewProduct></ViewProduct>}></Route>
                <Route path='/editproduct/:id' element={<EditProduct></EditProduct>}></Route>
                <Route path='/logout' element={<Logout></Logout>}></Route>
              </Routes>

        
        </BrowserRouter>
      
    </>
  )
}

export default App
