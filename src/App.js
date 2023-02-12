import { AppBar, Toolbar } from "@mui/material";
import { Routes, Navigate, Route, useLocation, NavLink } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Sub1Page from "./pages/Sub1Page";

function App() {
  const location = useLocation();
  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold">앱 이름</span>
          <div className="flex-1 flex justify-end">
            {/* 메인일때는 서브1 보이게. */}
            {location.pathname != "/sub1" && <NavLink to="/sub1">서브1</NavLink>}
            {/* 서브1일때는 메인 보이게. */}
            {location.pathname == "/sub1" && <NavLink to="/main">메인</NavLink>}
          </div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/main" element={<MainPage
        />}/>
        <Route path="/sub1" element={<Sub1Page
        />}/>
        <Route path="*" element={<Navigate to="/main"/>}/>
      </Routes>
    </>
  );
}

export default App;
