import  Constants  from "expo-constants";
import { Dimensions, Platform } from "react-native";

export const platform = Platform.OS
export const statusbarHeight = Constants.statusBarHeight
export const screenSize = Dimensions.get('screen').width >= 764 ? 'tablet' : 'phone'
export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width