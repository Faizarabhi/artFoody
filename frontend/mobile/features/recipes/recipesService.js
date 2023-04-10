import axios from 'axios'

const API_URL = 'http://172.20.10.2:3000/api/posts/'



// get posts
const getAllRecipes = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
const getOneRecipe = async (id) => {
  console.log(id, "fdirst")
  const response = await axios.get(API_URL + `${id}`)
  console.log(response.data, 'aaaaaaaaa a')
  return response.data
}
const like = async (id)=>{
  const response = await axios.post('http://172.20.10.2:3000/api/likes/' + `${id}`)
  return response.data
}
const recipesService = { getAllRecipes, getOneRecipe, like }


export default recipesService; 