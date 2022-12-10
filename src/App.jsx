import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./Styles/globalStyles.js";
import RoutesComponent from "./Routes";

function App() {
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
      <RoutesComponent/>
    </div>
  );
}

export default App;
