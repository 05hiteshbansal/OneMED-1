import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* <Route element={<LoginPrivateRoute />}>
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/cart" element={<Cart />} />
        </Route> */}

        {/* <Route element={<AdminPrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route> */}

        {/* <Route path="*" element={"Error"} /> */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
