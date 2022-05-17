import {React,useEffect,useState} from "react";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";
function ListDisplay(){
    const [studentList,setStudentList]=useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/students/')
         .then((response) => {
               console.log(response.data);
               setStudentList(response.data)
  });
       
  },[setStudentList]);
    return(
        <>
         <div className="App mt-5" style={{textAlign:"center"}}>
      <div>
      <Button variant="primary">
      <Link to="/add" style={{color:"white",textDecoration:"None"}}>Add</Link>
        </Button> 
       {studentList.map((s,i)=>{
         return(
           <div key={i} className="mt-4">
          <p>{s.name}</p>
          <p>{s.email}</p>
          <p>{s.document}</p>
          <p>{s.phone}</p>
          <p>{s.pk}</p>
          <Button variant="danger" className="mx-2"><Link to={`/delete/${s.pk}`} style={{color:"white",textDecoration:"None"}}>Delete</Link>
        </Button>
        <Button variant="success"><Link to={`/update/${s.pk}`} style={{color:"white",textDecoration:"None"}}>Update</Link>
        </Button>
          </div>
         )
        
})}
      </div>
    </div></>
    )
}
export default ListDisplay;