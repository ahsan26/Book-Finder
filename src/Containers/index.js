import React from "react";
import Loadable from "react-loadable";
import Loading from "../Components/loading";

const DashboardContainer = Loadable({
    loader: _ => import("../Components/dashboard"),
    loading: _ => <Loading />
});

const LogInContainer = Loadable({
    loader: _ => import("../Components/login"),
    loading: _ => <Loading />
});

const SignUpContainer = Loadable({
    loader: _ => import("../Components/signUp"),
    loading: _ => <Loading />
});

export { DashboardContainer, LogInContainer, SignUpContainer };