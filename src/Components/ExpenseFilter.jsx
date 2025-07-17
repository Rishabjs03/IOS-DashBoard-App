import { useExpenses } from "../Context/ExpenseContext";

export default function ExpenseFilter() {
  const { filter, setFilter } = useExpenses();

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded mb-4 w-full"
    >
      <option value="All">All</option>
      <option value="General">General</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Bills">Bills</option>
      <option value="Shopping">Shopping</option>
    </select>
  );
}
