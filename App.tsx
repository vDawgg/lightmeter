import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { setUpdateIntervalForType, SensorTypes, light } from 'react-native-sensors';

export default function App() {
  //All buttons should have auto as preference -> buttons which have specific values selected should 
  //trigger the real exposure calculation -> in non selective mode the desired number (most likely aperture
  //or shutterspeed) should be displayed on top (like a traditional digital lightmeter)

  //TODO: Button alignment not yet correct 

  const [selectedISO, setselectedISO] = useState();
  const [selectedAperture, setselectedAperture] = useState();
  const [selectedShutterspeed, setselectedShutterspeed] = useState();
  
  setUpdateIntervalForType(SensorTypes.light, 100);

  const subscription = light.subscribe( ({ lx }) => console.log(lx)) 


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{subscription}</Text>
        <StatusBar></StatusBar>
      </View>
          <View style={styles.container}>
          <Picker selectedValue={selectedISO} onValueChange={(itemValue, itemIndex) => setselectedISO(itemValue)}>
            <Picker.Item label="50" value="50"></Picker.Item>
            <Picker.Item label="100" value="100"></Picker.Item>
            <Picker.Item label="200" value="200"></Picker.Item>
            <Picker.Item label="400" value="400"></Picker.Item>
            <Picker.Item label="800" value="800"></Picker.Item>
            <Picker.Item label="1600" value="1600"></Picker.Item>
            <Picker.Item label="3200" value="3200"></Picker.Item>
            <Picker.Item label="6400" value="6400"></Picker.Item>
          </Picker>
          </View>
          <View style={styles.container}>
          <Picker selectedValue={selectedAperture} onValueChange={(itemValue, itemIndex) => setselectedAperture(itemValue)}>
            <Picker.Item label="Auto" value="Auto"></Picker.Item>
            <Picker.Item label="1.4" value="1.4"></Picker.Item>
            <Picker.Item label="1.8" value="1.8"></Picker.Item>
            <Picker.Item label="2.0" value="2.0"></Picker.Item>
            <Picker.Item label="2.8" value="2.8"></Picker.Item>
            <Picker.Item label="4.0" value="4.0"></Picker.Item>
            <Picker.Item label="5.6" value="5.6"></Picker.Item>
            <Picker.Item label="8.0" value="8.0"></Picker.Item>
            <Picker.Item label="11.0" value="11.0"></Picker.Item>
            <Picker.Item label="16.0" value="16.0"></Picker.Item>
            <Picker.Item label="22.0" value="22.0"></Picker.Item>
            <Picker.Item label="32.0" value="32.0"></Picker.Item>
          </Picker>
          </View>
          <View style={styles.container}>
          <Picker selectedValue={selectedShutterspeed} onValueChange={(itemValue, itemIndex) => setselectedShutterspeed(itemValue)}>
            <Picker.Item label="Auto" value="Auto"></Picker.Item>
            <Picker.Item label="1" value="1"></Picker.Item>
            <Picker.Item label="1/15" value="15"></Picker.Item>
            <Picker.Item label="1/30" value="30"></Picker.Item>
            <Picker.Item label="1/60" value="60"></Picker.Item>
            <Picker.Item label="1/125" value="125"></Picker.Item>
            <Picker.Item label="1/250" value="250"></Picker.Item>
            <Picker.Item label="1/500" value="500"></Picker.Item>
            <Picker.Item label="1/1000" value="1000"></Picker.Item>
            <Picker.Item label="1/2000" value="2000"></Picker.Item>
            <Picker.Item label="1/4000" value="4000"></Picker.Item>
          </Picker>
          </View>
        <Button title={"Measure"} onPress={() => alert("Now measuring")}></Button>
    </View>
  );

  function measure() {
    if(selectedAperture=='Auto'&&selectedShutterspeed=='Auto') {
      fullAuto();
    } 
    else if(selectedAperture=='Auto') {
      shutterPriority();
    } 
    else if(selectedShutterspeed=='Auto') {
      aperturePriority();
    }
  }

  function fullAuto() {
    
  }

  function shutterPriority() {

  }

  function aperturePriority() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Arial',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
