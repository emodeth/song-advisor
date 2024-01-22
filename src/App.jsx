import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SongProvider } from "./contexts/SongContex";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search">
            <Route path=":songId" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SongProvider>
  );
}

export default App;
