import React from 'react';
import { ScrollView } from 'react-native';
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
      </ScrollView>
      <StartWorkoutButton />
    </>
  );
};

export default WorkoutOverview;
