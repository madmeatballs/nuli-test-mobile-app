import { StyleSheet, View } from 'react-native';

interface SeparatorProps {
  color: string;
}

const Separator: React.FC<SeparatorProps> = ({
  color = 'rgba(233, 233, 233, 1)',
}) => {
  return (
    <View style={styles.separatorContainer}>
      <View style={[styles.separator, { borderColor: color }]} />
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  separatorContainer: {
    paddingHorizontal: 45,
    height: 32,
  },
  separator: {
    borderLeftWidth: 1,
    flexGrow: 1,
  },
});
