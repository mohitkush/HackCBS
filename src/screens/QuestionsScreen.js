import React, {useState} from "react";
// import Svg, {Rect} from 'react-native-svg';
// import * as tf from '@tensorflow/tfjs';
// import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { Text, StyleSheet, View, Button, Card,CardItem, Body, ImageBackground, TextInput,ScrollView, TouchableOpacity } from "react-native";

const QuestionsScreen = () => {

    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');
    
    var answers = [];

    let submit = () => {
        answers.push(ans1);
        answers.push(ans2);
        answers.push(ans3);
        answers.push(ans4);
        answers.push(ans5);
        console.log("Hello")
        // loadModel();
    }

    // async function loadModel(){
    //     console.log("[+] Application started")
    //     //Wait for tensorflow module to be ready
    //     const tfReady = await tf.ready();
    //     console.log("[+] Loading custom mask detection model")
    //     //Replce model.json and group1-shard.bin with your own custom model
    //     const modelJson = await require("../../assets/model/model.json");
    //     const modelWeight = await require("../../assets/model/group1-shard1of1.bin");
    //     const maskDetector = await tf.loadLayersModel(bundleResourceIO(modelJson,modelWeight));
    //     console.log("[+] Loading pre-trained face detection model")

    //     let result = await maskDetector.predict(answers);
    //     console.log(result);
    // }

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
      

    return (
        <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.background}
      >

        <ScrollView style={styles.container}>
            <View style={{ marginTop: 20}}> 
                <Text style={styles.question}>1. How do you feel about yourself?</Text>
                    <View style={styles.backgroundStyle}>
                        <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle} 
                        placeholder="Enter your Answer"
                        value = {ans1}
                        onChangeText = {(newText) => setAns1(newText)}
                        />
                    </View>
            </View>

            <View style={{ marginTop: 20}}> 
                <Text style={styles.question}>2. How bothered have you felt about tiredness or low energy over the past two weeks?</Text>
                    <View style={styles.backgroundStyle}>
                        <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle} 
                        placeholder="Enter your Answer"
                        value = {ans2}
                        onChangeText = {(newText) => setAns2(newText)}
                        />
                    </View>
            </View>

            <View style={{ marginTop: 20}}> 
                <Text style={styles.question}>3. How bothered have you felt about thoughts that you’ve let yourself or others down?</Text>
                    <View style={styles.backgroundStyle}>
                        <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle} 
                        placeholder="Enter your Answer"
                        value = {ans3}
                        onChangeText = {(newText) => setAns3(newText)}
                        />
                    </View>
            </View>

            <View style={{ marginTop: 20}}> 
                <Text style={styles.question}>4. How often have you felt fidgety or unable to sit peacefully?</Text>
                    <View style={styles.backgroundStyle}>
                        <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle} 
                        placeholder="Enter your Answer"
                        value = {ans4}
                        onChangeText = {(newText) => setAns4(newText)}
                        />
                    </View>
            </View>

            <View style={{ marginTop: 20}}> 
                <Text style={styles.question}>4. How often have you felt fidgety or unable to sit peacefully?</Text>
                    <View style={styles.backgroundStyle}>
                        <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle} 
                        placeholder="Enter your Answer"
                        value = {ans5}
                        onChangeText = {(newText) => setAns5(newText)}
                        />
                    </View>
            </View>
        </ScrollView>
        <TouchableOpacity
          style = {styles.add}
          onPress = {() => submit()}>
          <Text style={{textAlign:'center',fontSize: 25, color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    backgroundStyle: {
        backgroundColor: 'rgba(0,0,0,0.08)',
        height: 45,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderWidth: 1,
        marginLeft: 25
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        marginHorizontal: 20
    },
    question: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    add: {
        height: 40,
        width: 320,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center',
        elevation: 8,
        marginBottom: 15,
        alignSelf: 'center',
        marginTop: 5
    },
});

export default QuestionsScreen;