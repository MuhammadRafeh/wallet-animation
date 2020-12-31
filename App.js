import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Animated } from 'react-native';
import Card, { cardHeight, cardTitle } from './Card.js';

const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF"
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF"
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF"
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF"
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF"
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF"
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF"
  }
];

class App extends React.Component {
  state = {
    y: new Animated.Value(0)
  }

  render() {

    const { y } = this.state;

    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <View style={StyleSheet.absoluteFill}>
            {
              cards.map((card, i) => {
                const translateY = y.interpolate({
                  inputRange: [-cardHeight, 0],
                  outputRange: [cardHeight * i, (cardHeight - cardTitle) * -i]
                })
                return (
                  <Animated.View key={card.name} style={{transform: [{ translateY }]}}>
                    <Card
                      {...card}
                    />
                  </Animated.View>
                )
              })
            }
          </View>
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y: this.state.y }
                }
            }], { useNativeDriver: true })}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  root: {
    flex: 1,
    margin: 16
  }
});
