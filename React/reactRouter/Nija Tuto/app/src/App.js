import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
