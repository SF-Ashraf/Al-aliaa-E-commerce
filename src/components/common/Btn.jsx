
const Btn = ({ variant, children, ...props }) => {
  return (
    <button className={`${variant}`} {...props}>
      
      {children}
    </button>
  );
};

export default Btn;
