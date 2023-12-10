
function Loading({ children }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader-container text-center">
        <progress className="w-56 h-4 bg-gray-300 rounded-full" value="100" max="100"></progress>
        {children}
      </div>
    </div>
  );
}

export default Loading;


