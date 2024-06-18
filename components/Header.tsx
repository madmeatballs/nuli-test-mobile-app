import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBack from '@/components/HeaderLeft';
import HeaderRight from '@/components/HeaderRight';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Header: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 0.85)',
        'rgba(255, 255, 255, 0)',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.gradient, { paddingTop: insets.top }]}
    >
      <HeaderBack />
      <HeaderRight />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
});

export default Header;
