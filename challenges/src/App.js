
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NewStudentForm from "./Components/NewStudentModal";
import ListDisplay from "./Components/ListDisplay";
import ConfirmRemovalModal from "./Components/ConfirmRemovalModal";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<ListDisplay />} />
      <Route path="add/" element={<NewStudentForm />} />
      <Route path="delete/:id" element={<ConfirmRemovalModal/>} />
      <Route path="update/:id" element={<NewStudentForm/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
