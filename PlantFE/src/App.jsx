import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { AuthProvider } from "./context/AuthContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(Router);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
