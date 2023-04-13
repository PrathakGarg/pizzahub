import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} >
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
