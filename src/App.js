import { AppBar, Toolbar } from "@mui/material";

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
    </>
  );
}

export default App;
