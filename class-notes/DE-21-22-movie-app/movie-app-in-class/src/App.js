import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider name="felix">
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
