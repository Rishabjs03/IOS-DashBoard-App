import ExpenseForm from "../Components/ExpenseForm";
import ExpenseStats from "../Components/ExpenseStats";
import ExpenseFilter from "../Components/ExpenseFilter";
import ExpenseList from "../Components/ExpenseList";

export default function Expenses() {
  return (
    <div className="p-4 mt-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">💸 Expense Tracker</h2>
      <ExpenseForm />
      <ExpenseFilter />
      <ExpenseStats />
      <ExpenseList />
    </div>
  );
}
