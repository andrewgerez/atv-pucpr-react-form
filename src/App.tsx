import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
