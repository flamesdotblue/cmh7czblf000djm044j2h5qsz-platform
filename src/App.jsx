import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 via-slate-900 to-black text-slate-100">
      <Header />
      <main>
        <Hero />
        <Workflow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
