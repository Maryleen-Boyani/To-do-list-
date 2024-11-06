export default function InputSection() {
  return (
    <div>
      <input
        id="todo-text"
        placeholder="New Todo item"
        className="p-2 border-black border-2"
      />
      <button className="bg-teal-300 w-[100px] h-[50px] p-1">Add item</button>
    </div>
  );
}
