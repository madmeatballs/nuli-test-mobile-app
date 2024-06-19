import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import candiceImage from '../assets/images/candice.png';
import WorkoutHeader from '@/components/WorkoutHeader';
import TrialBanner from '@/components/TrialBanner';
import { user1, user2, user3 } from '@/assets/images';
import WorkoutPic from '@/components/WorkoutPic';
import EquipmentCard from '@/components/EquipmentCard';
import WorkoutBodyFocus from '@/components/WorkoutBodyFocus';
import WorkoutInstructions from '@/components/WorkoutInstructions';
import WarmUpExercise from '@/components/WarmUpExercise';
import StartWorkoutButton from '@/components/StartWorkoutButton';
import ExerciseItem from '@/components/ExerciseItem';
import Separator from '@/components/Separator';
import ExerciseWrapper from '@/components/ExerciseWrapper';

export enum Equipments {
  barbell = 'barbell',
  deadlift = 'deadlift',
  cable = 'cable',
  dumbbell = 'dumbbell',
  glutebridge = 'glute bridge',
  stabilityBall = 'stability ball',
  resistanceBand = 'resistance band',
  smithMachine = 'smith machine',
}

export type User = {
  id: number;
  image: number;
};

export type Exercise = {
  id: number;
  title: string;
  equipment: Equipments;
  instructor?: string;
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
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 100,
          paddingBottom: 150,
          gap: 30,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}
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
        <WarmUpExercise />
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
            gap: 30,
          }}
        >
          <View
            style={{
              paddingHorizontal: 25,
              gap: 12,
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: 'rgba(38, 44, 69, 1)',
                fontFamily: 'WorkSansSemibold',
                fontSize: 24,
              }}
            >
              Workout
            </Text>
            <Text
              style={{
                color: 'rgba(38, 44, 69, 1)',
                fontFamily: 'WorkSansRegular',
                fontSize: 14,
                letterSpacing: 1,
              }}
            >
              60 Min • 11 Exercises
            </Text>
          </View>
          <View>
            <View style={{ gap: 10 }}>
              <View style={styles.supersetWrapper}>
                <View>
                  <Text style={styles.supersetBold}>
                    SUPERSET <Text style={styles.supersetRegular}>•</Text> 3
                    ROUNDS
                  </Text>
                </View>
              </View>
              <View>
                <ExerciseWrapper borderColor="rgba(233, 233, 233, 1)">
                  <ExerciseItem />
                  <ExerciseItem />
                </ExerciseWrapper>
                <Separator color="rgba(233, 233, 233, 1)" />
                <ExerciseWrapper borderColor="rgba(233, 233, 233, 1)">
                  <ExerciseItem />
                </ExerciseWrapper>
                <Separator color="rgba(233, 233, 233, 1)" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <StartWorkoutButton />
    </>
  );
};

export default WorkoutOverview;

const styles = StyleSheet.create({
  supersetWrapper: {
    paddingHorizontal: 45,
  },
  supersetBold: {
    fontFamily: 'WorkSansSemibold',
    fontSize: 14,
    lineHeight: 16.8,
    color: 'rgba(61, 65, 86, 0.45)',
    letterSpacing: 1,
  },
  supersetRegular: {
    fontFamily: 'WorkSansRegular',
    fontSize: 14,
    lineHeight: 16.8,
    color: 'rgba(61, 65, 86, 0.45)',
    letterSpacing: 1,
  },
});
