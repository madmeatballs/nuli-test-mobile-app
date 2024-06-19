import { View, Switch, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import ExerciseItem from './ExerciseItem';
import { useState, useEffect } from 'react';

const WarmUpExercise: React.FC = () => {
  const [warmUp, setWarmUp] = useState<boolean>(true);
  const animatedHeight = useSharedValue(warmUp ? 100 : 0);
  const animatedOpacity = useSharedValue(warmUp ? 1 : 0);

  const toggleWarmUp = () => setWarmUp((previousState) => !previousState);

  useEffect(() => {
    animatedHeight.value = withTiming(warmUp ? 400 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    animatedOpacity.value = withTiming(warmUp ? 1 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }, [animatedHeight, animatedOpacity, warmUp]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      opacity: animatedOpacity.value,
      overflow: 'hidden',
    };
  });

  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, warmUp && { gap: 30 }]}>
        <View style={styles.warmUpTitle}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Warm-Up</Text>
            <Text style={styles.warmUpDuration}>5 min • 3 Exercises</Text>
          </View>
          <Switch
            trackColor={{ true: 'rgba(38, 44, 69, 1)' }}
            onChange={toggleWarmUp}
            value={warmUp}
          />
        </View>
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          <View style={styles.supersetWrapper}>
            <Text style={styles.supersetBold}>
              SUPERSET <Text style={styles.supersetRegular}>•</Text> 2 ROUNDS
            </Text>
          </View>
          <View style={{ width: '100%' }}>
            {/* barbell */}
            <View style={styles.exerciseContainer}>
              <ExerciseItem />
              <ExerciseItem />
            </View>
            {/* separator for kinds of equipment??? */}
            <View style={styles.separatorContainer}>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderColor: 'white',
                  flexGrow: 1,
                }}
              />
            </View>
            {/* deadlift */}
            <View style={styles.exerciseContainer}>
              <ExerciseItem />
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default WarmUpExercise;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, flex: 1 },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    gap: 10,
    paddingHorizontal: 10,
    borderRadius: 38,
    backgroundColor: 'rgba(247, 235, 250, 1)',
  },
  warmUpTitle: {
    paddingHorizontal: 15,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWrapper: { gap: 12 },
  titleText: {
    fontFamily: 'WorkSansSemibold',
    fontSize: 24,
    lineHeight: 28.8,
    color: 'rgba(38, 44, 69, 1)',
  },
  warmUpDuration: {
    fontFamily: 'OpenSansRegular',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 1,
  },
  animatedContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  supersetWrapper: {
    paddingHorizontal: 45,
  },
  supersetBold: {
    fontFamily: 'WorkSansSemibold',
    fontSize: 14,
    lineHeight: 16.8,
    color: 'rgba(61, 65, 86, 0.45)',
    letterSpacing: 1,
  },
  supersetRegular: {
    fontFamily: 'WorkSansRegular',
    fontSize: 14,
    lineHeight: 16.8,
    color: 'rgba(61, 65, 86, 0.45)',
    letterSpacing: 1,
  },
  exerciseContainer: {
    padding: 6,
    gap: 12,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    width: '100%',
  },
  separatorContainer: {
    paddingHorizontal: 45,
    height: 32,
    // borderWidth: 1,
  },
});
