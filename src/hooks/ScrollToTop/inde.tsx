import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Lấy đường dẫn hiện tại

  useEffect(() => {
    window.scrollTo({ top: 0 }); // Cuộn mượt lên đầu
  }, [pathname]);

  return null; // Không render gì cả
};

export default ScrollToTop;
