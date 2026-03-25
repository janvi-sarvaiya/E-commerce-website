export default function QuantityBox({ quantity, setQunatity }) {
  return (
    <div className="flex items-center gap-8 border rounded border-gray-400 ">
      <button
        onClick={() => quantity > 1 && setQunatity(quantity - 1)}
        className={`px-4 py-1 border-r border-r-gray-400 text-2xl hover:bg-orange hover:text-white}`}
      >
        -
      </button>
      <h1>{quantity}</h1>
      <button
        onClick={() => setQunatity(quantity + 1)}
        className="px-3 py-1 border-l text-2xl border-l-gray-400 cursor-pointer hover:bg-orange hover:text-white"
      >
        +
      </button>
    </div>
  );
}
