import React from "react";
import {createStore, applyMiddleware} from "redux";
import {render} from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {App} from "./App";
import reducers from "./reducer/reducer";

const store = createStore(reducers, applyMiddleware(thunk));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)