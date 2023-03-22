module.exports = {
	name: "HalfTimeScoreBug",
	description: "Animated Half Time Score Bug",
	category: "Basic",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "left",
			vertical_position: "bottom",
			width: "50",
			widget_wrapping: false,
			global_padding: "0",
			widget_offset: "0",
			width: "100",
			height: "100"
		}
	},
	entry_props: [
		{
			name: "homescore",
			description: "Home Score",
			type: "String"
		},
		{
			name: "Hname",
			description: "Home Name",
			type: "String"
		},
		{
			name: "awayscore",
			description: "Away Score",
			type: "String"
		},
		{
			name: "Aname",
			description: "Away Name",
			type: "String"
		},
	],
	vue_template: getFile("halftimescorebug.html").toString(),
	vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}
