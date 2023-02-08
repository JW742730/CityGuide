import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import data from "./places.json";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const locationIcon = require('./assets/chicago.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>City Guide</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
          <Image source={locationIcon} style={styles.icon}/>
            </View>
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.modifiedURL}>{item.modifiedURL}</Text>
          </View>
        </View>
        )}
      />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },

  title: {
    backgroundColor: "#1c7da5",
    color: "#ede2e0",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    paddingTop: 40,
    textAlign: "center"
  },

  row: {
    borderBottomColor: "#7b7983", 
    borderBottomWidth: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },

  icon: {
    height: 45,
    width: 45,
  },
  
  iconContainer: {
    backgroundColor: "#1f3234",
    borderColor: "#1f3234",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
  },

  name: {
    color: "#122737",
    fontSize: 18,
    fontWeight: "bold",
  },

  address: {
    color: "#3c4f62",
    fontSize: 16
  },

  modifiedURL: {
    color: "#3c4f62",
    fontSize: 16,
    fontStyle: 'italic'
  },
  
  info: {
    paddingLeft: 25,
    paddingRight: 25,
    
  }

});
