import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import HomePage from "./Pages/Home";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./Styles/globalStyles.js";

function App() {
  const [user, setUser] = useState();
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route
          path="login"
          element={
            <LoginPage
              setUser={setUser}
              notifyError={notifyError}
              notifySuccess={notifySuccess}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              notifyError={notifyError}
              notifySuccess={notifySuccess}
            />
          }
        />
        <Route
          path="/home"
          element={<HomePage setUser={setUser} user={user} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
