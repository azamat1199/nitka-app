import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/shared";
import "./App.css";

import routes from "./routes";
import Header from "./components/shared/Layout/Header";

function App() {
  return (
    <div className="App flex">
      {/* <Layout> */}
      <Header />
      <main className="main h-screen	w-full	">
        <Suspense fallback={<>Loading ...</>}>
          <Routes>
            {/* {routes.map(({ path, exact, component }, key) => (
              <Route {...{ key, exact, path, component }} />
            ))} */}

            {routes.map((route: any, idx: number) => (
              <Route key={idx} {...route} />
            ))}
            {/* <Route path="/" element={<Navigate to="/sign-in" />} /> */}
          </Routes>
        </Suspense>
      </main>
      {/* </Layout> */}
    </div>
  );
}

export default App;
