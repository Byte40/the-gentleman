import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Img, Line, Text } from "components";

const DesktopOnePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div
        className="common-pointer bg-white-A700 font-abhayalibre h-[1024px] mx-auto relative w-full"
        onClick={() => googleSignIn()}
      >
        <div className="absolute md:h-[1024px] h-[1026px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute md:h-[1020px] h-[1022px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[1020px] h-[1022px] m-auto w-full">
              <div className="absolute md:h-[1020px] h-[1022px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[1020px] h-[1022px] m-auto w-full">
                  <div className="absolute h-[1020px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[1020px] m-auto w-full">
                      <Img
                        className="h-[1020px] m-auto object-cover w-full"
                        src="images/img_clothing1.png"
                        alt="clothingOne"
                      />
                      <Img
                        className="absolute h-[676px] left-[8%] object-cover top-[6%] w-[21%]"
                        src="images/img_clothes1.png"
                        alt="clothesOne"
                      />
                    </div>
                    <div className="absolute flex flex-col md:gap-10 gap-[215px] h-max inset-[0] items-center justify-center m-auto w-[94%]">
                      <div className="bg-gradient1  h-[654px] rounded-[50%] w-[654px]"></div>
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-[15px] text-white-A700 tracking-[7.88px] uppercase"
                          size="txtAbhayaLibreRegular15"
                        >
                          The best luxuries
                        </Text>
                        <Text
                          className="text-[15px] text-white-A700 tracking-[7.88px] uppercase"
                          size="txtAbhayaLibreRegular15"
                        >
                          custom clothing
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute font-naste h-[907px] inset-x-[0] mx-auto top-[0] w-[70%] md:w-full">
                    <Img
                      className="h-[907px] m-auto object-cover w-full"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="absolute h-[907px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[907px] m-auto object-cover w-full"
                        src="images/img_ellipse6.png"
                        alt="ellipseSix"
                      />
                      <div className="absolute bottom-[18%] flex flex-col inset-x-[0] justify-start mx-auto w-[62%]">
                        <Text
                          className="bg-gradient  border border-orange-500_4c border-solid pb-2 pt-0.5 sm:px-5 px-[25px] text-shadow-ts text-white-A700 text-xl"
                          size="txtNasteLight20"
                        >
                          Details
                        </Text>
                        <Text
                          className="bg-gradient  border border-orange-500_4c border-solid md:ml-[0] ml-[504px] mt-[65px] pb-2 pt-[3px] sm:px-5 px-[29px] text-shadow-ts text-white-A700 text-xl"
                          size="txtNasteLight20"
                        >
                          Order
                        </Text>
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[54px] mr-[75px] mt-[57px] w-4/5 md:w-full">
                          <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start p-[7px] shadow-bs w-[6%]">
                            <Img
                              className="h-3.5"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start p-[7px] shadow-bs w-[6%]">
                            <Img
                              className="h-3.5"
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                        <div className="bg-gradient2  h-[42px] md:ml-[0] ml-[140px] mt-[210px] rounded-[161px] w-[53%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[675px] object-cover right-[5%] top-[6%] w-[23%]"
                  src="images/img_clothes31.png"
                  alt="clothesThirtyOne"
                />
                <Img
                  className="absolute h-[707px] inset-x-[0] mx-auto object-cover top-[0] w-1/4"
                  src="images/img_clothes11.png"
                  alt="clothesEleven"
                />
              </div>
              <div className="absolute bg-black-900_72 flex flex-row inset-x-[0] items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[50px] top-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtAbhayaLibreRegular25"
                  >
                    SUITON
                  </Text>
                  <Img
                    className="h-4 md:ml-[0] ml-[1044px] w-[104px]"
                    src="images/img_frame2.svg"
                    alt="frameTwo"
                  />
                  <div className="bg-orange-400 h-[66px] md:ml-[0] ml-[42px] w-[9%]"></div>
                </div>
              </div>
            </div>
            <div className="absolute border-[5px] border-solid bottom-[27%] h-[115px] inset-x-[0] mx-auto rounded-[223px] w-[32%] white_A700_orange_400_00_border"></div>
          </div>
          <div className="absolute bg-orange-400_66 border border-orange-400_38 border-solid bottom-[24%] flex flex-col h-[58px] inset-x-[0] items-center justify-start mx-auto p-[11px] rounded-[50%] w-[58px]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-end p-[13px] w-[34px]"
              style={{ backgroundImage: "url('images/img_group32.svg')" }}
            >
              <div className="bg-white-A700 h-[7px] rounded-[3px] w-[7px]"></div>
            </div>
          </div>
          <Img
            className="absolute h-[1024px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_rectangle1.png"
            alt="rectangleOne"
          />
        </div>
        <div className="absolute bg-gray-900 flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1409px] p-[119px] md:px-5 w-full">
          <Text
            className="mt-[322px] md:text-5xl text-[140px] text-shadow-ts1 text-white-A700"
            size="txtAbhayaLibreRegular140"
          >
            THE GENTLEMAN
          </Text>
          <Text
            className="text-white-A700 text-xl"
            size="txtAbhayaLibreMedium20"
          >
            START EXPERIENCE
          </Text>
          <Line className="bg-orange-400 h-0.5 mb-[266px] mt-[9px] w-[17%]" />
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
