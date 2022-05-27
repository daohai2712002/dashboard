import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Row, Col, Form,Button } from 'react-bootstrap';
import {displayProduct} from '../../utils/productAPI';
import Table from 'react-bootstrap/Table';
import "./data.css";

const ProductTable = () => {
  const [products, setProducts] = useState()

    useEffect(() => {
        displayProduct({setProducts})
    }, [])

   
  return (
    <>
    
    <div className="content-container">
        <Row className="mt-5">
            <h1 className="main-content-title">List Products</h1>
        </Row>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>Name</th>
                    <td>Image</td>
                    <th>Price</th>
                    <th>Bath</th>
                    <th>Bed</th>
                    <th>Square</th>
                    <th>Rating</th>
                    <th>Description</th>
                    <th>tool</th>
                    </tr>
                </thead>
                <tbody>
                {products && products.map((obj) =>
                       
                       <tr className="tableUser" key={obj._id}>
                           
                           <td>{obj.name}</td>
                           <td><img className="avatar" src={obj.productImage} /></td>
                           <td>{obj.price}</td>
                           <td>{obj.bath}</td>
                           <td>{obj.bed}</td>
                           <td>{obj.square}</td>
                           <td>{obj.rating}</td>
                           <td>{obj.description}</td>
                           <td>
                            <Link to={`/users/${obj._id}`} style={{ textDecoration: "none" }}>
                                <Button variant="primary">View</Button>{' '}
                            </Link>
                               
                               <Button variant="danger">Delete</Button>
                               </td>
                       </tr>
                   )}
           
                    
                </tbody>
                </Table>
       

    </div>


</>
  )
}
  

export default ProductTable;
