import { useExpenses } from "../Context/ExpenseContext";

export default function ExpenseStats() {
  const { totalSpent, filter } = useExpenses();

  return (
    <div className="p-3 mb-4 bg-blue-100 text-blue-800 rounded">
      <h4 className="font-bold">
        Total Spent {filter !== "All" && `in ${filter}`}:
      </h4>
      <p className="text-xl font-semibold">₹{totalSpent}</p>
    </div>
  );
}
