import useQuoter from "../hooks/useQuoter";

const Error = () => {
  const { error } = useQuoter();
  return (
    <div className="font-bold text-white text-center bg-red-500 py-3 border">
      <p>{error}</p>
    </div>
  );
};

export default Error;
