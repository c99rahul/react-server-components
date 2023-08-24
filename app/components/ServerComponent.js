const ServerComponent = () => {
  const data =
    "I'm a Server Component. View developer console and then the server console in your browser to notice the difference.";
  /*
   * Since this is a server component, the below message
   * won't be displayed in the browser's dev console.
   */
  console.log(data);

  return <p>{data}</p>;
};

export default ServerComponent;
