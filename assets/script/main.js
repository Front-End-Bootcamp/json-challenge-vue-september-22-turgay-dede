import data from "../data/data.json"

let groups = []

function findUniqueGroups(data) {
	data.map(d => {
		if (groups.indexOf(d.group) === -1) {
			groups.push(d.group)
		}
	})
}

findUniqueGroups(data);

function getStudentsForGroupName(groupName, data) {
	let students = data.filter(d => d.group === groupName && d.type == null).map(s => s.name)
	return students;
}

function getAssistantForGroupName(groupName ,data) {
	let assistant = data.filter(d => d.group === groupName).filter(s => s.type != null).map(a => a.name)
	return assistant;
}

function createResult(groupName, data) {
	let students = getStudentsForGroupName(groupName, data)
	let assistant = getAssistantForGroupName(groupName, data)
	let result = {
		"groupName": groupName,
		"students": students,
		"assistant": assistant
	}
	return result;
}
let result = groups.map(g => createResult(g, data))
console.log(result);
