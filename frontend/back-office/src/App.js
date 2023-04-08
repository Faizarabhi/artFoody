import { Home, Login, List, Single, New } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Layout from './layoute/Layout';
// import { AuthContext } from './context/auth/AuthContext';
// import { useAuth } from './context/auth/useAuth';
function App() {
  // const { user, login, logout } = useAuth();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        {/* <AuthContext.Provider value={{ user: user, setUser: login }}> */}
          <Routes>
            <Route path="/">
              <Route index element={<Layout><Home /></Layout>} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<Layout><List title="user" /></Layout>} />
                <Route path=":userId" element={<Layout><Single /></Layout>} />
                <Route path="new" element={<Layout><New inputs={userInputs} title="Add New User" /></Layout>} />
              </Route>
              <Route path="posts">
                <Route index element={<Layout><List title="post" /></Layout>} />
                <Route path=":posttId" element={<Single />} />
                <Route
                  path="new"
                  element={<Layout><New inputs={productInputs} title="Add New Post" /></Layout>}
                />
              </Route>
            </Route>
          </Routes>
        {/* </AuthContext.Provider> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
