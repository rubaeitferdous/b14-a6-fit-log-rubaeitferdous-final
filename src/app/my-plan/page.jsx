import PlanDashboard from "@/components/plan/PlanDashboard";
import getWorkouts from "@/data/workouts";

export default async function MyPlanPage() {
  const workouts = await getWorkouts();
  return <PlanDashboard workouts={workouts} />;
}
