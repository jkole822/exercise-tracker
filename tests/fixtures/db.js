const mongoose = require("mongoose");
const Workout = mongoose.model("workout");

const workoutOne = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date().setDate(new Date().getDate() - 10),
	exercises: [
		{
			type: "resistance",
			name: "Bicep Curl",
			duration: 20,
			weight: 100,
			reps: 10,
			sets: 4,
		},
	],
};

const workoutTwo = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date().setDate(new Date().getDate() - 9),
	exercises: [
		{
			type: "resistance",
			name: "Lateral Pull",
			duration: 20,
			weight: 300,
			reps: 10,
			sets: 4,
		},
	],
};

const workoutThree = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date().setDate(new Date().getDate() - 8),
	exercises: [
		{
			type: "resistance",
			name: "Push Press",
			duration: 25,
			weight: 185,
			reps: 8,
			sets: 4,
		},
	],
};

const workoutFour = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date().setDate(new Date().getDate() - 7),
	exercises: [
		{
			type: "cardio",
			name: "Running",
			duration: 25,
			distance: 4,
		},
	],
};

const workoutFive = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date().setDate(new Date().getDate() - 6),
	exercises: [
		{
			type: "resistance",
			name: "Bench Press",
			duration: 20,
			weight: 285,
			reps: 10,
			sets: 4,
		},
	],
};

const workoutSix = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date().setDate(new Date().getDate() - 5),
	exercises: [
		{
			type: "resistance",
			name: "Bench Press",
			duration: 20,
			weight: 300,
			reps: 10,
			sets: 4,
		},
	],
};

const workoutSeven = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date(new Date().setDate(new Date().getDate() - 4)),
	exercises: [
		{
			type: "resistance",
			name: "Quad Press",
			duration: 30,
			weight: 300,
			reps: 10,
			sets: 4,
		},
	],
};

const workoutEight = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date(new Date().setDate(new Date().getDate() - 3)),
	exercises: [
		{
			type: "resistance",
			name: "Bench Press",
			duration: 20,
			weight: 300,
			reps: 10,
			sets: 4,
		},
	],
};

const workoutNine = {
	_id: new mongoose.Types.ObjectId(),
	day: new Date(new Date().setDate(new Date().getDate() - 2)),
	exercises: [
		{
			type: "resistance",
			name: "Military Press",
			duration: 20,
			weight: 300,
			reps: 10,
			sets: 4,
		},
	],
};

const setupDatabase = async () => {
	await Workout.deleteMany();
	await new Workout(workoutOne).save();
	await new Workout(workoutTwo).save();
	await new Workout(workoutThree).save();
	await new Workout(workoutFour).save();
	await new Workout(workoutFive).save();
	await new Workout(workoutSix).save();
	await new Workout(workoutSeven).save();
	await new Workout(workoutEight).save();
	await new Workout(workoutNine).save();
};

module.exports = {
	workoutOne,
	workoutTwo,
	workoutThree,
	workoutFour,
	workoutFive,
	workoutSix,
	workoutSeven,
	workoutEight,
	workoutNine,
	setupDatabase,
};
