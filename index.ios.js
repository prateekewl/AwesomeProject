import React, {Component} from 'react';
import {
  Text,
  AppRegistry,
  StyleSheet,
  View,
  StatusBar
  } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import {fetchWeather} from './weatherAPI'
class App extends Component {

  componentWillMount(){
    this.state = {
      temp: 0,
      weather: 'Clear'
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (posData)  =>  fetchWeather(posData.coords.latitude,posData.coords.longtitude)
      .then(res => this.setState({
        temp:res.temp,
        weather:res.weather
      })),
      (error) => alert(error),
      {timeout: 10000}
    )
  }

  render() {
    console.log('component is rendering')
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
          <Icon name ={'ios-sunny'} size={80} color={'white'}/>
          <Text style={styles.temp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            Building <Text style={{color: 'red'}}>Prateek's</Text> Weather App</Text>
          <Text style={styles.subtitle}> Let's make it rain</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFD017'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around', 
    flex:1, 
    // backgroundColor:'blue'
  },
  temp:{
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white',
  },
  body: {
    alignItems: 'flex-start', 
    justifyContent: 'flex-end', 
    flex:5 , 
    // backgroundColor:'red',
    margin: 10
  },
  title:{
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 78,
    color: 'white',
    marginBottom:5
  },
  subtitle:{
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 16,
    color: 'white',
  },
})

AppRegistry.registerComponent('AwesomeProject', () => App)