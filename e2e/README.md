## Detox steps

### Init detox
```shell script
./init-detox-debug-iOS.sh
```

Note: The above boots up simulator and a dev server, please use the following to run detox

```shell script
detox test ./e2e -c ios.sim.debug -l verbose --reuse
```

## Detox on BitBar Cloud (Android)

### Steps:

1. Run `./zip-for-bitbar.sh`
    - Generates a release-like build
    - Makes a zip of the needed files called `bitbar-android.zip` which contains the source code and tests
2. On Bitbar, create a new Appium Android Server Side project and name it as, for example, “Detox Android”.
3. Start a new test run:
   - Upload a small dummy app 
   - The testing framework requires you to upload some apps, even if this is not the app that you’ll be testing. The app to be tested is uploaded to the test suite zip.
   - The test zip package needs to include everything required for running your test. This includes your app with built-in Detox tests and your ‘ run-tests.sh ‘ that installs Node dependencies and launches the app under test.
   - Select Android devices to test on, note that Detox can run on Android devices OS version 5.0 and up.
   - Start your test run!
   
### Notes:

1. Uses a build flavour called `releaseE2E` which does not use proguard and mocks release configurations
2. Makes use of `bitbar-util/package.json` for dependencies needed on the cloud. Done for 2 reasons
    - Keeps minimum needed dependencies
    - Any package with a `.git` link is not authorized to execute on remote machines
