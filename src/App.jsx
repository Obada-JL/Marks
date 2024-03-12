import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/PageLayout";
import MainPage from "./components/Main";
import StartPage from "./components/StartPage";
import { AuthProvider } from "./AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: "/", element: <StartPage /> },
      { path: "/exam", element: <MainPage />, errorElement: <StartPage /> },
    ],
  },
]);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
