import { BrowserRouter, Routes, Route } from "react-router";
import { PostProvider } from "./contexts/PostContext";
import HomePage from "./pages/HomePage";
import BabyPage from "./pages/BabyPage";
import TendersPage from "./pages/TendersPage";
import BurgerhamPage from "./pages/BurgerhamPage";
import JobethPage from "./pages/JobethPage";
import OtherPage from "./pages/OtherPage";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <div className="size-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/baby" element={<BabyPage />} />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/burgerham" element={<BurgerhamPage />} />
            <Route path="/jobeth" element={<JobethPage />} />
            <Route path="/other" element={<OtherPage />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </div>
      </PostProvider>
    </BrowserRouter>
  );
}
