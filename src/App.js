import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppRouter } from "./router/AppRouter";

import "animate.css";
import "./styles/styles.scss";


export default function App(){
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};
