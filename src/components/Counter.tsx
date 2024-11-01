import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initValue: number;
  children: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [count, setCount] = createSignal(props.initValue);

  return (
    <>
      {props.children}
      <h3 class="text-2xl text-slate-300">Value: {count()}</h3>

      <button
        onclick={() => setCount((prev) => --prev)}
        class="p-3 bg-sky-500 rounded-xl w-16 mr-16"
      >
        -1
      </button>
      <button
        onclick={() => setCount((prev) => ++prev)}
        class="p-3 bg-sky-500 rounded-xl w-16"
      >
        +1
      </button>
    </>
  );
};

/*Summary
This code snippet defines a Counter component in TypeScript with SolidJS. It takes a Props object as an argument, which has a single property initValue of type number.

Inside the component, it uses the createSignal function from SolidJS to create a reactive signal called count and a function called setCount to update the value of count. The initial value of count is set to the value of props.initValue.

*/
