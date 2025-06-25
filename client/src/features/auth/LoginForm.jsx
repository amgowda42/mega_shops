import { useForm } from "react-hook-form";
import { useAuthContext } from "./AuthContex";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuthContext();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-lg shadow-md bg-white hover:shadow-xl transition w-full max-w-md"
      >
        <h3 className="text-center font-bold text-red-500">Mega Shops</h3>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-900 mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 ${
              errors.email ? "border-red-500" : "focus:ring-blue-600"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 ${
              errors.password ? "border-red-500" : "focus:ring-blue-600"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
