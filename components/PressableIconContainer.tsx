import { Pressable, StyleSheet } from 'react-native';

interface PressableIconContainerProps {
  children: React.ReactNode;
}

const PressableIconContainer: React.FC<PressableIconContainerProps> = ({
  children,
}) => {
  return <Pressable style={styles.pressable}>{children}</Pressable>;
};

export default PressableIconContainer;

const styles = StyleSheet.create({
  pressable: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
