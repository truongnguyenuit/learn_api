
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
i,port HomePagesfrom"./pages/Home
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="/u" element={<Home1 />} />
            <Route path="/y" element={<Home2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Wrapper (){

  return(
    <>
    <h1>day la wraper</h1>
      <Outlet />
    </>
  )
}
export default App;
