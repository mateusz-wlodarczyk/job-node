import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Register, { action as actionRegister } from "./pages/Register";
import Login, { action as actionLogin } from "./pages/Login";
import DashboardLayout, {
  loader as loaderDashboardLayout,
} from "./pages/DashboardLayout";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import AddJob, { action as actionJobAdd } from "./pages/AddJob";
import EditJob, {
  action as actionEditJob,
  loader as loaderEditJob,
} from "./pages/EditJob";
import Stats, { loader as loaderStats } from "./pages/Stats";
import AllJobs, { loader as loaderAllJobs } from "./pages/AllJobs";
import Profile, { action as actionProfile } from "./pages/Profile";
import Admin, { loader as loaderAdmin } from "./pages/Admin";
import { action as actionDeleteJob } from "./pages/DeleteJob";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorElement from "./components/ErrorElement";
checkDefaultTheme();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "register",
        element: <Register />,
        action: actionRegister,
      },
      { path: "login", element: <Login />, action: actionLogin(queryClient) },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: loaderDashboardLayout(queryClient),
        children: [
          {
            index: true,
            element: <AddJob />,
            action: actionJobAdd(queryClient),
          },
          {
            path: "stats",
            element: <Stats />,
            loader: loaderStats(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: loaderAllJobs(queryClient),
            ErrorElement: <ErrorElement />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: actionProfile(queryClient),
          },
          { path: "admin", element: <Admin />, loader: loaderAdmin },
          { path: "delete-job/:id", action: actionDeleteJob(queryClient) },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            action: actionEditJob(queryClient),
            loader: loaderEditJob(queryClient),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
