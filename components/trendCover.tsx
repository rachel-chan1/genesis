import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrendCover: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
                <Text style={[styles.headerText, { marginTop: 5 }]}>Cherry</Text>
                <View style={styles.textRow}>
                    <Text style={styles.headerText}>Red</Text>
                    <Image
                        source={require('@/assets/images/home/chwee1.png')} // Replace with your image path
                        style={styles.cherry}
                    />
                </View>
                <Image
                    source={require('@/assets/images/home/model.png')} // Replace with your image path
                    style={styles.model}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rectangle: {
        width: 354,
        height: 213,
        backgroundColor: '#E4E5E0',
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start', // Align items to the left
        borderRadius: 20, // Add borderRadius to round the edges
        position: 'relative',
        padding: 20, // Add padding to give some space from the edges
        overflow: 'hidden',
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#481013',
        fontSize: 32,
        fontFamily: 'KaiseiOpti',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'KaiseiOpti',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    smallRectangle: {
        width: 130,
        height: 28,
        backgroundColor: '#481013',
        position: 'absolute',
        bottom: 20,
        left: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#3C080A', // Add shadow properties
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Add elevation for Android
    },
    cherry: {
        width: 76,
        height: 76,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    model: {
        width: 156,
        height: 203,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginTop: -130
    },
});

export default TrendCover;