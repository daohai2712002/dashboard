import axios from "axios";
import { BASE_URL, getToken, removeUserSession, setTokenSession, setUserSession } from "./Common";

export const login = ({email, password, setError, history}) => {

    axios({
        method: 'post',
        url: `${BASE_URL}/users/login`,
        headers: {'Content-Type': 'application/json'},
        data: {
            email: email,
            password: password
        }
        
    }).then(response => {
        console.log(response.data);
        setTokenSession(response.data.accessToken)

        setUserSession({
            name:response.data.name,
            email:response.data.email,
            phone:response.data.phone,
            avatar:response.data.avatar,
            admin:response.data.admin,
        })
        history("/home")
    }).catch(error => {
        setError(error.message)
    });
    
    
    
}





// export const loginWithGG = (idToken, setError, history) => {
//     axios({
//         method: 'post',
//         url: `${BASE_URL}loginWithGG`,
//         headers: {'Content-Type': 'application/json'},
//         withCredentials: true,
//         data: {
//             id_token: idToken,
//         }
//     }).then(response => {
//         setUserSession(response.data['user'])
//         setTokenSession(response.data['token'])
//         history.push('/')
//     }).catch(error => {
//         if (error.response.status === 401 || error.response.status === 400) {
//             setError(error.response.data.message)
//         }
//     })
// }

export const getUserAuth = (setAuthLoading) => {
    axios({
      method: 'get',
      url: `${BASE_URL}user?token=${getToken()}`,
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      setUserSession(response.data)
      setAuthLoading(false)
    }).catch(error => {
      removeUserSession() 
      setAuthLoading(false)
    });
}

export const getUserById = (id, setUser) => {
    axios({
        method: 'get',
        url: `${BASE_URL}getUserById/${id}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setUser(response.data)
      })
}