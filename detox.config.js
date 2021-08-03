module.exports = {
  configurations: {
    "android.emu.debug": {
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build: "cd android && ./gradlew app:assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      type: "android.emulator",
      session: {
        server: "ws://localhost:8099",
        sessionId: "test",
      },
      device: {
        avdName: "Pixel_3a_API_R",
      },
    },
    "android.emu.release": {
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build: "rm -rf android/build && cd android && ./gradlew clean && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_R",
      },
    },
    "android.device.release": {
      binaryPath: "android/app/build/outputs/apk/releaseE2E/app-releaseE2E.apk",
      build: "pushd android && ./gradlew app:assembleReleaseE2E app:assembleAndroidTest -DtestBuildType=releaseE2E  && popd",
      session: {
        server: "ws://localhost:8099",
        sessionId: "test",
      },
      type: "android.attached",
      name: "ADD_DEVICE_ID_HERE",
    },
    "ios.sim.release": {
      binaryPath: "ios/build/Build/Products/Release-iphonesimulator/rnDetox.app",
      build:
        "export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild ONLY_ACTIVE_ARCH=YES -workspace ios/rnDetox.xcworkspace -scheme rnDetox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
      type: "ios.simulator",
      device: {
        type: "iPhone 11 Pro",
      },
    },
    "ios.sim.debug": {
      binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/rnDetox.app",
      build:
        "xcodebuild -workspace ios/rnDetox.xcworkspace -scheme rnDetox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      type: "ios.simulator",
      device: {
        type: "iPhone 11 Pro",
      },
    },
  },
  "testRunner": "jest",
  "runnerConfig": 'e2e/config.json',
  "specs": 'e2e',
  "behavior": {
    "init": {
      "exposeGlobals": true,
    },
  },
};
