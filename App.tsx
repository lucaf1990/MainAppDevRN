import { StatusBar } from 'expo-status-bar';
import { persistStore } from 'redux-persist';
import NavigationContainer from 'src/navigators/NavigationContainer';
import RootNavigator from 'src/navigators/RootNavigator';
import store from 'src/redux/store';
import ThemeProvider from 'src/store/ThemeProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <NavigationContainer>
            <StatusBar />
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
