import { Card } from "./Card";
import { CategoryData } from "./CategoryData";
import { MonthlyData } from "./MonthlyData";
import { Recipient } from "./Recipient";
import { Transaction } from "./Transaction";
import { WeeklyData } from "./WeeklyData";

export interface DashboardAPIData {
  cards: Card[];
  transactions: Transaction;
  weekly: WeeklyData;
  statistics: CategoryData;
  transfer: Recipient[];
  history: MonthlyData;
}
