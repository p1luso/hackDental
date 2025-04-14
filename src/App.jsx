import { Route, Routes, useLocation } from "react-router-dom";
import {
  DOWNLOAD_EBOOK,
  LANDING_EBOOKS,
  ADMIN_PANEL,
  LANDING_PAGE,
  CONTACT_FORM,
  OUR_PROGRAM,
  ACERCA_DE,
  CUMPLIMIENTO,
} from "./constants/routes";
import LandingEBooks from "./pages/LandingEBooks/LandingEBooks";
import DownloadEBook from "./pages/DownloadEBook/DownloadEBook";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactForm from "./pages/ContactForm/ContactForm";
import OurProgram from "./pages/OurProgram/OurProgram";
import Cumplimiento from "./pages/Cumplimiento/Cumplimiento";
import AcercaDe from "./pages/AcercaDe/AcercaDe";
import { useLayoutEffect } from "react";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <Routes>
      <Route path={LANDING_PAGE} element={<LandingPage />} />
      <Route path={LANDING_EBOOKS} element={<LandingEBooks />} />
      <Route path={DOWNLOAD_EBOOK} element={<DownloadEBook />} />
      <Route path={ADMIN_PANEL} element={<AdminDashboard />} />
      <Route path={CONTACT_FORM} element={<ContactForm />} />
      <Route path={OUR_PROGRAM} element={<OurProgram />} />
      <Route path={CUMPLIMIENTO} element={<Cumplimiento />} />
      <Route path={ACERCA_DE} element={<AcercaDe />} />
    </Routes>
  );
}

export default App;
