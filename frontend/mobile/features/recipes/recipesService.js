import axios from 'axios'

const API_URL = 'http://172.20.10.2:3000/api/posts/'



// get posts
const getAllRecipes = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
const getOneRecipe = async (id) => {
  console.log(id,"fdirst")
  const response = await axios.get(API_URL + `${id}`)
  // const response = await axios.get('http://172.20.10.2:3000/api/posts/6431ef1d30bfa408a24e02d6dkklaz')
  console.log(response.data,'aaaaaaaaa a')                      
  return response.data
}
const recipesService = { getAllRecipes, getOneRecipe }


export default recipesService; 