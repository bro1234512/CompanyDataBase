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

export const addCar = newCar => {
    return axios
        .post('car/addCarToDatabase', {
            registrationNumber: newCar.registrationNumber,
            mark: newCar.mark,
            model: newCar.model,
            ageGroup: newCar.ageGroup,
            carReviewTerm: newCar.carReviewTerm
        })
        .then(res => {
            console.log("car added")
            return res;
        })
}

export const addDriver = newDriver => {
    return axios
        .post('driver/addDriverToDatabase', {
            name: newDriver.name,
            surname: newDriver.surname,
            birthdayDate: newDriver.birthdayDate,
            carLicenseTerm: newDriver.carLicenseTerm,
            email: newDriver.email
        })
        .then(res => {
            console.log("driver added")
            return res;
        })
}

export const showCars = () => {
    return axios
        .get('car/showCars', {

        })
        .then(res => {

            return res.data;
        })
}
export const showDrivers = () => {
    return axios
        .get('driver/showDrivers', {

        })
        .then(res => {

            return res.data;
        })
}
export const findDriver = driver => {
    return axios
        .post('driver/findDriver', {
            surname: driver.surname
        })
        .then(res => {
            return res.data
        })
}

export const deleteDriver = driver => {
    return axios
        .post('driver/deleteDriver', {
            surname: driver.surname
        })
        .then(res => {
            return res.data
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
export const logChange = log => {
    return localStorage.removeItem('usertoken');
}
