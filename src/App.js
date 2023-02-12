import { AppBar, Toolbar } from "@mui/material";
import { Routes, Navigate, Route } from "react-router-dom";

function Sub1Page() {
  return (
    <>
    <h1>서브 페이지</h1>
    </>
  );
}

function MainPage() {
  return (
    <>
    <h1>메인 페이지</h1>
    </>
  );
}


function App() {
  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold">HAPPY NOTE</span>
          <div className="flex-1"></div>
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
