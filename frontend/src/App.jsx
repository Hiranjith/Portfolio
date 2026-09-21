import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import  {Routes, Route, Navigate}  from 'react-router-dom'
import Login from './Services/Login'
import Home from './Pages/Home'
import About from './Components/About'
import Projects from './Pages/Projects'
import AdminDashboard from './Pages/AdminDashboard'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="w-full">
        <Header />
        <main className="max-w-[1280px] mx-auto px-[24px] md:px-[80px] pt-[16px] pb-[40px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path='/login' element={<Login />} />
            <Route 
              path='/dashboard' 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
