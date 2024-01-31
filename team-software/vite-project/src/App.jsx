import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import AccueilPage from './pages/Accueil';
import './App.css';

function App() {
  const routes = [
    { path: '/about', element: <AboutPage /> },
    { path: '/', element: <AccueilPage /> },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
