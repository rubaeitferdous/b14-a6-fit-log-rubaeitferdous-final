"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "fitlog-plan";
const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);
  const [notice, setNotice] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        if (value) {
          const data = JSON.parse(value);
          if (Array.isArray(data.plan)) setPlan(data.plan.slice(0, 5));
          if (Array.isArray(data.saved)) setSaved(data.saved);
          if (Array.isArray(data.done)) setDone(data.done);
        }
      } catch (error) {
        console.error("Unable to load FitLog plan data from local storage.", error);
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ plan, saved, done }),
      );
    } catch (error) {
      console.error("Unable to save FitLog plan data to local storage.", error);
    }
  }, [plan, saved, done, hydrated]);

  useEffect(() => {
    if (!notice) return undefined;
    const timeout = window.setTimeout(() => setNotice(""), 2500);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const addToPlan = useCallback(
    (id) => {
      if (plan.includes(id)) {
        setNotice("This workout is already in today's plan.");
        return;
      }
      if (plan.length >= 5) {
        setNotice("Today's plan is full. Remove a workout to make room.");
        return;
      }
      setPlan((current) => [...current, id]);
      setNotice("Added to today's plan.");
    },
    [plan],
  );

  const saveWorkout = useCallback(
    (id) => {
      if (saved.includes(id)) {
        setNotice("This workout is already saved.");
        return;
      }
      setSaved((current) => [...current, id]);
      setNotice("Saved for later.");
    },
    [saved],
  );

  const removeFromPlan = useCallback((id) => {
    setPlan((current) => current.filter((item) => item !== id));
    setDone((current) => current.filter((item) => item !== id));
    setNotice("Removed from today's plan.");
  }, []);

  const removeSaved = useCallback((id) => {
    setSaved((current) => current.filter((item) => item !== id));
    setNotice("Removed from saved workouts.");
  }, []);

  const markDone = useCallback(
    (id) => {
      if (done.includes(id)) return;
      setDone((current) => [...current, id]);
      setNotice("Workout marked as done.");
    },
    [done],
  );

  const value = useMemo(
    () => ({
      plan,
      saved,
      done,
      hydrated,
      notice,
      addToPlan,
      saveWorkout,
      removeFromPlan,
      removeSaved,
      markDone,
    }),
    [
      plan,
      saved,
      done,
      hydrated,
      notice,
      addToPlan,
      saveWorkout,
      removeFromPlan,
      removeSaved,
      markDone,
    ],
  );

  return (
    <PlanContext.Provider value={value}>
      {children}
      {notice && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 border-l-2 border-[#caff00] bg-[#191b20] px-4 py-3 text-sm text-white shadow-lg"
        >
          {notice}
        </div>
      )}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider.");
  }
  return context;
}
