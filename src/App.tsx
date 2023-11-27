import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import ErrorPage from "./routes/ErrorPage";
import ArchiveNotes from "./routes/ArchiveNotes/ArchiveNotes";
import { useAppSelector } from "./hooks/redux";
import AddNoteModal from "./components/Modal/AddNoteModal/AddNoteModal";
import TagModal from "./components/Modal/TagModal/TagModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TagNotes from "./routes/TagNotes/TagNotes";
import TrashCan from "./routes/TrashCan/TrashCan";

function App() {
  const { viewEditTagsModal, viewAddNoteModal } = useAppSelector(
    (state) => state.modal
  );

  return (
    <div className="App">
      {viewAddNoteModal && <AddNoteModal />}
      {viewEditTagsModal && <TagModal type={"edit"} />}

      <ToastContainer
        position="bottom-right"
        theme="colored"
        pauseOnHover
        autoClose={1500}
      />

      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Home />}></Route>
          <Route path="/archive" element={<ArchiveNotes />} />
          <Route path="/tags/:name" element={<TagNotes />} />
          <Route path="/trash" element={<TrashCan />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate to={"/404"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
