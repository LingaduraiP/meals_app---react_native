import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "../components/details/List";
import SubTitle from "../components/details/SubTitle";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

const CategoryDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  console.log(selectedMeal);

  // const itemDetails=route.params.item
  // console.log('itemDetails',itemDetails)

  const headerButtonPressedHandler = ()=>{
    console.log('lingadurai')
  }



  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonPressedHandler} icon='star' color='white'/>;
      },
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <SubTitle title="Steps" />
          <List data={selectedMeal.ingredients} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    borderRadius: 10,
    height: 250,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
