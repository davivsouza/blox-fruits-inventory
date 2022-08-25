import { Link, Route, Routes } from "react-router-dom";
import { Inventory } from "./pages/Inventory";
import { Menu } from "./pages/Menu";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  const bloxFruitLogo =
    "https://static.wikia.nocookie.net/roblox-blox-piece/images/e/e6/Site-logo.png";
  return (
    <div className="w-screen h-[90vh] flex items-center flex-col gap-4 p-2">
      <header>
        <Link to="/">
          <>
            <img src={bloxFruitLogo} alt="Blox Fruit Logo" />
          </>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
