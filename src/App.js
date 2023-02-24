import "./App.css";
import "./gradientAnimation.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/TermsPage";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import PaymentTerms from "./pages/PaymentTerms";
import DownloadApp from "./pages/DownloadApp";
import Withdraw from "./pages/Withdraw";
import ZelleDetails from "./pages/ZelleDetails";
import PaypalDetails from "./pages/PaypalDetails";
import Waitlist from "./pages/Waitlist";
import Event from "./pages/Event";
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent";
import VerifyTicket from "./pages/VerifyTicket";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/event" element={<Event />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/verify_ticket" element={<VerifyTicket />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/download" element={<DownloadApp />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/withdraw/zelle" element={<ZelleDetails />} />
      <Route path="/withdraw/paypal" element={<PaypalDetails />} />
      <Route path="legal/" element={<Legal />} />
      <Route path="legal/terms-of-use" element={<TermsPage />} />
      <Route path="legal/privacy-policy" element={<Privacy />} />
      <Route path="legal/payment-terms" element={<PaymentTerms />} />
    </Routes>
  );
}

export default App;
