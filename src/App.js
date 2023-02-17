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
          <NavLink
            to="/main"
            className="font-bold select-none self-stretch flex items-center mr-auto"
          >
            Ordinary Day's Plan
          </NavLink>

          {location.pathname == "/main" && (
            <NavLink
              to="/write"
              className="select-none self-stretch flex items-center"
            >
              Write
            </NavLink>
          )}

          {location.pathname != "/main" && (
            <span
              to="/main"
              className="select-none self-stretch flex items-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              List
            </span>
          )}
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
