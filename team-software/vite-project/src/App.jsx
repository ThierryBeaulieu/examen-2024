import AboutPage from './About';
import AccueilPage from './Accueil';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const routes = [
    { path: '/about', element: <AboutPage /> },
    { path: '/', element: <AccueilPage /> },
  ];
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
