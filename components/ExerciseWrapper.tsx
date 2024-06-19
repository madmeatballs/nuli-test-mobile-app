import { View, ViewProps } from 'react-native';

interface ExerciseWrapperProps extends ViewProps {
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
}

const ExerciseWrapper: React.FC<ExerciseWrapperProps> = ({
  children,
  borderColor = 'rgba(255, 255, 255, 1)',
  bgColor = 'rgba(255, 255, 255, 0.25)',
  style,
  ...props
}) => {
  return (
    <View
      style={[
        {
          padding: 6,
          gap: 12,
          borderWidth: 1,
          borderRadius: 28,
          borderColor: borderColor,
          backgroundColor: bgColor,
          width: '100%',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ExerciseWrapper;
