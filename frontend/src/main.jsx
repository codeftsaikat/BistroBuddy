import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./providers/AuthProviders";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <HelmetProvider>
          <div className="mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProviders>
    </QueryClientProvider>
  </StrictMode>
);
