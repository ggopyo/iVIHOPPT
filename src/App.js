import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebFont from "webfontloader";
import IvihoPPT from "./IvihoPPT";
WebFont.load({
  google: {
    families: ["Noto Sans KR", "sans-serif"],
  },
});

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<IvihoPPT />} />
      </Routes>
    </Router>
  );
};

export default App;
