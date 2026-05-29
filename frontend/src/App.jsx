import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import  {Routes, Route, Navigate}  from 'react-router-dom'
import Login from './Services/Login'
import Home from './Pages/Home'
import AdminDashboard from './Pages/AdminDashboard'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060b13] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      <div>
        <Header />
        <main className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
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
