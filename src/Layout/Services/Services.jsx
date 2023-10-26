import ShortBanner from "../../Sheare/shortBanner";

const Services = () => {
  return (
    <div>
      <ShortBanner>Service Details</ShortBanner>
      <div className="flex gap-6 mt-32">
        <div className="w-2/3">
          <img
            src="../../../src/assets/images/services/2.jpg"
            alt=""
            className="h-[400px] w-full rounded-xl"
          />
          <h2 className="text-4xl font-bold mt-12">
            Unique Car Engine Service
          </h2>
          <p className="mt-8 text-[#737373] text-base font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
            <div className="p-10 rounded-lg border-t-2 bg-[#F3F3F3] border-primary">
              <h3 className=" text-5 font-bold mb-1 ">Instant Car Services</h3>
              <p className="leading-7">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="p-10 rounded-lg border-t-2 bg-[#F3F3F3] border-primary">
              <h3 className=" text-5 font-bold mb-1 ">24/7 Quality Service</h3>
              <p className="leading-7">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="p-10 rounded-lg border-t-2 bg-[#F3F3F3] border-primary">
              <h3 className=" text-5 font-bold mb-1 ">Easy Customer Service</h3>
              <p className="leading-7">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="p-10 rounded-lg border-t-2 bg-[#F3F3F3] border-primary">
              <h3 className=" text-5 font-bold mb-1 ">Quality Cost Service</h3>
              <p className="leading-7">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <div>
            <p className="mt-8 text-[#737373] text-base font-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <h3 className="text-3xl font-bold mt-12">
              3 Simple Steps to Process
            </h3>
            <p className="mt-8 text-[#737373] text-base font-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid grid-cols-3 mt-12 gap-4">
              <div className="border p-8 rounded-lg flex justify-center text-center w-full">
                <div className="w-full mx-auto ">
                  <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-red-300 ">
                    <span className="text-xl w-16 h-16 rounded-full flex items-center justify-center font-bold bg-red-500 text-white">
                      01
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mt-5">Step One</h2>
                  <p className="text-base font-normal">
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
              </div>
              <div>
                <div className="border p-8 rounded-lg flex justify-center text-center w-full">
                  <div className="w-full mx-auto ">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-red-300 ">
                      <span className="text-xl w-16 h-16 rounded-full flex items-center justify-center font-bold bg-red-500 text-white">
                        02
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mt-5">Step Two</h2>
                    <p className="text-base font-normal">
                      It uses a dictionary <br /> of over 200 .
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border p-8 rounded-lg flex justify-center text-center w-full">
                  <div className="w-full mx-auto ">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-red-300 ">
                      <span className="text-xl w-16 h-16 rounded-full flex items-center justify-center font-bold bg-red-500 text-white">
                        03
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mt-5">Step Three</h2>
                    <p className="text-base font-normal">
                      It uses a dictionary <br /> of over 200 .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 mb-32">
              <img
                src="../../../src/assets/images/services/4.jpg"
                alt=""
                className="h-[400px] w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className=" p-10 bg-[#F3F3F3] rounded-md">
            <h2 className=" text-6 font-bold">Services</h2>
          </div>
          <div className="bg-black p-10 text-white my-8 rounded-md">
            <h2 className="text-6 font-bold">Download</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
