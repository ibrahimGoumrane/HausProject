const Contact = () => {
  return (
    <div className="py-16 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name*
              </label>
              <input type="text" id="firstName" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name*
              </label>
              <input type="text" id="lastName" className="w-full px-4 py-2 border rounded-md" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input type="text" id="subject" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message*
            </label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
