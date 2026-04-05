import './App.css';
import Home from "./pages/Home";

// ✅ Toggle this to show/hide the shop closed notice
const isOpen = false;
const closedMessage = "We'll be back soon!";
const closedReason = "Site under maintenance. Please contact Administrator.";

function ClosedNotice() {
  return (
    <div className="closed-overlay">
      <div className="closed-card">
        <div className="closed-icon">🚧</div>
        <h1 className="closed-title">Shree Hiralal And Sons Misthan Bhandar</h1>
        <div className="closed-divider"></div>
        <h2 className="closed-reason">{closedReason}</h2>
        <p className="closed-message">{closedMessage}</p>
        <div className="closed-contact">
          {/* <p>📞 917275615550</p> */}
          {/* <a
            href="https://wa.me/917275615550?text=Hi, when will the shop reopen?"
            target="_blank"
            rel="noreferrer"
            className="closed-wa-btn"
          >
            💬 Message us on WhatsApp
          </a> */}
        </div>
      </div>
    </div>
  );
}

function App() {
  if (!isOpen) return <ClosedNotice />;
  return <Home />;
}

export default App;