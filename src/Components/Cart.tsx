export default function Cart() {
  return (
    <div>
      <div className="  lg:p-0 p-9  rounded-lg w-full md:w-[1000px] mx-2 md:mx-auto mt-5 mb-5">
        <h1 className="text-2xl mt-4">Product details</h1>
        <div className="mt-6   ">
          <img src="" alt="" />
          <div className="font-bold">
            <p>Name:</p>
            <p>$20 *3</p>
            <p>Total: $60</p>
          </div>
          <h2 className="text-lg mt-3">Enter payment details</h2>
          <div className="ml-3 ">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[450px] h-[92px] md:ml-[30px] mt-[30px]   ">
                <input
                  type="text"
                  className="w-full md:w-[450px] h-[50px] mt-2 pl-5 border border-gray-300 rounded  "
                  placeholder="First Name"
                  style={{ paddingLeft: "10px" }}
                />
              </div>

              <div className="w-full md:w-[450px] h-[92px]   md:ml-[30px] mt-[30px]  ">
                <input
                  type="text"
                  className="w-full md:w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                  placeholder="Last Name"
                  style={{ paddingLeft: "10px" }}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[450px] h-[92px] md:ml-[30px] mt-[10px]   ">
                <input
                  type="text"
                  className="w-full md:w-[450px] h-[50px] mt-2  border border-gray-300 rounded  "
                  placeholder="Email"
                  style={{ paddingLeft: "10px" }}
                />
                <input
                  type="text"
                  className="w-full md:w-[450px] h-[50px] mt-[40px]  border border-gray-300 rounded  "
                  placeholder="Address"
                  style={{ paddingLeft: "10px" }}
                />
              </div>

              <div className="w-full md:w-[450px] h-[92px]   md:ml-[30px] mt-[10px]  ">
                <input
                  type="text"
                  className="w-full md:w-[450px] h-[50px] mt-2 border border-gray-300 rounded"
                  placeholder="Card no"
                  style={{ paddingLeft: "10px" }}
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="w-full md:w-[450px] h-[50px] mt-[40px]  mr-0 md:mr-12 border pl-2 border-gray-300 rounded"
                />
              </div>
            </div>
            <button className="w-full md:w-[450px] h-[50px] md:ml-auto md:mr-0 mb-12  md:mt-[80px] bg-sky-200 rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
