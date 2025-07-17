import { useExpenses } from "../Context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { filteredExpenses } = useExpenses();

  if (filteredExpenses.length === 0)
    return <p className="text-gray-500">No expenses found.</p>;

  return (
    <ul className="space-y-2">
      {filteredExpenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </ul>
  );
}
