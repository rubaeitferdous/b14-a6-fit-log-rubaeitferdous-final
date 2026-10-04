import PlanDashboard from "@/components/plan/PlanDashboard";
import getWorkouts from "@/data/workouts";

export default async function PlanPage() {
  const workouts = await getWorkouts();
  return <PlanDashboard workouts={workouts} />;
}
