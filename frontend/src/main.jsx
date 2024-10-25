import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-lg mx-auto'>
   <RouterProvider router={router}/>
   </div>
  </StrictMode>,
)
