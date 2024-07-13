import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import AdminReg from './components/Auth/AdminReg'
import Home from './components/HomePage/Home'
import Contact from './components/Contact/Contact'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import ContributionList from './components/AdminDashboard/ContributionList'
import AddContribution from './components/AdminDashboard/AddContribution'
import EditProfile from './components/AdminDashboard/EditAdminProfile'
import About from './components/HomePage/About'
import BlogPage from './components/HomePage/BlogPage'
import DashboardPage from './pages/DashboardPage'
import Register from './components/Auth/AdminReg'
import PaymentHistory from './components/Dashboard/PaymentHistory'

const App = () => {
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adminReg" element={<AdminReg />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        <Route path="/contributionlist" element={<ContributionList />} />
        <Route path="/add-contribution" element={<AddContribution />} />
        <Route path="/edit-admin" element={<EditProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/PaymentHistory" element={<PaymentHistory/>} />
          <Route path="/editProfile" element={<EditProfile/>} />
          <Route path="/Contribution" element={<ContributionList/>} />


        {/* Add more routes as needed */}
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
