import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeHeadder = ({ colorr }: { colorr: string }) => {
  const username = "Heidi Kekkonnen"; 
  const backgroundImageUrl = "https://www.aava.fi/wp-content/smush-webp/2022/01/etusivu_hero.jpg.webp"; // background image link
  // const imageUrl = "https://www.aava.fi/wp-content/smush-webp/2022/01/etusivu_hero.jpg.webp"; // possible image link

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={[styles.header, { backgroundColor: colorr }]}>
      <LinearGradient
        colors={['rgba(0, 0, 255, 0.6)', 'rgba(0, 0, 255, 0.2)', 'transparent']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.username}>{username}</Text>
        {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    overflow: 'hidden',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'normal',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  username: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeHeadder;