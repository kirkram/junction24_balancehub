import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors.ts';

const HomeWelcome = ({ colorr }: { colorr: string }) => {
   const imageUrl3 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/NhJnu4dzLtIECk2pLsZO4gmbavGKvbAt/GMEF1eteUjgUj_ciKSjdUShER99jTleL/oltXTSQ4krvlfCLio11ZmVg6B50KM80Y/FY2RqxZbo-o.png";
  
  return (
    <ImageBackground source={{ uri: imageUrl3 }} style={[styles.header, { backgroundColor: colorr }]}>
      <LinearGradient
        colors={[Colors.ss.gradient1, Colors.ss.gradient2, 'transparent']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}>
            <Image source={{ uri: imageUrl3 }} style={styles.image3} />
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: 270, // Increased height to accommodate all text elements
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
  image3: {
    // width: 100%,
    // height: 100%,
    // borderRadius: 25,
    // position: 'absolute',
    top: 600,
    // right: 200,
  },
});

export default HomeWelcome;