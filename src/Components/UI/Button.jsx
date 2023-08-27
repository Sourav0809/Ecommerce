const Button = (props) => {
  return (
    <button className="py-2 px-4 md:px-6 rounded-md bg-blue-950 text-white font-medium">
      {props.children}
    </button>
  );
};

export default Button;
