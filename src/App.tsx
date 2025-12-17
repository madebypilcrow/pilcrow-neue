import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ marginBottom: "2rem" }}>
        <Link to="/" style={{ marginRight: 16 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Pilcrow Neue</h1>
              <p>If you can read this, routing is working.</p>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h1>About</h1>
              <p>About page placeholder.</p>
            </>
          }
        />
      </Routes>
    </main>
  );
}
