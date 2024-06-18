import { User } from '@/app';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface UserThumbnailsProps {
  users: User[];
  count: number;
}

const UserThumbnails: React.FC<UserThumbnailsProps> = ({ users, count }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumbnails}>
        {users.slice(0, 3).map((user) => (
          <Image key={user.id} source={user.image} style={styles.thumbnail} />
        ))}
        <View style={styles.countContainer}>
          <Text style={styles.text}>+{formatNumber(count)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnails: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: -12,
  },
  countContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  text: {
    fontFamily: 'WorkSansSemibold',
    fontSize: 11,
    color: 'rgba(38, 44, 69, 1)',
    lineHeight: 12.9,
    width: 29,
    height: 13,
  },
});

export default UserThumbnails;
