import { View, Text,TouchableOpacity,Dimensions,Image } from 'react-native'
import { SPACING, colors, DATA } from '../Restaurant'
// import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons';
const ITEM_WIDTH = width / 2 - SPACING * 3;
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
const PostCard = ({ data }) => {
    // localhost:3000/api/likes/6433257ffa19c1f5185f149d
    const navigation = useNavigation();
    const id = data._id
    const item = data
    console.log(item.image)
    const like = async (id) => {
        console.log(id,"first")
        return await axios.post('http://172.20.10.2:3000/api/likes/' + `${id}`).then((data)=>console.log(data))
        // return response
    }

    // useEffect(() => {
    //     like(id)
    // })
    return (
        <TouchableOpacity
            style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
            onPress={() =>
                navigation.navigate('Details', {
                    itemId: item._id,
                    data: item
                })
            }
            key={item._id}
        >
            <Image
                style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                source={require('../assets/restaurant/pexels-momo-king-5409015.jpeg')}

                // source={item.image}

                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                }}
            >
                {item.title}
              {/* {item.image} */}
                {/* name:{item._id} */}
            </Text>
            <Text
                style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  Categorie: {item.category}
                </Text>
                <View style={{ flexDirection:'row',justifyContent:'space-evenly' }}>
                  <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>

                    {item.likes ?
                      // {item.likedByUser ?

                      <AntDesign name="heart" size={24} color="black" />
                      :
                      <AntDesign name="hearto" size={24} color="black" />
                    }
                  </Text>
                  <Text style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}>{item.likes}
                  </Text>
                </View>
              </TouchableOpacity>
  )
}

export default PostCard