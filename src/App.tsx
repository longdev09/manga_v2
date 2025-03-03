import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { router } from "./routes";
import MainLayout from "./layouts/Main/MainLayout";

// ✅ Component cuộn lên đầu khi thay đổi trang
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Thêm vào để tránh lỗi */}
      <Routes>
        {router.map((item, index) => {
          let Layout = item.layout === null ? Fragment : MainLayout;
          const Page = item.component;

          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
