import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Media from './pages/Media'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {index:true, element:<Home />},
        {path:"about", element:<About />},
        {path:"services", element:<Services />},
        {path:"products", element:<Products />},
        {path:"media", element:<Media />},
        {path:"gallery", element:<Gallery />},
        {path:"contact-us", element:<Contact />},
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
