import { View, ViewProps } from 'react-native';

interface WorkoutInfoCardProps extends ViewProps {
  children: React.ReactNode;
  bgColor: string;
}

const WorkoutInfoCard: React.FC<WorkoutInfoCardProps> = ({
  children,
  bgColor,
  style,
  ...props
}) => {
  return (
    <View
      style={[
        {
          width: 335,
          height: 180,
          borderRadius: 38,
          paddingTop: 20,
          paddingBottom: 25,
          gap: 10,
          backgroundColor: bgColor,
          overflow: 'hidden',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default WorkoutInfoCard;
