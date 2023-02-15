import { AppBar, Toolbar } from "@mui/material";
import {
  Routes,
  Navigate,
  Route,
  useLocation,
  NavLink,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import { NoticeSnackbar } from "./components/NoticeSnackbar";
import EditPage from "./pages/EditPage";

function App() {
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold select-none">앱 이름</span>
          <div className="flex-1 flex justify-end">
            {/* 메인일때는 서브1 보이게. */}
            {location.pathname != "/write" && (
              <NavLink to="/write" className="select-none">
                Add TODO
              </NavLink>
            )}
            {/* 서브1일때는 메인 보이게. */}
            {location.pathname == "/write" && (
              <NavLink to="/main" className="select-none">
                LIST
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <NoticeSnackbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;
