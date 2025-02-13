import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Main/MainLayout";
import Home from "./page/Home";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}
