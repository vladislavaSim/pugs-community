import React from "react";
import {createStore} from "redux";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {App} from "./App";
import reducers from "./reducer/reducer";

const store = createStore(reducers);
console.log(1)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)