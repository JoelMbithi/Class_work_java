import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App'; // Adjusted import path
import './index.css';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);





//ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
 //// <RouterProvider router= {router}/>
  //<React.StrictMode>
//);
