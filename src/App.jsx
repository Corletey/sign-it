import { RouterProvider, createBrowserRouter } from 'react-router-dom';import AuthLayout from "./layouts/authLayout";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Landing from "./pages/landing";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Landing />
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App