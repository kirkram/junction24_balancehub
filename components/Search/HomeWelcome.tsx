import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors.ts';

const HomeWelcome = ({ colorr }: { colorr: string }) => {
  const username = "GlassDoor 4.8/5"; 
  const username1 = "Facebook 4.7/5";
  const username2 = "Google review 4.8/5";
  const username4 = "Our App well-being rating 4.6/5";
  const username3 = "Summary 4.7/5";
  const backgroundImageUrl = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/fajgFYnlYHU8HDcmxnsfyhZcYopLgZV4/-GMYIG7gJXH7oghWCwTODUO4AjUyqltv/g8UbHMYZWMCr344wCq19kcYmlBHUX8JP/j1g-fyZheZs.png"; // background image link
  const imageUrl1 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/DB2YG6lT7aRiVpLDKu-bXuNiMMGaqGfw/D_5Zob4SSiu0G0W5V9c6ObIFYbaA7g7v/xrXyvyWQFagY7CJuRcdRu6xI6bJVVl2s/DU4lbE1-iMo.png";
  const imageUrl2 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/z4ra9avuCbZyB5qPvxuG_w7x-0Aus2Xp/2rq8eDBNB7094TWrUWm5E5abH1IIiEDy/yL0hLaSO9jXGU7imRHWfZOjLrUmyHd40/qNwIYUSQRsM.png";
  const imageUrl3 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/0DFWebBiLnuaZUORArAECJAR0xDQ0ZKd/8cmexTXF7ZnNWybBtuvIeW-QnG4sd4hx/_tUqyNa8Y2PxH3Wh_lbdv_3cS6TBvgJ_/SuxKooQXLv8.png";
  

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={[styles.header, { backgroundColor: colorr }]}>
      <LinearGradient
        colors={[Colors.ss.gradient1, Colors.ss.gradient2, 'transparent']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}>
        <Text style={styles.welcomeText}>This company rating:</Text>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.username1}>{username1}</Text>
        <Text style={styles.username2}>{username2}</Text>
        <Text style={styles.username3}>{username3}</Text>
        <Text style={styles.username4}>{username4}</Text>
        <Image source={{ uri: imageUrl1 }} style={styles.image1} />
        <Image source={{ uri: imageUrl2 }} style={styles.image2} />
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
  welcomeText: {
    fontSize: 18,
    color: Colors.ss.font,
    fontWeight: 'normal',
    position: 'absolute',
    fontWeight: 'bold',
    top: 10,
    left: 10,
    marginTop: 50
  },
  username: {
    fontSize: 12,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 100, // Adjusted position
    left: 10,
  },
  username1: {
    fontSize: 12,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 140, // Adjusted position
    left: 10,
  },
  username2: {
    fontSize: 12,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 180, // Adjusted position
    left: 10,
  },
  username3: {
    fontSize: 13,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 220, // Adjusted position
    left: 10,
  },
  username4: {
    fontSize: 17,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 120, // Adjusted position
    left: 150,
    width: 200,
    flexWrap: 'wrap',
    backgroundColor: 'green',
  },
  
  image1: {
    width: 90,
    height: 22,
    borderRadius: 20,
    position: 'absolute',
    top: 30,
    right: 255,
  },
  image2: {
    width: 92,
    height: 25,
    borderRadius: 25,
    position: 'absolute',
    top: 30,
    right: 155,
  },
  image3: {
    width: 106,
    height: 25,
    borderRadius: 25,
    position: 'absolute',
    top: 30,
    right: 40,
  },
});

export default HomeWelcome;