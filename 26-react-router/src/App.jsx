import {BrowserRouter, Route, Routes} from "react-router";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="courses" element={<Courses />}/>
            <Route path="courses/:slug" element={<SingleCourse />}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
