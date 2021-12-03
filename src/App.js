import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ExamPortal from "./Components/ExamPortal";
import Form from "./Components/Form";
import PrivateRoute from "./Components/PrivateRoute";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  useEffect(() => {
    localStorage.setItem("token", "");
  }, []);
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/ExamPortal" element={<ExamPortal />} />

          {/* <PrivateRoute path="/ExamPortal" component={ExamPortal} /> */}
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
