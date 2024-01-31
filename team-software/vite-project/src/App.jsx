import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import AccueilPage from './pages/Accueil';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const routes = [
    { path: '/about', element: <AboutPage /> },
    { path: '/', element: <AccueilPage /> },
  ];

  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
