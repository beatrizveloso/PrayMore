import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrayMore from "../pages/praymore/PrayMore";
import Saint from "../pages/saintpage/Saint";
import Terco from "../pages/terco/Terco";
import Oracao from '../pages/oracao/Oracao';
import Novena from '../pages/novena/Novena';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrayMore />} />
        <Route path="/santo/:saintName" element={<Saint />} />
        <Route path="/terco/:tercoType" element={<Terco />} />
        <Route path="/oracao/:prayerName" element={<Oracao />} />
        <Route path="/novena/:novenaName" element={<Novena />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
