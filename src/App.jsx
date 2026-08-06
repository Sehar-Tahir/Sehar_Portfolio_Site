import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <div className="bg-paper dark:bg-base text-ink dark:text-mist transition-colors duration-300">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App