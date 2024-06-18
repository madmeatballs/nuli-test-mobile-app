import { View, Text, ImageBackground } from 'react-native';
import workoutBg from '@/assets/images/WorkoutBg.png';
import { LinearGradient } from 'expo-linear-gradient';
import UserThumbnails from '@/components/UserThumbnails';
import { User } from '@/app';

interface WorkoutPicProps {
  users: User[];
  count: number;
  duration: number;
}

const WorkoutPic: React.FC<WorkoutPicProps> = ({ users, count, duration }) => {
  const GRADIENT_COLORS: string[] = [
    'rgba(38, 44, 69, 0)',
    'rgba(38, 44, 69, 0)',
    'rgba(38, 44, 69, 0.1)',
    'rgba(38, 44, 69, 0.9)',
  ];

  return (
    <ImageBackground
      source={workoutBg}
      style={{
        height: 235,
      }}
    >
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flex: 1,
          paddingTop: 20,
          paddingBottom: 12,
          paddingHorizontal: 30,
        }}
      >
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <View
            style={{
              paddingVertical: 11,
              paddingHorizontal: 14,
              borderRadius: 30,
              backgroundColor: 'rgba(38, 44, 69, 0.7)',
              alignSelf: 'flex-start',
            }}
          >
            <Text style={{ color: '#FFFFFF' }}>{duration} Min</Text>
          </View>
          <View
            style={{
              paddingRight: 20,
              flexDirection: 'row',
              gap: 8,
            }}
          >
            <UserThumbnails users={users} count={count} />
            <View
              style={{
                flexShrink: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: 'WorkSansRegular',
                  fontSize: 12,
                  color: '#FFFFFF',
                  lineHeight: 13.2,
                }}
              >
                members have already completed this workout!
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WorkoutPic;
