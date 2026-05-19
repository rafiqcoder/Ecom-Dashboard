import Section1 from "./Section1";
import Section2 from "./Section2";

function Main() {
  return (
    <div className=" relative">
      <Section1 />
      <div className="relative w-full ">
        <Section2/>
      </div>
    </div>
  );
}

export default Main;
