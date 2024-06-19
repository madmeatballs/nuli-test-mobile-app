import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';
import { ArrowRight } from './icons/arrow-right';

const StartWorkoutButton: React.FC = () => {
  return (
    <LinearGradient
      colors={[
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0.7)',
        'rgba(255, 255, 255, 1)',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <Pressable style={styles.btn}>
        <Text style={styles.text}>START WORKOUT</Text>
        <ArrowRight width={14} height={14} />
      </Pressable>
    </LinearGradient>
  );
};

export default StartWorkoutButton;

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 104,
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 30,
    paddingBottom: 34,
  },
  btn: {
    borderRadius: 40,
    height: 56,
    paddingHorizontal: 30,
    paddingVertical: 18,
    gap: 18,
    backgroundColor: 'rgba(38, 44, 69, 1)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'WorkSansBold',
    fontSize: 15,
    lineHeight: 17.6,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 1)',
  },
});
