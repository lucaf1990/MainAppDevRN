import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolate,
  cancelAnimation,
} from 'react-native-reanimated';
import useThemeContext from 'src/util/useThemeContext';

export default function HomeScreen() {
  const [time, setTime] = useState(0);
  const scaleValue = useSharedValue(0);
  const config = {
    duration: 2000,
    easing: Easing.inOut(Easing.ease),
  };

  const style = useAnimatedStyle(() => {
    const scale = interpolate(scaleValue.value, [0, 1], [1, 0.8]);
    return {
      transform: [{ scale }],
    };
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRunningRef = useRef(false);

  const toggleTimer = () => {
    if (isRunningRef.current) {
      cancelAnimation(scaleValue);
      scaleValue.value = 0;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      scaleValue.value = withRepeat(withTiming(1, config), -1, true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    isRunningRef.current = !isRunningRef.current;
  };

  const { colors, colorTheme } = useThemeContext();

  return (
    <>
      <View
        style={{
          flex: 0.4,
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <TouchableOpacity accessibilityRole="button" onPress={toggleTimer}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                borderRadius: 100,
                backgroundColor:
                  colorTheme === 'light'
                    ? colors.backgrounds.primary
                    : colors.backgrounds.strong,
                margin: 30,
              },
              style,
            ]}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              {time}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              textAlign: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          >
            Track your time on our app by pressing the timer circle
          </Text>
        </View>
      </View>
    </>
  );
}
