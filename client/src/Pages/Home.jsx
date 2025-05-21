import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex items-center justify-center text-center px-4 mt-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to <span className="text-green-600">Megs Shops</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-6">
          Find the best products at unbeatable prices, handpicked just for you.
        </p>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition"
          onClick={() => navigate("/main/products")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
