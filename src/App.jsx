import { useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Articles from "./pages/Articles";
import PlayingWithYourPet from "./pages/articles/PlayingWithYourPet";
import CatsAndDogs from "./pages/articles/CatsAndDogs";
import HeartHealth from "./pages/articles/HeartHealth";
import PetsAndMentalHealth from "./pages/articles/PetsAndMentalHealth";
import ChoosingPetFood from "./pages/articles/ChoosingPetFood";
import PetVaccinations from "./pages/articles/PetVaccinations";
import RegularCheckups from "./pages/articles/RegularCheckups";
import CatLitter from "./pages/articles/CatLitter";
import PetShedding from "./pages/articles/PetShedding";
import CatNeutering from "./pages/articles/CatNeutering";

function Page({ title }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
    </main>
  );
}

function ArticleScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname.startsWith("/articles/")) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const isLoggedIn = false;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <ArticleScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route
          path="/articles/playing-with-your-pet"
          element={<PlayingWithYourPet />}
        />
        <Route path="/articles/cats-and-dogs" element={<CatsAndDogs />} />
        <Route path="/articles/heart-health" element={<HeartHealth />} />
        <Route
          path="/articles/pets-and-mental-health"
          element={<PetsAndMentalHealth />}
        />
        <Route
          path="/articles/choosing-pet-food"
          element={<ChoosingPetFood />}
        />
        <Route path="/articles/vaccinations" element={<PetVaccinations />} />
        <Route
          path="/articles/regular-checkups"
          element={<RegularCheckups />}
        />
        <Route path="/articles/cat-litter" element={<CatLitter />} />
        <Route path="/articles/shedding" element={<PetShedding />} />
        <Route path="/articles/neutering" element={<CatNeutering />} />
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
