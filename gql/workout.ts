import { gql } from '@apollo/client';

export const WORKOUT_DATA = gql`
  query getWorkoutData {
    getWorkouts {
      id
      name
      instructor
      duration
      equipments
      circuits {
        id
        name
        exercises {
          id
          equipmentType
          name
          sets
          reps
          minReps
          maxReps
          secs
          minWeight
          maxWeight
          weight
        }
      }
      warmup {
        id
        name
        equipmentType
        reps
        minReps
        maxReps
        secs
      }
    }
  }
`;

export const GET_WORKOUT_INFO = gql`
  query getWorkoutInfo {
    getWorkouts {
      id
      name
      instructor
      duration
    }
  }
`;

export const GET_WORKOUT_EQUIPMENTS = gql`
  query getWorkoutEquipments {
    getWorkouts {
      equipments
    }
  }
`;

export const GET_WORKOUT_WARMUP = gql`
  query getWorkoutWarmup {
    getWorkouts {
      warmup {
        id
        name
        equipmentType
        reps
        minReps
        maxReps
        secs
        weight
        minWeight
        maxWeight
      }
    }
  }
`;
