import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import WorkoutInfoCard from './WorkoutInfoCard';
import { LinearGradient } from 'expo-linear-gradient';
import candiceInstructions from '@/assets/images/candice-instructions.png';

const WorkoutInstructions: React.FC = () => {
  return (
    <WorkoutInfoCard
      bgColor="rgba(254, 239, 240, 1)"
      style={{
        paddingTop: 20,
        paddingBottom: 12,
        paddingRight: 70,
        paddingLeft: 25,
        overflow: 'visible',
      }}
    >
      <View
        style={{
          width: 240,
          height: 148,
          gap: 7,
          position: 'relative',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontFamily: 'WorkSansSemibold',
            fontSize: 24,
            lineHeight: 28.8,
            color: 'rgba(38, 44, 69, 1)',
          }}
        >
          Instructions
        </Text>
        <View
          style={{
            width: '100%',
            height: 112,
            borderRadius: 18,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <ScrollView
            style={{
              paddingVertical: 10,
              paddingHorizontal: 14,
            }}
            contentContainerStyle={{
              paddingBottom: 35,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.text}>
              This training program will begin from a full body circuit training
              on the first day:{'\n'}
            </Text>
            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.text}>
                You will be able to learn how to use{' '}
                <Text style={styles.textBold}>different muscle groups</Text>{' '}
                from today’s training.
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.textBold}>
                You will be able to learn{' '}
                <Text style={styles.text}>
                  how to use different muscle groups.{'\n'}
                </Text>
              </Text>
            </View>
            <Text style={styles.text}>
              This training program will begin from a full body circuit training
              on the first day:{'\n'}
            </Text>
            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
              <Text style={styles.numberBullet}>1.</Text>
              <Text style={styles.text}>
                You will be <Text style={styles.textBold}>able to learn</Text>{' '}
                how to use different muscle groups.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
              <Text style={styles.numberBullet}>2.</Text>
              <Text style={styles.text}>
                You will be able to learn how to use different muscle groups
                from today’s training.
              </Text>
            </View>
            <Text style={styles.text}>
              You will be able to learn how to use different muscle groups from
              today’s training.
            </Text>
          </ScrollView>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.8)',
              'rgba(255, 255, 255, 1)',
            ]}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 35,
            }}
            pointerEvents="none"
          />
        </View>
      </View>
      <Image
        source={candiceInstructions}
        style={{
          height: 140,
          width: 140,
          position: 'absolute',
          right: -50,
          top: 15,
        }}
        resizeMode="cover"
      />
    </WorkoutInfoCard>
  );
};

export default WorkoutInstructions;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSansRegular',
    fontSize: 11,
    lineHeight: 15.4,
    color: 'rgba(38, 44, 69, 1)',
  },
  textBold: {
    fontFamily: 'OpenSansBold',
    fontSize: 11,
    lineHeight: 15.4,
    color: 'rgba(38, 44, 69, 1)',
  },
  bulletPoint: {
    paddingLeft: 10,
    paddingRight: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  numberBullet: {
    paddingLeft: 10,
    paddingRight: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontFamily: 'OpenSansRegular',
    fontSize: 11,
    lineHeight: 15.4,
  },
});
