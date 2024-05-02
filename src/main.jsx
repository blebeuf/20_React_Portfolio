import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Projects from './pages/projects';
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
