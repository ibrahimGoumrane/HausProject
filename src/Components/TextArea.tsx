interface TextAreaProps {
  placeholder: string;
  className?: string;
}

const TextArea = ({ placeholder, className }: TextAreaProps) => {
  return (
    <div className={className}>
      <textarea
        id="message"
        rows={2}
        placeholder={placeholder}
        className="py-3 pe-0 ps-8 block text-paragraph-secondary placeholder:text-black-primary text-black-primary border-black-primary/30 w-full bg-transparent border-t-transparent border-x-transparent border-b-[2px] focus:border-b-black-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600 focus-visible:ring-0 focus-visible:outline-none   transition-none"
      />
    </div>
  );
};

export default TextArea;
