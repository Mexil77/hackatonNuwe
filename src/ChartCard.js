import { Text, View, Alert, TouchableNativeFeedback } from "react-native";
import { Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

export default function ChartCard() {
	return (
		<View
			style={{
				width: "100%",
				backgroundColor: "#fff",
				padding: 10,
				marginBottom: 30,
				borderRadius: 30,
			}}
		>
			<Text style={{ marginBottom: 30 }}>Transaction Last Year</Text>
			<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
				<View style={{ width: "45%", backgroundColor: "#f0f0f0" }}>
					<TouchableNativeFeedback onPress={() => Alert.alert("Hola")}>
						<Text style={{ textAlign: "center" }}>Monthly</Text>
					</TouchableNativeFeedback>
				</View>
				<View style={{ width: "45%", backgroundColor: "#f0f0f0" }}>
					<TouchableNativeFeedback onPress={() => Alert.alert("Hola")}>
						<Text style={{ textAlign: "center" }}>Daily</Text>
					</TouchableNativeFeedback>
				</View>
			</View>
			<View>
				<LineChart
					data={{
						labels: [
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
						],
						datasets: [
							{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
								],
							},
						],
					}}
					width={Dimensions.get("window").width - 60} // from react-native
					height={220}
					yAxisLabel="$"
					yAxisSuffix="k"
					yAxisInterval={1} // optional, defaults to 1
					chartConfig={{
						backgroundColor: "#000",
						backgroundGradientFrom: "#fff",
						backgroundGradientTo: "#fff",
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(130, 130, 130, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(130, 130, 130, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: "3",
							strokeWidth: "2",
							stroke: "#670ef68d",
						},
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 16,
					}}
				/>
			</View>
		</View>
	);
}
