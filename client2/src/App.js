import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrimaryView from './Views/PrimaryView/PrimaryView.jsx'

import { primaryRoutes } from './Routes/PrimaryRoutes.jsx'

function App() {

  return (
    <Router>
      <Routes>
        {primaryRoutes.map(({ route, page }, index) => (
          <Route key={index} path={route} element={<PrimaryView />}>
            <Route index element={page} />
          </Route>
        ))}
      </Routes>
    </Router>

  )
}

export default App
