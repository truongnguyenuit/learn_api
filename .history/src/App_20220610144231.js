
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route index element={<Home />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Wrapper (){

  return(
    <>
      <Outlet />
    </>
  )
}
export default App;
