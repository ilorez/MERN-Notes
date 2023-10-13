import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/home'
import About from './pages/about'

// help pages
import Faq from './pages/hekp/Faq'
import Contact from './pages/hekp/Contact'

// layouts
import RootLayout from './layouts/RootLayout'
import Help from './layouts/Help'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='help' element={<Help />}>
        <Route path='faq' element={< Faq />} />
        <Route path='contact' element={< Contact />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
