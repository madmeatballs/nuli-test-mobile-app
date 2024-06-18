import { View, Text, Image } from 'react-native';

interface WorkoutHeaderProps {
  title: string;
  instructor: string;
  image: number;
}

const WorkoutHeader: React.FC<WorkoutHeaderProps> = ({
  title,
  instructor,
  image,
}) => {
  return (
    <View style={{ gap: 12, paddingLeft: 40, paddingRight: 100 }}>
      <Text style={{ fontFamily: 'WorkSansSemibold', fontSize: 28 }}>
        {title}
      </Text>
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Image
          source={image}
          style={{
            height: 28,
            width: 28,
          }}
        />
        <Text
          style={{
            fontFamily: 'OpenSansRegular',
            fontSize: 12,
            letterSpacing: 2,
          }}
        >
          WITH {instructor.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default WorkoutHeader;
