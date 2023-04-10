import React from 'react';
import { 
    Feather, 
    MaterialIcons, 
    Ionicons ,
    FontAwesome5,
    MaterialCommunityIcons,
    Entypo
} from '@expo/vector-icons'; 


export const Icons = {
    Feather,
    MaterialIcons,
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
    Entypo
}

const Icon = ({ type, name, color, size = 23, style }) => {
    const fontSize = 22;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

export default Icon