import { Pressable, StyleSheet, Text } from 'react-native';

interface EquipmentIconProps {
  icon: React.ReactElement;
  label: string;
}

const EquipmentItem: React.FC<EquipmentIconProps> = ({ icon, label }) => {
  return (
    <Pressable style={styles.button}>
      {icon}
      <Text style={styles.label} numberOfLines={2}>
        {label.toUpperCase()}
      </Text>
    </Pressable>
  );
};

export default EquipmentItem;

const styles = StyleSheet.create({
  button: {
    width: 58,
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: { fontFamily: 'OpenSansRegular', fontSize: 10, textAlign: 'center' },
});
