import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const DesktopThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-abhayalibre h-[1024px] mx-auto relative shadow-bs1 w-full">
        <div className="md:h-[1022px] h-[1023px] m-auto md:px-5 w-full">
          <div className="absolute md:h-[1022px] h-[1023px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[1022px] h-[1023px] m-auto w-full">
              <div className="absolute md:h-[1022px] h-[1023px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[1022px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_enfoque.png"
                  alt="enfoque"
                />
                <div className="absolute h-[1020px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[1020px] m-auto w-full">
                    <Img
                      className="h-[1020px] m-auto object-cover w-full"
                      src="images/img_clothing1_1020x1440.png"
                      alt="clothingOne"
                    />
                    <Img
                      className="absolute h-[676px] left-[8%] object-cover top-[6%] w-[21%]"
                      src="images/img_clothes1.png"
                      alt="clothesOne"
                    />
                  </div>
                  <div className="absolute bg-gradient1  h-[654px] inset-x-[0] mx-auto rounded-[50%] top-[9%] w-[654px]"></div>
                </div>
                <Img
                  className="absolute h-[533px] object-cover right-[10%] top-[0] w-[70%]"
                  src="images/img_ellipse4_533x1002.png"
                  alt="ellipseFour"
                />
              </div>
              <div className="absolute flex flex-col items-center justify-start p-[27px] sm:px-5 right-[23%] top-[10%] w-[36%]">
                <div className="flex flex-col items-center justify-start w-[70%] md:w-full">
                  <div className="md:h-[442px] h-[445px] relative w-full">
                    <div className="absolute h-[406px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        className="h-[406px] m-auto object-cover w-full"
                        src="images/img_rectangle.png"
                        alt="rectangle"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[95%]">
                        <Img
                          className="h-[397px] md:h-auto object-cover w-full"
                          src="images/img_rectangle_397x299.png"
                          alt="rectangle_One"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[98%]">
                      <Img
                        className="h-[442px] md:h-auto object-cover w-full"
                        src="images/img_rectangle_442x310.png"
                        alt="rectangle_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[755px] right-[22%] top-[0] w-[39%] sm:w-full">
                <div className="absolute h-[686px] inset-x-[0] mx-auto top-[0] w-full">
                  <Img
                    className="h-[686px] m-auto object-cover w-full"
                    src="images/img_rectangle_686x549.png"
                    alt="rectangle_Three"
                  />
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[94%]">
                    <Img
                      className="h-[673px] md:h-auto object-cover w-full"
                      src="images/img_rectangle_673x516.png"
                      alt="rectangle_Four"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
                  <Img
                    className="h-[755px] md:h-auto object-cover w-full"
                    src="images/img_rectangle_755x535.png"
                    alt="rectangle_Five"
                  />
                </div>
              </div>
            </div>
            <div className="absolute h-[751px] left-[22%] rotate-[180deg] top-[0] w-[39%] sm:w-full">
              <div className="absolute h-[682px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[682px] m-auto object-cover w-full"
                  src="images/img_rectangle_682x549.png"
                  alt="rectangle_Six"
                />
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[94%]">
                  <Img
                    className="h-[670px] md:h-auto object-cover w-full"
                    src="images/img_rectangle_670x516.png"
                    alt="rectangle_Seven"
                  />
                </div>
              </div>
              <div className="absolute h-[751px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                <div className="h-[751px] m-auto w-full">
                  <Img
                    className="h-[751px] m-auto object-cover w-full"
                    src="images/img_rectangle_751x535.png"
                    alt="rectangle_Eight"
                  />
                  <div className="absolute flex flex-col items-center justify-start left-[16%] rotate-[180deg] top-[16%] w-3/5">
                    <div className="md:h-[442px] h-[445px] relative w-full">
                      <div className="absolute h-[406px] inset-x-[0] mx-auto top-[0] w-full">
                        <Img
                          className="h-[406px] m-auto object-cover w-full"
                          src="images/img_rectangle_406x318.png"
                          alt="rectangle_Nine"
                        />
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[95%]">
                          <Img
                            className="h-[397px] md:h-auto object-cover w-full"
                            src="images/img_rectangle_2.png"
                            alt="rectangle_Ten"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[98%]">
                        <Img
                          className="h-[442px] md:h-auto object-cover w-full"
                          src="images/img_rectangle_3.png"
                          alt="rectangle_Eleven"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[36%] flex flex-col md:gap-10 gap-[78px] items-center justify-start left-[4%] w-[15%]">
                  <div className="flex flex-row gap-[27px] items-center justify-between w-full">
                    <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-start justify-start shadow-bs w-auto">
                      <Img
                        className="h-[13px] w-3.5"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                    </div>
                    <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-start justify-start shadow-bs w-[26px]">
                      <Img
                        className="h-[13px] w-[9px]"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-[27px] items-center justify-between w-full">
                    <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start p-1.5 shadow-bs w-[33%]">
                      <Img
                        className="h-[13px] md:h-auto my-0.5 rounded-[50%] w-[13px]"
                        src="images/img_ellipse103.png"
                        alt="ellipse103"
                      />
                    </div>
                    <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start p-1.5 shadow-bs w-[33%]">
                      <Img
                        className="h-[13px] md:h-auto my-0.5 rounded-[50%] w-[13px]"
                        src="images/img_ellipse104.png"
                        alt="ellipse104"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient2  bottom-[28%] h-[42px] inset-x-[0] mx-auto rounded-[161px] w-[23%]"></div>
          <div className="absolute h-[675px] right-[5%] top-[6%] w-[23%]">
            <Img
              className="h-[675px] m-auto object-cover w-full"
              src="images/img_clothes31.png"
              alt="clothesThirtyOne"
            />
            <div className="absolute bottom-1/4 flex flex-col md:gap-10 gap-[156px] justify-start right-[21%] w-[53%]">
              <div className="flex flex-row font-abhayalibremedium gap-1.5 items-start justify-start w-[33%] md:w-full">
                <Line className="bg-white-A700 h-[15px] w-px" />
                <Text
                  className="mt-0.5 text-[10px] text-white-A700"
                  size="txtAbhayaLibreMedium10"
                >
                  233 reviews
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[134px] md:ml-[0] ml-[37px]"
                leftIcon={
                  <Img
                    className="mt-[3px] mb-1 mr-2.5"
                    src="images/img_icon_credit_card.svg"
                    alt='🦆 icon "credit card"'
                  />
                }
                size="sm"
              >
                <div className="font-light font-naste text-[15px] text-left">
                  Buy Now
                </div>
              </Button>
            </div>
          </div>
          <div className="absolute bg-black-900_72 flex flex-row inset-x-[0] items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[50px] top-[0] w-full">
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
          <div className="absolute border-[5px] border-solid bottom-[27%] h-[115px] inset-x-[0] mx-auto rounded-[223px] w-[32%] white_A700_orange_400_00_border3"></div>
        </div>
        <div className="absolute bg-orange-400_66 border border-orange-400_38 border-solid bottom-[24%] flex flex-col h-[58px] inset-x-[0] items-center justify-start mx-auto p-[11px] md:px-5 rounded-[50%] w-[58px]">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-end p-[13px] w-[34px]"
            style={{ backgroundImage: "url('images/img_group111.svg')" }}
          >
            <div className="bg-white-A700 h-[7px] rounded-[3px] w-[7px]"></div>
          </div>
        </div>
        <div className="absolute flex flex-col font-naste items-start justify-start left-[21%] md:px-5 top-[30%] w-[4%]">
          <Text className="text-white-A700 text-xl" size="txtNasteLight20">
            Size
          </Text>
          <Input
            name="frameThree"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex mt-[15px] w-auto"
            suffix={
              <div className="ml-[7px] sm:w-full sm:mx-0 w-1/5 bg-white-A700">
                <Img className="my-auto" src="images/img_s.svg" alt="S" />
              </div>
            }
          ></Input>
          <Text className="mt-9 text-white-A700 text-xl" size="txtNasteLight20">
            Color
          </Text>
          <div className="bg-gradient  border border-orange-500_4c border-solid flex flex-col items-center justify-start mt-4 p-1.5 shadow-bs w-[52%] md:w-full">
            <Img
              className="h-[13px] md:h-auto my-0.5 rounded-[50%] w-[13px]"
              src="images/img_ellipse102.png"
              alt="ellipse102"
            />
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start md:px-5 right-[9%] top-[30%] w-[22%]">
          <Text
            className="leading-[22.00px] text-white-A700 text-xl w-[98%] sm:w-full"
            size="txtAbhayaLibreMedium20"
          >
            Kincaid No. 2 Suit in Charcoal Plainweave
          </Text>
          <Img
            className="h-3 ml-0.5 md:ml-[0] mt-3 w-[104px]"
            src="images/img_frame9.svg"
            alt="frameNine"
          />
          <Text
            className="mt-[38px] text-white-A700 text-xl"
            size="txtNasteLight20"
          >
            Description
          </Text>
          <Text
            className="mt-[3px] text-[10px] text-white-A700 w-full"
            size="txtNasteLight10"
          >
            Lorem ipsum dolor sit amet consectetur. Tincidunt cursus in quisque
            eget risus in eu amet semper. Id egestas placerat diam aliquet augue
            ante. Vivamus lacinia libero posuere nulla. Leo sed ullamcorper
            aliquet posuere. In sed urna fringilla ante commodo. Cursus a et
            duis purus tincidunt. Et at vitae scelerisque dui morbi.
          </Text>
          <Input
            name="addtocart"
            placeholder="Add to cart"
            className="!placeholder:text-white-A700 !text-white-A700 font-light font-naste p-0 text-[15px] text-left w-full"
            wrapClassName="flex mt-[22px] w-[45%]"
            prefix={
              <div className="mt-1 mb-px mr-2.5 sm:w-full sm:mx-0 w-[6%] outline-orange-400 outline-[0.5px] outline">
                <Img
                  className="my-auto"
                  src="images/img_trash.svg"
                  alt="trash"
                />
              </div>
            }
            size="sm"
          ></Input>
        </div>
        <Img
          className="absolute h-[699px] inset-x-[0] mx-auto object-cover top-[0] w-1/4"
          src="images/img_clothes11_699x355.png"
          alt="clothesEleven"
        />
      </div>
    </>
  );
};

export default DesktopThreePage;
