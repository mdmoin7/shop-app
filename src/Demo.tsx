import { useEffect, useState } from "react";

function Demo() {
  // every component should return something always
  // return one single consolidated element
  const [count, setCount] = useState(0);
  const name = "mike";
  console.log('DEMO rendered');
  // useEffect(effect_function, dependencies)
  useEffect(()=>{
    console.log('useEffect called');
    return ()=>{
      console.log('unmounting logic'); // this will be called on unmount & have 0 deps
    }
  }, [
    // dependencies : value changes of which will trigger the effect function again
    // if empty array : runs only once on mount (mounting)
    count // on every count change, the effect func will be called (updating)
    // state, props
  ]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Demo Component</h1>
      <p>This is a demo component</p>
      <h2>Hello, {name}</h2>
      <h2>{name.toUpperCase()}</h2>
      <h2>{9 + 8}</h2>
    </div>
  );
}
export default Demo;
