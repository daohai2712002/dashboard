import axios from "axios";
import { BASE_URL } from "./Common";

export const displayUser = ({setProducts}) => {

    axios({
        method: 'get',
        url: `${BASE_URL}/users/all`,
        headers: {'Content-Type': 'application/json'},
        
    }).then(response => {
        // console.log(response.data);
        setProducts(response.data);
    }).catch(error => {

    });
}
export const deleteUser = (setDelete) =>{
    axios({
        method: 'delete',
        url: `${BASE_URL}/users`,
        headers: {'Content-Type': 'application/json'},
        
    }).then(res => {
        const users = res.data;
         this.setState({ users });
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