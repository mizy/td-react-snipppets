import createServices from "@/services/createServices";

export default createServices({
	getSolutionList: {
		url: "/demo"
	},
	createSolutionVersion: {
		url: "/demo",
		method: "POST"
	}
});
