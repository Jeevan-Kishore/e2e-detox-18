jest.mock("react-native-gesture-handler", () => {
  const View = require("react-native/Libraries/Components/View/View");
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    WebView: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    DrawerLayoutAndroid: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

jest.mock("react-native-device-info", () => ({
  DocumentDir: () => {},
  polyfill: () => {},
  RNDeviceInfo: () => {},
  isTablet: () => {},
  Direction: () => {},
}));

jest.mock("react-native-admob", () => {
  const View = require("react-native/Libraries/Components/View/View");
  return {
    AdMobBanner: View,
    AdMobInterstitial: View,
    PublisherBanner: View,
    AdMobRewarded: View,
  };
});

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter.js", () => {
  const { EventEmitter } = require("events");
  return EventEmitter;
});

jest.mock("@react-native-firebase/crashlytics", () => () => ({
  recordError: jest.fn(),
  logEvent: jest.fn(),
  setUserProperties: jest.fn(),
  setUserId: jest.fn(),
  setCurrentScreen: jest.fn(),
}));

jest.mock("react-native-device-info", () => ({
  DocumentDir: () => {},
  polyfill: () => {},
  RNDeviceInfo: () => {},
  isTablet: () => {},
  Direction: () => {},
  getVersion: () => {},
}));

jest.mock("@react-native-community/netinfo", () => {});
