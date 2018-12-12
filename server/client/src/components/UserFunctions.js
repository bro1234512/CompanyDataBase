import axios from 'axios'

export const register = newUser => {
    return axios
        .post('usersMongo/singup', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("registered!")
            return res;
        })
}
export const login = user => {
    return axios
        .post('usersMongo/singin', {
            email: user.email,
            password: user.password
        })
        .then(res => {
           localStorage.setItem('usertoken',res.data)
            return res.data
        })
}
