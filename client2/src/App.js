import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrimaryView from './Views/PrimaryView/PrimaryView.jsx'
import LoginView from './Views/LoginView/LoginView.jsx';

import { primaryRoutes } from './Routes/PrimaryRoutes.jsx'
import { publicRoutes } from './Routes/PublicRoutes.js';

import { AuthProvider } from './Context/AuthContext.js';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {primaryRoutes.map(({ route, page }, index) => (
            <Route key={index} path={route} element={<PrimaryView />}>
              <Route index element={page} />
            </Route>
          ))}

          {publicRoutes.map(({ route, page }, index) => (
            <Route key={index} path={route} element={<LoginView />}>
              <Route index element={page} />
            </Route>
          ))}


        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
