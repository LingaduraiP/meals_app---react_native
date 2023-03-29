import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverView({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId)
      .title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId,navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProp = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProp} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
