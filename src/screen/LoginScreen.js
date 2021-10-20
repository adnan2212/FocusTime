import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import LoginForm from '../components/loginForm/LoginForm';

const logo = 'https://lh3.googleusercontent.com/TxeH7IIuLuIOvGpPpoXVrOrzfeNzyMIsP7q50_tXXmA-Fa0oc4SuxiWVqRYM7xgsoNU';

const LoginScreen = ({ navigation }) => (
        <View style={styles.container}>
            <View style={styles.logoCotainer}>
                <Image source={{uri: logo, height: 100, width: 100}}/>
            </View>
            <LoginForm navigation={navigation} />
        </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoCotainer: {
        alignItems: 'center',
        marginTop:60,
    }
})

export default LoginScreen;
