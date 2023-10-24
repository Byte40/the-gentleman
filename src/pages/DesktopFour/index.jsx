import React from "react";

import { Button, Img, Text } from "components";

const DesktopFourPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-naste h-[1024px] mx-auto relative w-full">
        <div className="md:h-[1022px] h-[1023px] m-auto md:px-5 w-full">
          <div className="absolute h-[1022px] inset-[0] justify-center m-auto w-full">
            <div className="h-[1022px] m-auto w-full">
              <div className="absolute h-[1022px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[1022px] m-auto object-cover w-full"
                  src="images/img_clothing1_1022x1439.png"
                  alt="clothingOne"
                />
                <div className="absolute flex flex-col items-center justify-start left-[15%] rotate-[180deg] top-[21%] w-[23%]">
                  <div className="md:h-[442px] h-[445px] relative w-full">
                    <div className="absolute h-[406px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        className="h-[406px] m-auto object-cover w-full"
                        src="images/img_rectangle_406x318.png"
                        alt="rectangle"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[95%]">
                        <Img
                          className="h-[397px] md:h-auto object-cover w-full"
                          src="images/img_rectangle_2.png"
                          alt="rectangle_One"
                        />
                      </div>
                    </div>
                    <div className="absolute h-[442px] inset-[0] justify-center m-auto w-[98%]">
                      <Img
                        className="h-[442px] m-auto object-cover w-full"
                        src="images/img_rectangle_3.png"
                        alt="rectangle_Two"
                      />
                      <div className="absolute bg-gradient  border border-orange-500_4c border-solid bottom-[39%] flex flex-col items-start justify-start p-[7px] right-[9%] shadow-bs w-[9%]">
                        <Img
                          className="h-3.5"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrowleft"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient2  bottom-[28%] h-[42px] inset-x-[0] mx-auto rounded-[161px] w-[23%]"></div>
              <Img
                className="absolute h-[675px] object-cover right-[5%] top-[6%] w-[23%]"
                src="images/img_clothes31.png"
                alt="clothesThirtyOne"
              />
              <div className="absolute bottom-[5%] flex sm:flex-col flex-row font-abhayalibre md:gap-10 inset-x-[0] items-center justify-between mx-auto w-[94%]">
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
              <Text
                className="absolute bg-gradient  border border-orange-500_4c border-solid left-[29%] pb-2 pt-0.5 sm:px-5 px-[25px] text-shadow-ts text-white-A700 text-xl top-[26%]"
                size="txtNasteLight20"
              >
                Details
              </Text>
              <div className="absolute bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start p-[7px] right-[33%] shadow-bs top-[45%] w-[2%]">
                <Img
                  className="h-3.5"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <div className="absolute border-[5px] border-solid bottom-[27%] h-[115px] inset-x-[0] mx-auto rounded-[223px] w-[32%] white_A700_orange_400_00_border4"></div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat bottom-1/4 flex flex-col h-[34px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-[34px]"
              style={{ backgroundImage: "url('images/img_group111.svg')" }}
            >
              <div className="bg-white-A700 h-[7px] rounded-[3px] w-[7px]"></div>
            </div>
          </div>
          <Img
            className="absolute h-[707px] object-cover right-[3%] top-[0] w-1/4"
            src="images/img_clothes11.png"
            alt="clothesEleven"
          />
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
              className="h-4 md:ml-[0] ml-[940px] w-[104px]"
              src="images/img_frame2.svg"
              alt="frameTwo"
            />
            <div className="bg-orange-400 h-[66px] md:ml-[0] ml-[42px] w-[9%]"></div>
          </div>
        </div>
        <Button className="absolute cursor-pointer font-light leading-[normal] min-w-[112px] right-[28%] text-center text-xl top-[36%]">
          Order
        </Button>
      </div>
    </>
  );
};

export default DesktopFourPage;
