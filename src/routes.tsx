import { lazy } from "react";

const Header = lazy((): any => import("./components/shared/Layout/Header"));
const SigIn = lazy((): any => import("./pages/SignIn"));
const FirstEmployee = lazy(
  (): any => import("./components/shared/Layout/FirstEmployee")
);
const SecondEmployee = lazy((): any => import("./pages/SecondEmployee"));

// const routes = [
//     // { path: "*", exact: true, component: Header },
//     { path: "/first-employee", exact: true, component: FirstEmployee },
//     { path: "/sign-in", exact: true, component: SigIn },
// ]

const routes: any = [
  {
    element: <SigIn />,
    path: "/sign-in",
  },
  {
    element: <FirstEmployee />,
    path: "/first-employee",
  },
  {
    element: <SecondEmployee />,
    path: "/second-employee",
  },
];
export default routes;
