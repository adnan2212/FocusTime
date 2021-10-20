import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { firebase } from './firebase'

const Settings = () => {
    const handleSignOut = async () => {
        try {
          await firebase.auth().signOut()
          console.log('Signed out successfully!')
        } catch(error){
          console.log(error)
        }
      }  
    return (
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleSignOut}
        >
            <Text style={styles.textButton}>Log out</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
  logoutButton: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  textButton: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});


export default Settings;
