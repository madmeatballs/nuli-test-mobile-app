import { View, Text, StyleSheet } from 'react-native';
import WorkoutInfoCard from './WorkoutInfoCard';
import { MuscleGroupWoman } from './icons/muscle-group-woman';

const WorkoutBodyFocus: React.FC = () => {
  return (
    <WorkoutInfoCard bgColor="rgba(255, 243, 224, 1)" style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.bodyFocusText}>Body Focus</Text>
          <Text style={styles.fullBodyText}>FULL BODY</Text>
        </View>
      </View>
      <MuscleGroupWoman />
    </WorkoutInfoCard>
  );
};
export default WorkoutBodyFocus;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 25,
    paddingRight: 10,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300.85,
  },
  contentWrapper: {
    height: 135,
    width: 89,
  },
  textContainer: {
    justifyContent: 'space-between',
    height: 100,
    gap: 25,
  },
  bodyFocusText: {
    fontFamily: 'WorkSansSemibold',
    fontSize: 24,
    lineHeight: 28.8,
    color: 'rgba(38, 44, 69, 1)',
  },
  fullBodyText: {
    fontFamily: 'OpenSansRegular',
    fontSize: 13,
    lineHeight: 16.9,
    color: 'rgba(38, 44, 69, 1)',
  },
});
