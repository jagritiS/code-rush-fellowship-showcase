import { useState } from 'react'


function App() {
  return (
    <>
      <h1>Routing</h1>
      <nav>
        <Link to="/">Home</Link>|
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App
