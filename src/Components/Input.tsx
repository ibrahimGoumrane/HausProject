interface InputProps {
  placeholder: string;
  type: string;
  className?: string;
}
const Input = ({ placeholder, type, className }: InputProps) => {
  return (
    <div className={'relative ' + className}>
      <input
        type={type}
        className=" py-3 pe-0 ps-8 block text-paragraph-secondary text-black-primary w-full bg-transparent border-t-transparent border-x-transparent  border-b-[2px] border-black-primary/30  focus:border-t-transparent focus:border-x-transparent focus:border-b-black-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600 focus-visible:ring-0 transition-none focus-visible:outline-none placeholder:text-black-primary"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
