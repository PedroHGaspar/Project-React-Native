import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    initialRouteName: "home",
};

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });//this is basically an object with all the fonts that are in the assets folder.

    if (!fontsLoaded) {
        return null;
    }//check if the fonts are loaded

    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home" />
        </Stack>
    )
};

export default Layout;