import { View, StyleSheet } from 'react-native';
import { HeartIcon } from './icons/heart-icon';
import { CogWheelIcon } from './icons/cog-wheel-icon';
import PressableIconContainer from './PressableIconContainer';

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
      <PressableIconContainer>
        <HeartIcon height={20} width={20} />
      </PressableIconContainer>
      <PressableIconContainer>
        <CogWheelIcon height={24} width={24} />
      </PressableIconContainer>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
