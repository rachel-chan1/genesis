import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Feed: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <View style={styles.smallRectangle}>
                        <Image
                            source={require('@/assets/images/home/clothing1.jpg')}
                            style={styles.smallImage}
                        />
                    </View>
                    <View style={styles.bigRectangle}>
                        <Image
                            source={require('@/assets/images/home/clothing5.jpg')} // Replace with your image path
                            style={styles.bigImage}
                        />
                    </View>
                    <View style={styles.smallRectangle}>
                    <Image
                            source={require('@/assets/images/home/clothing3.jpg')} // Replace with your image path
                            style={styles.smallImage}
                        />
                    </View>
                    <View style={styles.bigRectangle}>
                        <Image
                            source={require('@/assets/images/home/clothing8.jpg')} // Replace with your image path
                            style={styles.bigImage}
                        />
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.bigRectangle}>
                        <Image
                            source={require('@/assets/images/home/clothing6.png')} // Replace with your image path
                            style={styles.bigImage}
                        />
                    </View>
                    <View style={styles.smallRectangle}>
                        <Image
                            source={require('@/assets/images/home/clothing2.jpg')} // Replace with your image path
                            style={styles.smallImage}
                        />
                    </View>
                    <View style={styles.bigRectangle}>
                    <Image
                            source={require('@/assets/images/home/clothing7.jpg')} // Replace with your image path
                            style={styles.bigImage}
                        />
                    </View>
                    <View style={styles.smallRectangle}>
                    <Image
                            source={require('@/assets/images/home/clothing4.jpg')} // Replace with your image path
                            style={styles.smallImage}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 25,
    },
    column: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    smallRectangle: {
        width: 165,
        height: 165,
        backgroundColor: '#A8B69F',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    bigRectangle: {
        width: 165,
        height: 265,
        backgroundColor: '#A8B69F',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    smallImage: {
        width: '91%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    bigImage: {
        width: '88%',
        height: '93%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
});

export default Feed;