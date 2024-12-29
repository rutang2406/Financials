import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Smaller from './Components/Newsarch/Smaller.jsx'
import Search from './Components/Menu/Search.jsx'
import Business from './Components/Menu/Business.jsx'
import Economy from './Components/Menu/Economy.jsx'
import Politics from './Components/Menu/Politics.jsx'
import Sports from './Components/Menu/Sports.jsx'
import Technology from './Components/Menu/Technology.jsx'
import Error from './Components/Error/Error.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='Business' element={<Business />} />
      <Route path='Economy' element={<Economy />} />
      <Route path='Politics' element={<Politics />} />
      <Route path='Sports' element={<Sports />} />
      <Route path='Technology' element={<Technology />} />
      <Route path='Search/' element={<Search />} >
        <Route path=':search' element={<Search />} />
      </ Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

