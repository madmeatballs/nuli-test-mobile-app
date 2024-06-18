import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Switch } from 'react-native';
import candiceImage from '../assets/images/candice.png';
import WorkoutHeader from '@/components/WorkoutHeader';
import TrialBanner from '@/components/TrialBanner';
import { user1, user2, user3 } from '@/assets/images';
import WorkoutPic from '@/components/WorkoutPic';
import EquipmentCard from '@/components/EquipmentCard';
import WorkoutBodyFocus from '@/components/WorkoutBodyFocus';
import WorkoutInstructions from '@/components/WorkoutInstructions';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type User = {
  id: number;
  image: number;
};

const USERS: User[] = [
  {
    id: 1,
    image: user1,
  },
  {
    id: 2,
    image: user2,
  },
  {
    id: 3,
    image: user3,
  },
];

const WorkoutOverview: React.FC = () => {
  const [warmUp, setWarmUp] = useState<boolean>(true);
  const animatedHeight = useSharedValue(warmUp ? 100 : 0);
  const animatedOpacity = useSharedValue(warmUp ? 1 : 0);

  const toggleWarmUp = () => setWarmUp((previousState) => !previousState);

  useEffect(() => {
    animatedHeight.value = withTiming(warmUp ? 100 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    animatedOpacity.value = withTiming(warmUp ? 1 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }, [animatedHeight, animatedOpacity, warmUp]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      opacity: animatedOpacity.value,
      overflow: 'hidden',
    };
  });

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 100, paddingBottom: 150, gap: 30 }}
    >
      <WorkoutHeader
        title="Full Body"
        instructor="candice"
        image={candiceImage}
      />
      <TrialBanner daysRemaining={6} />
      <WorkoutPic users={USERS} count={3700} duration={65} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 50,
          gap: 10,
        }}
      >
        <EquipmentCard />
        <WorkoutBodyFocus />
        <WorkoutInstructions />
      </ScrollView>
      <View style={{ paddingHorizontal: 10, flex: 1 }}>
        <View
          style={[
            {
              paddingTop: 20,
              paddingBottom: 10,
              gap: 10,
              paddingHorizontal: 10,
              borderRadius: 38,
              backgroundColor: 'rgba(247, 235, 250, 1)',
            },
            warmUp && { gap: 30 },
          ]}
        >
          <View
            style={{
              paddingHorizontal: 15,
              gap: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ gap: 12 }}>
              <Text
                style={{
                  fontFamily: 'WorkSansSemibold',
                  fontSize: 24,
                  lineHeight: 28.8,
                  color: 'rgba(38, 44, 69, 1)',
                }}
              >
                Warm-Up
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSansRegular',
                  fontSize: 14,
                  lineHeight: 14,
                  letterSpacing: 1,
                }}
              >
                5 min • 3 Exercises
              </Text>
            </View>
            <Switch
              trackColor={{ true: 'rgba(38, 44, 69, 1)' }}
              onChange={toggleWarmUp}
              value={warmUp}
            />
          </View>
          <Animated.View
            style={[
              { alignItems: 'center', justifyContent: 'flex-start' },
              animatedStyle,
            ]}
          >
            <Text>SUPERSET • 2 ROUNDS</Text>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkoutOverview;
