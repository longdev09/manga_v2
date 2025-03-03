import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.ts";
import App from "./App.tsx";
import ScrollToTop from "./hooks/ScrollToTop/inde.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/*  Bọc Redux Provider */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
