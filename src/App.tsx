import { Routes, Route } from "react-router-dom";

import PageWrapper from "./routes/page-wrapper/page-wrapper.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />} >
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
