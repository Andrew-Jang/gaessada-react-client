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

function App() {
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
