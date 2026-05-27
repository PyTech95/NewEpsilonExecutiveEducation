import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import Apply from "@/pages/Apply";
import ThankYou from "@/pages/ThankYou";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/thankyou/" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
