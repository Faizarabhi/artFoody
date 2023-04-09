import { View, Text,TouchableOpacity,Dimensions,Image } from 'react-native'
import { SPACING, colors, DATA } from '../Restaurant'

import React from 'react'
const { width } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons';
const ITEM_WIDTH = width / 2 - SPACING * 3;

const PostCard = ({data}) => {
    const item = data
    console.log(item    )
  return (
    <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details',{id:item._id})
                }
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item._id}
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                // source={require('../../../../uploads/1680731812041-anna-pelzer-IGfIGP5ONV0-unsplash.jpeg')}

                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}
                >
                  name:{item.title}
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