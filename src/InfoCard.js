import { View, Text } from "react-native";

export default function InfoCard(props) {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				borderRadius: 5,
				justifyContent: "space-around",
				alignItems: "center",
				width: "45%",
				height: 175,
				shadowColor: "#000",
				shadowOffset: { width: 10, height: 10 },
				shadowRadius: 5,
				shadowOpacity: 0.5,
				elevation: 20,
			}}
		>
			<Text style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
				{props.title}
			</Text>
			<Text style={{ color: "#0d5678", fontSize: 50, margin: 0 }}>
				{props.number}
			</Text>
			<Text style={{ color: "#9f9f9f", fontSize: 15, margin: 0 }}>
				{props.footer}
			</Text>
		</View>
	);
}
