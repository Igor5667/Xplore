import Button from "./Button";

function Form() {
  return (
    <div className="flex bg-white p-1 rounded-md">
      <input
        type="text"
        placeholder="Country name"
        className="w-full ps-3 text-sm focus:outline-none text-black"
      />
      <Button>Search</Button>
    </div>
  );
}

export default Form;
