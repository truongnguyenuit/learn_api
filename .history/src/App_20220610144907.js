
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import HomePages from "./pages/HomePages.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Wrapper() {

  return (
    <>
      <h1>day la wraper</h1>
      <Outlet />
    </>
  )
}
export default App;
