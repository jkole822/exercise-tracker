const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

const Workout = mongoose.model("workout");

const {
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
} = require("./fixtures/db");

beforeEach(setupDatabase);

test("GET request to `/api/workouts' returns all workouts in ascending order as JSON", async () => {
	const res = await request(app)
		.get("/api/workouts")
		.send()
		.expect("Content-Type", /json/);

	const firstWorkout = JSON.parse(
		JSON.stringify(await Workout.findById(workoutOne._id))
	);
	const lastWorkout = JSON.parse(
		JSON.stringify(await Workout.findById(workoutNine._id))
	);
	const firstItemResponse = JSON.parse(JSON.stringify(res.body[0]));
	const lastItemResponse = JSON.parse(
		JSON.stringify(res.body[res.body.length - 1])
	);

	expect(res.body.length).toBe(9);
	expect(firstItemResponse).toMatchObject(firstWorkout);
	expect(lastItemResponse).toMatchObject(lastWorkout);
});

test("GET request to `/api/workouts/range' returns the seven most recent workouts in ascending order as JSON", async () => {
	const res = await request(app)
		.get("/api/workouts/range")
		.send()
		.expect("Content-Type", /json/);

	const firstWorkout = JSON.parse(
		JSON.stringify(await Workout.findById(workoutThree._id))
	);
	const lastWorkout = JSON.parse(
		JSON.stringify(await Workout.findById(workoutNine._id))
	);
	const firstItemResponse = JSON.parse(JSON.stringify(res.body[0]));
	const lastItemResponse = JSON.parse(
		JSON.stringify(res.body[res.body.length - 1])
	);

	expect(res.body.length).toBe(7);
	expect(firstItemResponse).toMatchObject(firstWorkout);
	expect(lastItemResponse).toMatchObject(lastWorkout);
});

test("POST request to `/api/workouts` returns template workout object with empty exercise array as JSON", async () => {
	const res = await request(app)
		.post("/api/workouts")
		.send()
		.expect("Content-Type", /json/);

	expect(res.body.exercises.length).toBe(0);
});

test("PUT request to `/api/workouts/:id` adds an exercise to the exercise array of the corresponding workout", async () => {
	const id = workoutNine._id;

	const exercise = {
		type: "resistance",
		name: "Bench Press",
		duration: 20,
		weight: 300,
		reps: 10,
		sets: 4,
	};

	await request(app)
		.put(`/api/workouts/${id}`)
		.send(exercise)
		.expect("Content-Type", /json/);

	const workout = await Workout.findById(id);

	expect(workout.exercises.length).toBe(2);
	expect(workout.exercises).toContainEqual(expect.objectContaining(exercise));
});
