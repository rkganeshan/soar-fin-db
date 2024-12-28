import { DailyData } from "./DailyData";

export interface WeeklyData {
  Mon: DailyData;
  Tue: DailyData;
  Wed: DailyData;
  Thu: DailyData;
  Fri: DailyData;
  Sat: DailyData;
  Sun: DailyData;
}
