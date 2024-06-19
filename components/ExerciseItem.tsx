import { barbellLunge } from '@/assets/images';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { InfoIcon } from './icons/info-icon';
import { MoreBtn } from './icons/more-btn';

const ExerciseItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={barbellLunge} resizeMode="cover" />
        <Pressable style={styles.infoButton}>
          <InfoIcon width={14} height={14} />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Barbell Lunge (Left)</Text>
          <Text style={styles.subtitle}>2 sets x 6-8 reps</Text>
        </View>
        <Pressable style={styles.moreButton}>
          <MoreBtn width={26} height={26} />
        </Pressable>
      </View>
    </View>
  );
};

export default ExerciseItem;

const styles = StyleSheet.create({
  container: { gap: 10, flexDirection: 'row' },
  imageContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 22,
  },
  infoButton: {
    width: 30,
    height: 30,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 20,
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)', //done rgba(249, 240, 251, 1)
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  textWrapper: {
    gap: 12,
    paddingRight: 10,
  },
  title: {
    fontFamily: 'WorkSansSemibold',
    fontSize: 15,
    lineHeight: 18,
    color: 'rgba(38, 44, 69, 1)',
  },
  subtitle: {
    fontFamily: 'WorkSansRegular',
    fontSize: 12,
    lineHeight: 12,
    color: 'rgba(38, 44, 69, 0.65)',
  },
  moreButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
