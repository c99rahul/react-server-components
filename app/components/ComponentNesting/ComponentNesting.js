import ClientComponent from "./ClientComponent";
import NestedServerComponent from "./NestedServerComponent";

const ComponentNesting = () => {
  return (
    <>
      <ClientComponent>
        <NestedServerComponent />
      </ClientComponent>
    </>
  );
};

export default ComponentNesting;
