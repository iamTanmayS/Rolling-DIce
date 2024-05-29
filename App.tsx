import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { useState } from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'


type diceprops = PropsWithChildren<{
  imageUrl : ImageSourcePropType 
}>
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
}; 
 
const Dice = ({imageUrl}: diceprops ) : JSX.Element => {return(
  <View style={styles.diceContainer}>
    <Image style={styles.diceImage} source={imageUrl}  />
  </View>
) }


function App(): React.JSX.Element {
  
  const rollthedice = () =>{
    let randomnumber =( Math.floor(Math.random()*6)) + 1;
     
    
    switch (randomnumber) {
      case 1:
        setrandomdice(DiceOne)      
        break;
      case 2:
        setrandomdice(DiceTwo)
        
        break;
      case 3:
        setrandomdice(DiceThree)     
        break;
      case 4:
        setrandomdice(DiceFour)     
        break;
      case 5:
        setrandomdice(DiceFive)     
        break;
      case 6:
        setrandomdice(DiceSix) 
        break;
      default:
        setrandomdice(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  const [randomdice,setrandomdice] = useState<ImageSourcePropType>(DiceOne)
  
  return (
   <View style = {styles.container}>
   <View>
    <Dice imageUrl = {randomdice} />
   </View>
    <Pressable>
      <Text style = {styles.rollDiceBtnText} onPress = {rollthedice}>Roll the Dice</Text>
    </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
