import { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <ChildAsFc color="red" onClick={() => console.log("click!")}>
      asdf
    </ChildAsFc>
  );
};

export default Parent;
