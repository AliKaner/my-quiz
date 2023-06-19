import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuizProvider } from "./context/quiz";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Score from "./pages/score";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/quiz",
    element: <Quiz/>,
  },
  {
    path: "/score",
    element: <Score/>,
  },
]);

const queryClient = new QueryClient();

ReactDOM.render(
  <QuizProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </QuizProvider>,
  document.getElementById("root")
);