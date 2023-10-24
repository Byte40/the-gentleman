import React from "react";

import { Img, Text } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-naste h-[1024px] mx-auto relative w-full">
        <div className="sm:h-[1022px] h-[1024px] md:h-[1616px] m-auto md:px-5 w-full">
          <div className="sm:h-[1022px] h-[1024px] md:h-[1616px] m-auto w-full">
            <div className="absolute h-[1022px] md:h-[1616px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[1022px] m-auto object-cover w-full"
                src="images/img_clothing1_1022x1440.png"
                alt="clothingOne"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[215px] h-max inset-[0] justify-center m-auto w-[94%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[72px] w-[94%] md:w-full">
                  <Img
                    className="h-[676px] sm:h-auto object-cover w-[24%] md:w-full"
                    src="images/img_clothes1.png"
                    alt="clothesOne"
                  />
                  <div className="flex flex-col md:gap-10 gap-[159px] justify-start md:mt-0 mt-[198px] w-[10%] md:w-full">
                    <Text
                      className="bg-gradient  border border-orange-500_4c border-solid pb-2 pt-0.5 sm:px-5 px-[25px] text-shadow-ts text-white-A700 text-xl"
                      size="txtNasteLight20"
                    >
                      Details
                    </Text>
                    <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start md:ml-[0] ml-[54px] p-[7px] shadow-bs w-[24%] md:w-full">
                      <Img
                        className="h-3.5"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient2  h-[42px] md:ml-[0] ml-[27px] md:mt-0 mt-[633px] rounded-[161px] w-[26%]"></div>
                  <Img
                    className="h-[675px] sm:h-auto md:ml-[0] ml-[166px] object-cover w-[26%] md:w-full"
                    src="images/img_clothes31.png"
                    alt="clothesThirtyOne"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-abhayalibre md:gap-10 items-center justify-between w-full">
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
            <div className="absolute h-[816px] right-[21%] top-[0] w-1/4">
              <Img
                className="h-[816px] m-auto object-cover w-full"
                src="images/img_clothes11_816x355.png"
                alt="clothesEleven"
              />
              <div className="absolute bottom-[40%] flex flex-col gap-[57px] justify-start right-[28%] w-[32%]">
                <Text
                  className="bg-gradient  border border-orange-500_4c border-solid pb-2 pt-[3px] sm:px-5 px-[29px] text-shadow-ts text-white-A700 text-xl"
                  size="txtNasteLight20"
                >
                  Order
                </Text>
                <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start ml-3 md:ml-[0] p-[7px] shadow-bs w-[24%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900_72 flex flex-row font-abhayalibre inset-x-[0] items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[50px] top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtAbhayaLibreRegular25"
              >
                THE GENTLEMAN
              </Text>
              <Img
                className="h-4 md:ml-[0] ml-[941px] w-[104px]"
                src="images/img_frame2.svg"
                alt="frameTwo"
              />
              <div className="bg-orange-400 h-[66px] md:ml-[0] ml-[42px] w-[9%]"></div>
            </div>
          </div>
          <div className="absolute border-[5px] border-solid bottom-[27%] h-[115px] inset-x-[0] mx-auto rounded-[223px] w-[32%] white_A700_orange_400_00_border2"></div>
        </div>
        <div className="absolute bg-orange-400_66 border border-orange-400_38 border-solid bottom-[24%] flex flex-col h-[58px] inset-x-[0] items-center justify-start mx-auto p-[11px] md:px-5 rounded-[50%] w-[58px]">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-end p-[13px] w-[34px]"
            style={{ backgroundImage: "url('images/img_group32.svg')" }}
          >
            <div className="bg-white-A700 h-[7px] rounded-[3px] w-[7px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
