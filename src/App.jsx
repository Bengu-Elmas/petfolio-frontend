import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function Page({ title }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
    </main>
  );
}

export default function App() {
  const isLoggedIn = false;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Page title="About Us" />} />
        <Route path="/articles" element={<Page title="Articles" />} />
        <Route path="/login" element={<Page title="Log In" />} />
        <Route path="/signup" element={<Page title="Sign Up" />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route
          path="/pet-profile"
          element={
            isLoggedIn ? (
              <Page title="Pet Profile" />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="*" element={<Page title="Page not found" />} />
      </Routes>
    </>
  );
}
