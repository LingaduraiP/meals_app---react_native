import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SubTitle = ({title}) => {
  return (
    <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{title}</Text>
  </View>
  )
}

export default SubTitle
const styles=StyleSheet.create({
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#4f4d4d",
      },
      subTitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        color: "#4f4d4d",
        borderBottomColor: "#4f4d4d",
        borderBottomWidth: 2,
      },
})