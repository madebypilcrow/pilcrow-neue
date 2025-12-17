import { Routes, Route, Link } from "react-router-dom";
import StopMotion from "./components/StopMotion";

const base = import.meta.env.BASE_URL;

export default function App() {
  return (
    <main style={{ padding: "2rem", minHeight: "200vh" }}>
      <StopMotion
        frames={[
          `${base}chronos/frame-01.webp`,
          `${base}chronos/frame-02.webp`,
          `${base}chronos/frame-03.webp`,
          `${base}chronos/frame-04.webp`,
          `${base}chronos/frame-05.webp`,
        ]}
      />

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
              <p>Scroll the page. Image should remain fixed.</p>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h1>About</h1>
              <p>Placeholder.</p>
            </>
          }
        />
      </Routes>
    </main>
  );
}