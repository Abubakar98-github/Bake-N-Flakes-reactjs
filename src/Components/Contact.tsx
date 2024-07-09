export default function contact() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-96 w-full">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-24 gap-10 xl:px-36 2xl:px-44 py-10 md:py-16">
          <div className="">
            <h1 className="text-4xl font-bold text-pink-500">Newsletter</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row relative">
            <input
              type=" email"
              placeholder="Enter your email "
              className="outline-none border border-gray-300 h-8 w-96  focus:border focus:border-pink-500 rounded-full pl-5 py-6 relative"
            />
            <button className="bg-pink-500 absolute right-2 top-1/2 -translate-y-1/2 font-semibold text-pink-200 hover:text-pink-500 hover:bg-pink-200 border  border-pink-400 transition-all whitespace-nowrap duration-300 px-6 py-2 rounded-full ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
