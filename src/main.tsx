import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout } from "./ui/Pages/Layout/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </QueryClientProvider>
);
