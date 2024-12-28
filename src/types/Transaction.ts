export interface Transaction {
  title: string;
  date: string;
  amount: string;
  source?: "paypal";
  type: "credit" | "debit";
}
