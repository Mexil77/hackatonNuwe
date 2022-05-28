import { View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Navbar() {
	return (
		<View
			style={{
				backgroundColor: "#1212f8",
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center",
				borderRadius: 30,
				height: 50,
			}}
		>
			<Icon name="signal" size={30} color="#fff" />
			<Icon name="compass" size={30} color="#fff" />
			<Icon name="user" size={30} color="#fff" />
		</View>
	);
}
