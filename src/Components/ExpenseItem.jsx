import { Trash2 } from "lucide-react";
import { useExpenses } from "../Context/ExpenseContext";

export default function ExpenseItem({ expense }) {
  const { removeExpense } = useExpenses();

  return (
    <li className="p-3 border rounded flex justify-between items-center bg-white">
      <div>
        <p className="font-medium">{expense.title}</p>
        <p className="text-sm text-gray-500">
          ₹{expense.amount} • {expense.category} • {expense.createdAt}
        </p>
      </div>
      <button onClick={() => removeExpense(expense.id)}>
        <Trash2 className="text-red-500" />
      </button>
    </li>
  );
}
