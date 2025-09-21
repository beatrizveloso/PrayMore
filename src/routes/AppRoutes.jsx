import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrayMore from "../pages/praymore/PrayMore";
import SaintPage from "../pages/saintpage/Saintpage";
import Terco from "../pages/terco/Terco";

const AppRoutes = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrayMore />} />
        <Route path="/santo/:saintName" element={<SaintPage />} />
        <Route path="/terco/:tercoType" element={<Terco />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;