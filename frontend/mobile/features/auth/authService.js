import axios from 'axios'

const API_URL = 'http://192.168.10.136:3000/api/users'

// Register user
const register = async (userData) => {
    console.log(userData,"data from register")

    const response = await axios.post(API_URL, userData)
    console.log(response.data,'response')
    
  if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
    console.log(userData,"login")
    const response = await axios.post(API_URL + '/login', userData)
    console.log(response.data,'response')

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}  

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService