import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import balloonsImage from '../assets/images/balloons.png';
import leafImage from '../assets/images/leaf.png';
import counterBgImage from '../assets/images/counter-bg.png';

interface TrialBannerProps {
  daysRemaining: number;
}

const TrialBanner: React.FC<TrialBannerProps> = ({ daysRemaining = 0 }) => {
  const GRADIENT_COLORS: string[] = [
    'rgba(91, 22, 124, 1)',
    'rgba(109, 23, 156, 1)',
  ];

  return (
    <View style={styles.container}>
      <Image source={leafImage} style={styles.leafImage} resizeMode="cover" />
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient, styles.shadow]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.trialText}>
            Your <Text style={styles.trialHighlight}>7-day free trial</Text> is
            running. Enjoy and make the most of it!
          </Text>
        </View>
        <View style={styles.daysLeftContainer}>
          <Text style={[styles.numberText, styles.numberShadow]}>
            {daysRemaining}
          </Text>
          <Text style={styles.daysLeftText}>days left</Text>
        </View>
        <Image
          source={counterBgImage}
          style={styles.counterBgImage}
          resizeMode="cover"
        />
      </LinearGradient>
      <Image source={balloonsImage} style={styles.balloonImage} />
    </View>
  );
};

export default TrialBanner;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, flex: 1 },
  gradient: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(255,255,255,0.65)',
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 25,
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'rgba(91, 22, 124, 0.15)',
    shadowOffset: {
      width: 0,
      height: 13.8,
    },
    shadowOpacity: 1,
    shadowRadius: 27.6,
  },
  textContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trialText: {
    fontFamily: 'WorkSansRegular',
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 16.9,
  },
  trialHighlight: {
    fontFamily: 'WorkSansSemibold',
    color: 'rgba(255, 214, 131, 1)',
    fontSize: 13,
  },
  leafImage: {
    position: 'absolute',
    zIndex: 999,
    width: 40.88,
    height: 33.8,
    left: 1,
    bottom: -6,
  },
  daysLeftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 888,
  },
  counterBgImage: {
    zIndex: 1,
    width: 68.15,
    height: 70.97,
    position: 'absolute',
    right: 4,
  },
  balloonImage: {
    zIndex: 999,
    width: 62.91,
    height: 48.97,
    position: 'absolute',
    top: -8,
    right: 30,
  },
  numberText: {
    fontFamily: 'WorkSansBold',
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: 'rgba(255, 214, 131, 1)',
  },
  numberShadow: {
    shadowColor: 'rgba(255, 214, 131, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 14,
  },
  daysLeftText: {
    fontFamily: 'WorkSansRegular',
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 12,
  },
});
