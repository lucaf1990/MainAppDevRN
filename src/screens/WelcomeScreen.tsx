import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolate,
} from 'react-native-reanimated';

import useThemeContext from 'src/util/useThemeContext';

export default function WelcomeScreen() {
  const scaleValue = useSharedValue(0);
  const config = {
    duration: 2000,
    easing: Easing.inOut(Easing.ease),
  };

  const style = useAnimatedStyle(() => {
    const scale = interpolate(scaleValue.value, [0, 1], [1, 2]);
    return {
      transform: [{ scale }],
    };
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startAnimation = () => {
    scaleValue.value = withRepeat(withTiming(1, config), -1, true);
  };

  const { colors } = useThemeContext();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    startAnimation();
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 500000);
    return () => clearTimeout(timeout);
  }, [startAnimation]);

  return visible ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Animated.View
        style={[
          {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderBlockColor: colors.text,
            borderWidth: 2,
            backgroundColor: colors.backgrounds.default,
            margin: 30,
          },
          style,
        ]}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 30,
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          WELCOME
        </Text>
      </Animated.View>
    </View>
  ) : null;
}
