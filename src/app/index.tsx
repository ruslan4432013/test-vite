import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminLayout } from '@layouts/admin'

export const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminLayout/>}/>
      <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
    </Routes>
  )
}

