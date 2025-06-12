import { createBrowserRouter, RouteObject } from "react-router-dom";
import routesConstants from "@lib/constants/routeConstants";
import LayoutContainer from "@components/templates/LayoutContainer";
import Home from "@pages/HomePage";
import LegalLayout from "@components/templates/LegalLayout";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";

const routes: RouteObject[] = [
  {
    path: routesConstants.ROOT,
    element: <LayoutContainer />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/legal",
    element: <LegalLayout />,
    children: [
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
