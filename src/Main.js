import { Text, View, Alert, Button } from "react-native";
import Constants from "expo-constants";

import InfoCard from "./InfoCard";

export default function Main() {
	return (
		<View
			style={{
				marginTop: Constants.statusBarHeight,
				flexGrow: 1,
				backgroundColor: "#50b3e1",
				flexDirection: "column",
				padding: 20,
			}}
		>
			<View style={{ width: "100%", marginBottom: 30 }}>
				<Text>Transaction history</Text>
				<Text>These are your monthly and daily Actions.</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginBottom: 30,
				}}
			>
				<InfoCard title="Transations" number="35" footer="Last month" />
				<InfoCard title="Transations" number="3" footer="Today" />
			</View>
			<View style={{ width: "100%", backgroundColor: "#fff", padding: 10 }}>
				<Text style={{ marginBottom: 30 }}>Transaction Last Year</Text>
				<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
					<Button title="Monthly" />
					<Button title="Daily" />
				</View>
				<Text>Canvas</Text>
			</View>
			<View>
				<Text>Icon 1</Text>
				<Text>Icon 2</Text>
				<Text>Icon 3</Text>
			</View>
		</View>
	);
}
