import { Text, View } from "react-native";
import AndroidSafeView from "./utils/AndroidSafeView";

export default function App() {
    return (
        <View style={AndroidSafeView?.AndroidSafeArea}>
            <Text className="text-red-400">Hello world!</Text>
        </View>
    );
}
