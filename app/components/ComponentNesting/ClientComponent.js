"use client";

const ClientComponent = ({ children }) => {
  const data = "I'm a Client Component. I accept a Server Component as a prop.";

  return (
    <>
      <p>{data}</p>
      {children}
    </>
  );
};

export default ClientComponent;
