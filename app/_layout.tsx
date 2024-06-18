import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_900Black,
} from '@expo-google-fonts/work-sans';
import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '@/components/Header';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().catch(console.error);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    WorkSansRegular: WorkSans_400Regular,
    WorkSansMedium: WorkSans_500Medium,
    WorkSansSemibold: WorkSans_600SemiBold,
    WorkSansBold: WorkSans_700Bold,
    WorkSansBlack: WorkSans_900Black,
    OpenSansRegular: OpenSans_400Regular,
    OpenSansMedium: OpenSans_500Medium,
    OpenSansSemibold: OpenSans_600SemiBold,
    OpenSansBold: OpenSans_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().catch(console.error);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerTransparent: true,
              header: Header,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
