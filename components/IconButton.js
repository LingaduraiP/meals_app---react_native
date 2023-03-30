import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({ onPress,icon, color }) => {
  return (
    <Pressable onPress={onPress} style={[{marginRight:20},({pressed})=>pressed&& styles.pressed]}>
      <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
  );
};


const styles=StyleSheet.create({

    pressed:{
        opacity:0.8
    }
})

export default IconButton;
