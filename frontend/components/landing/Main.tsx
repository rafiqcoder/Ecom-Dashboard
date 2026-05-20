import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Main() {
  return (
    <div className=" relative">
      <Section1 />
      <div className="relative w-full lg:h-[800px] xl:h-[340px]">
        <Section2/>
      </div>
      <Section3/>
    </div>
  );
}

export default Main;
