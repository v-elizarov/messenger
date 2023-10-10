import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/error-boundary';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from './pages/chat-page';
import LoginPage from './pages/login-page';
import RegistrationPage from './pages/registration-page';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<ChatPage/>} exact/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="registration" element={<RegistrationPage/>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
