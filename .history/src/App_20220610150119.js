
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import HomePages from "./pages/HomePages.jsx"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<HomePages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Wrapper() {
  console.log("day la wraper")
  return (
    <>
      {/* <h1>day la wraper</h1> */}
      <Outlet />
    </>
  )
}
export default App;
