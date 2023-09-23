import PropTypes from "prop-types";

function Button({children}) {
  return (
    <button
      type="button"
      className="hidden md:block text-white text-sm bg-slate-950 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 w-28 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
      {children}
      <i className="fa-light fa-arrow-up-right"></i>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
