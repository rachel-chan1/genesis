import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const TrendFeed = () => {
  const router = useRouter();

  const handleImagePress = () => {
    router.push('/ClothingDetails'); // Navigate to the ClothingDetails screen
  };

  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.column}>
                <View style={styles.smallRectangle}>
                    <Image
                        source={require('@/assets/images/red1.webp')}
                        style={styles.smallImage}
                    />
                </View>
                <View style={styles.bigRectangle}>
                    <Image
                        source={require('@/assets/images/red2.webp')} // Replace with your image path
                        style={styles.bigImage}
                    />
                </View>
                <View style={styles.smallRectangle}>
                <Image
                        source={require('@/assets/images/red3.webp')} // Replace with your image path
                        style={styles.smallImage}
                    />
                </View>
                <View style={styles.bigRectangle}>
                    <Image
                        source={require('@/assets/images/red4.jpeg')} // Replace with your image path
                        style={styles.bigImage}
                    />
                </View>
            </View>
            <View style={styles.column}>
        <View style={styles.bigRectangle}>
          <Image
            source={require('@/assets/images/red8.jpg')}
            style={styles.bigImage}
          />
        </View>
                <View style={styles.smallRectangle}>
                    <Image
                        source={require('@/assets/images/red5.webp')} // Replace with your image path
                        style={styles.smallImage}
                    />
                </View>
                <View style={styles.bigRectangle}>
                <Image
                        source={require('@/assets/images/red7.jpg')} // Replace with your image path
                        style={styles.bigImage}
                    />
                </View>
                <View style={styles.smallRectangle}>
                <Image
                        source={require('@/assets/images/red6.jpeg')} // Replace with your image path
                        style={styles.smallImage}
                    />
                </View>
            </View>
        </View>
        <View style={{ height: 15}} />
    </View>
);
};

export default TrendFeed;

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