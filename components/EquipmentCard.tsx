import { LinearGradient } from 'expo-linear-gradient';
import EquipmentInfo from './EquipmentInfo';
import WorkoutInfoCard from './WorkoutInfoCard';
import { DumbbellsBg } from './icons/dumbbells-bg';
import { StyleSheet } from 'react-native';

const EquipmentCard: React.FC = () => {
  const GRADIENT_COLORS: string[] = [
    'rgba(225, 240, 244, 0)',
    'rgba(225, 240, 244, 0.6)',
    'rgba(225, 240, 244, 1)',
  ];

  return (
    <WorkoutInfoCard bgColor="rgba(225, 239, 244, 1)">
      <EquipmentInfo />
      <DumbbellsBg style={styles.bgIcon} width={160} height={160} />
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
        pointerEvents="none"
      />
    </WorkoutInfoCard>
  );
};

export default EquipmentCard;

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 30,
  },
  bgIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
