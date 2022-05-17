import React from "react";
import {Button} from 'react-bootstrap'
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom'


function ConfirmRemovaModal (){
    let navigate = useNavigate();
    let { id } = useParams();
    const handleDelete=()=>{
        console.log(id);
        axios.delete(`http://127.0.0.1:8000/api/students/${id}`);
        navigate("/");
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginTop:"50px"}}>
            Are You sure to delete this student ?
            <Button variant="danger"  className="mx-2" onClick={handleDelete}>Confirm
        </Button><Button variant="warning" href={"/"}>
          Cancel
        </Button>
      </div>
    );
};

export default ConfirmRemovaModal;