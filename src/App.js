import { AppBar, Toolbar } from "@mui/material";
import {
  Routes,
  Navigate,
  Route,
  useLocation,
  NavLink,
  useNavigate,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import { NoticeSnackbar } from "./components/NoticeSnackbar";
import EditPage from "./pages/EditPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold select-none">Ordinary Days</span>
          <div className="flex-1 flex justify-end">
            {location.pathname == "/main" && (
              <NavLink to="/write" className="select-none">
                Add TODO
              </NavLink>
            )}

            {location.pathname != "/main" && (
              <span
                to="/main"
                className="select-none"
                onClick={() => navigate(-1)}
              >
                LIST
              </span>
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
