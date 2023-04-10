import axios from 'axios'

const API_URL = 'http://localhost:3000/api/posts/'



// get posts
const getAllRecipes = async () => {
  const response = await axios.get(API_URL)

  console.log(response.data);
  return response.data
}
const getOneRecipe = async (id) => {
  console.log(id,"fdirst")
  const response = await axios.get(API_URL + `${id}`)
  console.log(response.data,'aaaaaaaaa a')                      
  return response.data
}
const recipesService = { getAllRecipes, getOneRecipe }


export default recipesService; 