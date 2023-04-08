import axios from 'axios'

const API_URL = 'http://192.168.100.31:3000/api/posts'



// get posts
const getAllRecipes = async () => {
  const response = await axios.get(API_URL)
  return response.data 
}  
 
const recipesService = {getAllRecipes}


export default recipesService; 