import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BarbellIcon } from './icons/barbell-icon';
import { CableIcon } from './icons/cable-icon';
import { DumbbellIcon } from './icons/dumbbell-icon';
import { ResistanceBandIcon } from './icons/resistance-band-icon';
import { SmithMachineIcon } from './icons/smith-machine-icon';
import EquipmentItem from './EquipmentItem';

type Equipment = {
  label: string;
  icon: React.ReactElement;
};

const EQUIPMENT_DATA: Equipment[] = [
  {
    label: 'barbell',
    icon: <BarbellIcon />,
  },
  {
    label: 'cable',
    icon: <CableIcon />,
  },
  {
    label: 'dumbbell',
    icon: <DumbbellIcon />,
  },
  {
    label: 'resistance band',
    icon: <ResistanceBandIcon />,
  },
  {
    label: 'smith machine',
    icon: <SmithMachineIcon />,
  },
];

const EquipmentInfo: React.FC = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <Text
          style={{
            fontFamily: 'WorkSansSemibold',
            fontSize: 24,
            color: 'rgba(38, 44, 69, 1)',
            lineHeight: 28.8,
          }}
        >
          Equipment
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 25,
          gap: 12,
          height: 78,
          alignSelf: 'flex-end',
          alignItems: 'flex-start',
        }}
      >
        {EQUIPMENT_DATA.map((item) => {
          return (
            <EquipmentItem
              key={item.label}
              label={item.label}
              icon={item.icon}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default EquipmentInfo;
