import { lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import LoadingSpinner from "./Pages/LoadingSpinner";

const HomePage = lazy(() => import("./Pages/HomePage"));
const MailDetails = lazy(() => import("./Pages/MailDetails"));
const SentPage = lazy(() => import("./Pages/SentPage"));
const Protected = lazy(() => import("./Pages/Protected"));

function App() {
  return (
    <>
    <Suspense fallback={<div className="centered">
            <LoadingSpinner />
          </div>
        }>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/inbox" exact element={<Protected Component={HomePage} />}></Route>
        <Route
          path="/message"
          element={<Protected Component={MailDetails} />}
        ></Route>
        <Route
          path="/sent"
          element={<Protected Component={SentPage} />}
        ></Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
