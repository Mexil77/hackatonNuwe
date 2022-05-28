import { Text, View } from "react-native";
import Constants from "expo-constants";

import InfoCard from "./InfoCard";
import ChartCard from "./ChartCard";
import Navbar from "./Navbar";

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
				<Text style={{ fontSize: 50, color: "#670ef68d" }}>NEO BANKS</Text>
				<Text style={{ fontSize: 30 }}>Transaction history</Text>
				<Text style={{ fontSize: 15 }}>
					These are your monthly and daily Actions.
				</Text>
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
			<ChartCard />
			<Navbar />
		</View>
	);
}
