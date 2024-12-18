import Input from '../Input';
import TextArea from '../TextArea';

const Contact = () => {
  return (
    <div
      className="flex items-start bg-black-primary flex-col justify-start  h-[775px] border-y-[4px] border-black-primary"
      id="contact"
    >
      <div className="px-[40px] py-[20px]">
        <h2 className="desktop:text-title-primary text-title-secondary  text-white-primary font-bold">Contact Us</h2>
      </div>
      <form className="desktop:w-[1050px] w-auto lg:w-[900px] bg-white-primary p-[32px] h-[500px] flex flex-col items-stretch justify-between self-center ">
        <div className="grid grid-cols-2 grid-rows-4 gap-2 flex-1 max-h-[300px] mb-14 text-paragraph-secondary">
          <Input placeholder="First Name" type="text" />
          <Input placeholder="Last Name" type="text" />
          <Input placeholder="email" type="email" className=" col-start-1 col-span-2 " />
          <Input placeholder="Subject" type="text" className=" col-start-1 col-span-2 " />
          <TextArea placeholder="Message" className=" col-start-1 col-span-2 " />
        </div>

        <div className="w-[100px] h-[80px]  border-y-2 bg-black-primary text-white-secondary text-nav relative mx-auto mt-5">
          <button className="gap-2 flex items-center justify-center w-full h-full">
            <span>Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
