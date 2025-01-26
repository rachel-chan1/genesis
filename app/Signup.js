import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '@/shared/header';
import axios from 'axios';

const Signup = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await axios.post('https://localhost:8000/api/user/signup/', {
                username,
                password,
            });

            if (response.status === 201) {
                Alert.alert('Sign Up Successful', 'You can now log in');
                navigation.navigate('LogIn');
            } else {
                Alert.alert('Sign Up Failed', response.data.error);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while signing up');
        }
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.logcontainer}>
                <Image source={require('../assets/images/yes.png')} style={styles.image} />
                <View style={styles.rectangle}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#aaa"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText2}>Log In</Text>
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

export default Signup;