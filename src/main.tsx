import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Work from './pages/Work.tsx';
import Services from './pages/Services.tsx';
import Testimonials from './pages/Testimonials.tsx';
import Contact from './pages/Contact.tsx';
import CaseStudy from './pages/CaseStudy.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'work/:id', element: <CaseStudy /> },
      { path: 'services', element: <Services /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
