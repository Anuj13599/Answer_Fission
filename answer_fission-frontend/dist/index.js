import React from"/node_modules/react.js";import ReactDOM from"/node_modules/react-dom.js";const _ref=document.createElement("link");_ref.rel="stylesheet",_ref.href="/styles/index.css",document.head.appendChild(_ref);import App from"/components/App.js";import reportWebVitals from"/reportWebVitals.js";import{Provider}from"/node_modules/react-redux.js";import configureStore from"/store/globalStore.js";ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(Provider,{store:configureStore()},React.createElement(App,null))),document.getElementById("root")),reportWebVitals();