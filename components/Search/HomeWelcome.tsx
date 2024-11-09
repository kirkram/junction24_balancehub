import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors.ts';

const HomeWelcome = ({ colorr }: { colorr: string }) => {
  const username = "Heidi Kekkonnen"; 
  const backgroundImageUrl = "https://www.aava.fi/wp-content/smush-webp/2022/01/etusivu_hero.jpg.webp"; // background image link
  // const imageUrl = "https://www.aava.fi/wp-content/smush-webp/2022/01/etusivu_hero.jpg.webp"; // possible image link

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={[styles.header, { backgroundColor: colorr }]}>
      <LinearGradient
        colors={[Colors.ss.gradient1, Colors.ss.gradient2, 'transparent']}
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
    flex: 1,
    width: '100%',
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    overflow: 'hidden',
    marginTop: -20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: Colors.ss.font,
    fontWeight: 'normal',
    position: 'absolute',
    top: 10,
    left: 10,
    marginTop: 75
  },
  username: {
    fontSize: 32,
    color: Colors.ss.font,
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

export default HomeWelcome;