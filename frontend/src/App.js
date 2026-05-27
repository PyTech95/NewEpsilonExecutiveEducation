import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import Apply from "@/pages/Apply";
import ThankYouOverlay from "@/components/site/ThankYouOverlay";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
      <ThankYouOverlay />
    </div>
  );
}

export default App;
