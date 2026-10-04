const WORKOUTS_API_URL = "https://api.api-store.workers.dev/api/fitlog";

function createSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function normalizeWorkout(workout) {
    if (
        !workout ||
        typeof workout.id !== "number" ||
        typeof workout.name !== "string" ||
        typeof workout.image !== "string" ||
        !Array.isArray(workout.muscleGroups) ||
        typeof workout.equipment !== "string" ||
        typeof workout.duration !== "number" ||
        typeof workout.caloriesBurned !== "number" ||
        !Array.isArray(workout.instructions)
    ) {
        throw new Error("The FitLog API returned a workout with an invalid shape.");
    }

    const tags = workout.muscleGroups;

    return {
        ...workout,
        slug: createSlug(workout.name),
        category: tags[0] ?? "Workout",
        tags,
        equipment: workout.equipment
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        calories: workout.caloriesBurned,
    };
}

export async function getWorkouts() {
    const response = await fetch(WORKOUTS_API_URL, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error(
            `Unable to fetch FitLog workouts: ${response.status} ${response.statusText}`,
        );
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("The FitLog API response must be an array of workouts.");
    }

    return data.map(normalizeWorkout);
}

export default getWorkouts;
