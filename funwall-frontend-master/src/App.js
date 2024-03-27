import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { HomePage } from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default App;
