import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Row, Col, Form,Button } from 'react-bootstrap';
import { displayUser,deleteUser } from "../../utils/userAPI";
import Table from 'react-bootstrap/Table';
import "./data.css";
import axios from "axios";
const Datatable = () => {
  const [products, setProducts] = useState()
  const [data,setDelete]= useState()
    useEffect(() => {
        displayUser({setProducts})
    }, [])
  
    const deleteRow = (id, e)=>{  
      axios.delete(`https://localhost:3000/users/${id}`)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
          console.log(id);
          const posts = this.state.posts.filter(item => item.id !== id);  
          this.setState({ posts });  
        })  
      
    }  
   
  return (
    <>
    
    <div className="content-container">
        <Row className="mt-5">
            <h1 className="main-content-title">Danh sách phòng trọ</h1>
        </Row>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>Name</th>
                    <td>Avatar</td>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Tool</th>
                    </tr>
                </thead>
                <tbody>
                {products && products.map((obj) =>
                       
                       <tr className="tableUser" key={obj._id}>
                           
                           <td>{obj.name}</td>
                           <td><img className="avatar" src={obj.avatar} /></td>
                           <td>{obj.email}</td>
                           <td>{obj.phone}</td>
                           <td>
                            <Link to={`/users/${obj._id}`} style={{ textDecoration: "none" }}>
                                <Button variant="primary">View</Button>{' '}
                            </Link>
                               
                               <Button variant="danger" onClick={(e) => deleteRow(obj._id, e)}>Delete</Button>
                               </td>
                       </tr>
                   )}
           
                    
                </tbody>
                </Table>
       

    </div>


</>
  )
}
  

export default Datatable;
