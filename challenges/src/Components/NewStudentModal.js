import React, { useState,useEffect } from "react";
import {Form,Button} from 'react-bootstrap'
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';


function NewStudentForm (){
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [document, setDocument] = useState("");
      const [phone, setPhone] = useState("");
      let navigate = useNavigate();
      
      let { id } = useParams();
      useEffect(() => {
        if(id){
            axios.get(`http://127.0.0.1:8000/api/students/${id}`)
            .then((response) => {
                  console.log(response.data);
                  setName(response.data.name)
                  setEmail(response.data.email)
                  setDocument(response.data.document)
                  setPhone(response.data.phone)
     });
         }
     
      },[id]);

      const onSubmit = (e) => {
        e.preventDefault();
        let item = { name, email, document,phone,id };
        if(!id){
            axios.post('http://127.0.0.1:8000/api/students/',item);
            navigate("/");
        }
        else{
            axios.put(`http://127.0.0.1:8000/api/students/${id}`,item);
            navigate("/");
        }
        
        
      };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Form>
            <h3 className="mt-5">Add New Student!</h3>
            <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control  type="text"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control  type="email"
            name="email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Control  type="hidden"
            name="id"
            value={id} 
             />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Document:</Form.Label>
          <Form.Control  type="text"
            name="document"
            value={document}
            onChange={(e)=>setDocument(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone:</Form.Label>
          <Form.Control  type="text"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)} />
        </Form.Group>
     
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Send
        </Button>
      </Form>
      </div>
    );
};

export default NewStudentForm;