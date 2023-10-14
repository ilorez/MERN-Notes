import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/NotFound'

// help pages
import Faq from './pages/hekp/Faq'
import Contact from './pages/hekp/Contact'

// layouts
import RootLayout from './layouts/RootLayout'
import Help from './layouts/Help'
import CareersLayout from './layouts/CareersLayout'
import Careers, { loadingCarrers } from './pages/carrers/Careers'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='help' element={<Help />}>
        <Route path='faq' element={< Faq />} />
        <Route path='contact' element={< Contact />} />
      </Route>
      <Route path='careers' element={<CareersLayout />} >
        <Route index element={<Careers />} loader={loadingCarrers} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
