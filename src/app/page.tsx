// import HomePage from 'app/components/HomePage'

export default function PageHome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="
        flex flex-col items-center 
        w-1/2 h-1/2 bg-black"
      >
        <div
          className="
            border-2 border-red-500
            w-1/2 h-1/4 flex flex-column justify-center items-center"
        >
          <button
            className="
              bg-white text-black
              p-2 rounded-md
              hover:bg-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-gray-500
              hover:shadow-md
              hover:text-gray-600
              h-1/2 w-1/2"
            type="button"
          >
            Start test Benchmark
          </button>
        </div>
      </div>

      <div
        className="
          border-2 border-green-500
          border-2 border-red-500
          w-full h-full 
        "
      >
        

      </div>
    </div>
  );
}
