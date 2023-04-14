import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchMenuStart } from "./store/menu/menu.action";

import PageWrapper from "./routes/page-wrapper/page-wrapper.component";
import HomePage from "./routes/home-page/home-page.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />} >
        <Route index element={<HomePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
