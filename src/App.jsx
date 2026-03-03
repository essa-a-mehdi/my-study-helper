import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  )
}
