import "./App.css";
import "./gradientAnimation.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/TermsPage";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import PaymentTerms from "./pages/PaymentTerms";
import ServiceCompany from "./pages/ServiceCompany";
import ServiceDeveloper from "./pages/ServiceDeveloper";
import Pricing from "./pages/Pricing";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { kr, en } from "./locales";

function App() {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: { en, kr },
      fallbackLng: ["kr", "en"],
      interpolation: { escapeValue: false },
      detection: { order: ["path", "navigator"] },
    });

  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/service/company" element={<ServiceCompany />} />
      <Route path="/service/developer" element={<ServiceDeveloper />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="legal/" element={<Legal />} />
      <Route path="legal/terms-of-use" element={<TermsPage />} />
      <Route path="legal/privacy-policy" element={<Privacy />} />
      <Route path="legal/payment-terms" element={<PaymentTerms />} />
    </Routes>
  );
}

export default App;
