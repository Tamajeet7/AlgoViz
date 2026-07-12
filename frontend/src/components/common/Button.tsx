type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-primary-hover">
      {children}
    </button>
  );
}