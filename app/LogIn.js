import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '@/shared/header';
import axios from 'axios';

const LogIn = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
        try {
            const response = await axios.post('https://localhost:8000/api/user/login/', {
                username,
                password,
            });

            if (response.status === 200) {
                navigation.navigate('HomeScreen');
            } else {
                alert('Log In Failed', response.data.error);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while logging in');
        }
    };
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.logcontainer}>
            <Image source={require('../assets/images/yes.png')} style={styles.image}  />
            <View style={styles.rectangle}>
                <Text style={styles.title}>Log In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogIn}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.buttonText2}>Sign Up</Text>
                    </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '80%', // Adjust as needed
        height: 150, // Adjust as needed // Ensure the image doesn't stretch
        marginBottom: -15,
        marginTop: -100, // Space between image and rectangle
    },
    logcontainer: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        height: '70%',
    },
   
    rectangle: {
        justifyContent: 'center',
        width: '90%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        justifyContent: 'center',
        width: '90%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText2: {
        marginTop: 20,
        color: '#bbb',
        fontSize: 16,
    },
});

export default LogIn;