import { useState } from 'react';
import './App.css';
import FormComp from './components/form/Form';
import Table from './components/table/Table';
import { addUser, deleteUser } from './redux/actions';
import {useDispatch} from "react-redux"
function App() {

const [ userData, setUserData ] = useState({
  
FirstName: "",
LastName: "",
Gender: "",
Semester: "",
Hobby: "",
})

const disptach = useDispatch();

  const handleSubmit = () =>{ 
        disptach(addUser(userData))
   }

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <FormComp 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
      />
      <Table />
    </div>
  );
}

export default App;
