import { FC, Fragment, useEffect } from "react";
import SignIn from "../../../pages/SignIn";
import Header from "./Header";
import classes from "./Layout.module.scss";

export type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);
  return (
    <Fragment>
      <Header />
      {/* <SignIn /> */}
      <div className={classes.layout}>{children}</div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
