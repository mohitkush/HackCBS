import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image } from "react-native";

const HomeScreen = props => {
    return (
        <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.background}
      >
        <View style={{justifyContent: 'center'}}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.divider}></View>
            <Text style={styles.title}>
              Explore <Text style={{ fontWeight: '500', color: 'red'}}>your Mental Health</Text>
            </Text>
            <View style={styles.divider}></View>
          </View>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          >
          </Image>
          <Text style={styles.text}>Do you want to take your mental health assessment?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Questions')}
          >
            <Text>Press Here</Text>
         </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 280,
      height: 200,
      marginLeft: 40,
      marginVertical: 20,
      borderRadius: 100
    },
    text: {
      color: 'white',
      fontSize: 20,
      marginHorizontal: 10,
      marginLeft: 30
    },
    heading: {
      // color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      color: 'black',
      marginTop: 43,
      fontWeight: 'bold',
      paddingHorizontal: 20
    },
    divider: {
      backgroundColor: 'red',
      flex: 1,
      height: 2,
      alignSelf: 'flex-start',
      marginTop: 58
    },
    button: {
      alignItems: "center",
      backgroundColor: "lightgreen",
      padding: 10,
      width: 130,
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 10
    },
});

export default HomeScreen;