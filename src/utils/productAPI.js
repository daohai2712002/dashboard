import axios from "axios";
import { BASE_URL } from "./Common";

export const displayProduct = ({setProducts}) => {

    axios({
        method: 'get',
        url: `${BASE_URL}/product/all`,
        headers: {'Content-Type': 'application/json'},
        
    }).then(response => {
        // console.log(response.data);
        setProducts(response.data);
    }).catch(error => {

    });
}

export const getUserId = ({id,setProductId}) =>{
    axios({
        method: 'get',
        url: `${BASE_URL}/users/${id}`,
        headers: {'Content-Type': 'application/json'},
        
    }).then(response => {
        console.log(response.data);
        setProductId(response.data);
    }).catch(error => {

    });
}