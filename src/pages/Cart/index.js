import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const CartPage = () => {
  const navigate = useNavigate();

  const handleNavigate9 = () => navigate("/");
  const handleNavigate2 = () => navigate("/signup");
  const handleBackNavigation7 = () => navigate(-1);
  const handleNavigate17 = () => navigate("/payment");

  return (
    <>
      <Column className="bg-gray_200 font-brandongrotesque items-center justify-end mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1153px] lg:h-[747px] xl:h-[854px] h-[959.5px] 2xl:h-[961px] lg:mb-[20px] xl:mb-[23px] mb-[26.5px] 2xl:mb-[26px] 3xl:mb-[31px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] mx-[auto] w-[94%]">
          <Row className="absolute inset-y-[0] items-start justify-between left-[1%] right-[0] w-[99%]">
            <Column className="items-start justify-start lg:mb-[365px] xl:mb-[417px] mb-[469.44px] 2xl:mb-[469px] 3xl:mb-[563px] w-[68%]">
              <Column className="font-alike w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
                    <span className="text-yellow_900 font-allerta">
                      <>{`One`}</>
                    </span>
                    <span className="text-black_900 font-allerta">
                      <>{`Hour`}</>
                    </span>
                  </Text>
                  <Row className="font-cabin items-center justify-between lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[29%]">
                    <Text
                      className="common-pointer font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_902 tracking-ls1"
                      onClick={handleNavigate9}
                    >{`Home`}</Text>
                    <Text className="font-medium text-black_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1">{`Login`}</Text>
                    <Text
                      className="common-pointer font-medium text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                      onClick={handleNavigate2}
                    >{`Sign up`}</Text>
                  </Row>
                </Row>
              </Column>
              <Row
                className="common-pointer font-cabin items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] rounded-radius10 w-[10%]"
                onClick={handleBackNavigation7}
              >
                <Image
                  src="img_icon_1.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Icon"
                />
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
              </Row>
              <Text className="font-cabin font-normal lg:mt-[36px] xl:mt-[41px] mt-[47px] 3xl:mt-[56px] 3xl:mx-[105px] lg:mx-[68px] xl:mx-[78px] mx-[88px] lg:text-fs37 xl:text-fs43 2xl:text-fs48 text-fs4883000183105469 3xl:text-fs58 text-gray_900 text-left">{`Check items in cart`}</Text>
              <Column className="font-roboto lg:mt-[110px] xl:mt-[126px] mt-[142px] 3xl:mt-[170px] w-[100%]">
                <Row className="items-end justify-start w-[100%]">
                  <Image
                    src="img_rectangle47_2.png"
                    className="xl:h-[102px] h-[114.06px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain w-[19%]"
                    alt="Rectangle47"
                  />
                  <Column className="items-start justify-start xl:mb-[1px] lg:mb-[1px] mb-[2.06px] 3xl:mb-[2px] 2xl:mb-[2px] lg:ml-[32px] xl:ml-[37px] ml-[41.94px] 2xl:ml-[41px] 3xl:ml-[50px] w-[36%]">
                    <Text className="font-bold font-roboto leading-lh text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left tracking-ls1 w-[100%]">{`Goodday cookeis`}</Text>
                    <Text className="font-alata font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1">{`2packs`}</Text>
                  </Column>
                  <Column className="items-start justify-start lg:mb-[12px] xl:mb-[14px] mb-[16.06px] 2xl:mb-[16px] 3xl:mb-[19px] xl:ml-[112px] ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[15%]">
                    <Column className="items-center w-[100%]">
                      <Row className="items-center justify-evenly mr-[2.75px] 2xl:mr-[2px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] w-[98%]">
                        <Image
                          src="img_group_1.svg"
                          className="lg:h-[22px] xl:h-[25px] h-[27.62px] 2xl:h-[28px] 3xl:h-[34px] xl:mb-[4px] lg:mb-[4px] mb-[5.24px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[10.3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] object-contain w-[26%]"
                          alt="Group"
                        />
                        <Text className="font-normal not-italic lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-yellow_900 tracking-ls1">{`10,000`}</Text>
                      </Row>
                    </Column>
                    <Row className="font-cabin items-center justify-end ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] mt-[5.84px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[79%]">
                      <Image
                        src="img_increasebutton.svg"
                        className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] object-contain rounded-radius9 lg:w-[26px] xl:w-[30px] w-[34px] 3xl:w-[40px]"
                        alt="IncreaseButton"
                      />
                      <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`2`}</Text>
                      <Image
                        src="img_decreasebutton.svg"
                        className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] object-contain rounded-radius9 lg:w-[26px] xl:w-[30px] w-[34px] 3xl:w-[40px]"
                        alt="DecreaseButton"
                      />
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Row className="items-start justify-between lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[30%]">
              <Line className="bg-yellow_900 3xl:h-[1099px] lg:h-[712px] xl:h-[814px] h-[914.5px] 2xl:h-[916px] w-[4px]" />
              <Column className="items-start justify-start lg:mb-[35px] xl:mb-[40px] mb-[45.5px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[131px] xl:mt-[150px] mt-[169px] 3xl:mt-[202px] w-[93%]">
                <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left tracking-ls1">{`Delivery address`}</Text>
                <Input
                  className="placeholder:bg-colors bg-white_A700 border-0 font-normal lg:mt-[24px] xl:mt-[28px] mt-[31.98px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:pb-[5px] xl:pb-[6px] pb-[7.6600003px] 2xl:pb-[7px] 3xl:pb-[9px] lg:pl-[21px] xl:pl-[24px] pl-[27.329956px] 2xl:pl-[27px] 3xl:pl-[32px] pt-[2.7600002px] 2xl:pt-[2px] xl:pt-[2px] lg:pt-[2px] 3xl:pt-[3px] rounded-radius10 shadow-bs lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 placeholder:text-gray_400 text-gray_400 text-left tracking-ls1 w-[100%]"
                  name="10th avenue, Le"
                  placeholder={`10th avenue, Lekki, Lagos State`}
                ></Input>
                <Column className="font-cabin items-end lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Button className="border border-gray_900 border-solid font-normal lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] xl:mr-[2px] lg:mr-[2px] mr-[3px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.375px] 2xl:py-[9px] rounded-radius11 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[26%]">{`Change`}</Button>
                </Column>
                <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] text-bluegray_900 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left tracking-ls1">{`Number we can call`}</Text>
                <Input
                  className="placeholder:bg-colors bg-white_A700 border-0 font-normal xl:mr-[2px] lg:mr-[2px] mr-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:pb-[6px] lg:pb-[6px] pb-[7.7200003px] 2xl:pb-[7px] 3xl:pb-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:pt-[5px] lg:pt-[5px] pt-[6.7200003px] 2xl:pt-[6px] 3xl:pt-[8px] rounded-radius10 shadow-bs lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 placeholder:text-gray_400 text-gray_400 text-left tracking-ls1 w-[99%]"
                  name="09090605708"
                  placeholder={`09090605708`}
                ></Input>
                <Column className="font-cabin items-end lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Button className="border border-gray_900 border-solid font-normal lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] xl:mr-[2px] lg:mr-[2px] mr-[3px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.375px] 2xl:py-[9px] rounded-radius11 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[26%]">{`Change`}</Button>
                </Column>
                <Column className="font-brandongrotesque lg:mt-[126px] xl:mt-[144px] mt-[162px] 3xl:mt-[194px] w-[100%]">
                  <Row className="items-center justify-end w-[100%]">
                    <Column className="items-start w-[28%]">
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Total`}</Text>
                      <Column className="w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Image
                            src="img_group_2.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain w-[19%]"
                            alt="Group"
                          />
                          <Text className="font-medium text-bluegray_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1">{`60,000`}</Text>
                        </Row>
                      </Column>
                    </Column>
                    <Button
                      className="common-pointer bg-yellow_900 font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[14px] xl:mr-[16px] mr-[18px] 3xl:mr-[21px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius10 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[53%]"
                      onClick={handleNavigate17}
                    >{`Checkout`}</Button>
                  </Row>
                  <Row className="lg:gap-[17px] xl:gap-[20px] gap-[23px] 3xl:gap-[27px] grid grid-cols-3 items-start justify-center xl:mt-[107px] mt-[121px] 3xl:mt-[145px] lg:mt-[94px] w-[100%]">
                    <Image
                      src="img_image11_1.png"
                      className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[33px] xl:w-[38px] w-[43px] 3xl:w-[51px]"
                      alt="image11"
                    />
                    <Image
                      src="img_image12_1.png"
                      className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] my-[1px] object-contain lg:w-[33px] xl:w-[38px] w-[43px] 3xl:w-[51px]"
                      alt="image12"
                    />
                    <Image
                      src="img_image13_1.png"
                      className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] xl:mb-[1px] lg:mb-[1px] mb-[2px] object-contain lg:w-[33px] xl:w-[38px] w-[43px] 3xl:w-[51px]"
                      alt="image13"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
          </Row>
          <Stack className="absolute bottom-[5%] font-roboto lg:h-[224px] xl:h-[257px] h-[288px] 2xl:h-[289px] 3xl:h-[346px] left-[0] w-[65%]">
            <Stack className="absolute lg:h-[224px] xl:h-[257px] h-[288px] 2xl:h-[289px] 3xl:h-[346px] inset-[0] w-[100%]">
              <Image
                src="img_iteminbag.svg"
                className="absolute lg:h-[224px] xl:h-[257px] h-[288px] 2xl:h-[289px] 3xl:h-[346px] inset-[0] object-cover rounded-radius21 w-[100%]"
                alt="ItemInBag"
              />
              <Image
                src="img_rectangle73_3.png"
                className="absolute lg:h-[175px] xl:h-[200px] h-[224.56px] 2xl:h-[225px] 3xl:h-[270px] inset-y-[0] left-[0] my-[auto] object-contain w-[19%]"
                alt="Rectangle73"
              />
            </Stack>
            <Row className="absolute h-[max-content] inset-y-[0] items-start justify-between my-[auto] right-[4%] w-[70%]">
              <Column className="items-start justify-start lg:mb-[17px] xl:mb-[20px] mb-[23px] 3xl:mb-[27px] w-[50%]">
                <Text className="font-bold font-roboto xl:ml-[2px] lg:ml-[2px] ml-[3px] text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left tracking-ls1">{`212 fresh bread`}</Text>
                <Text className="font-alata font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1">{`2packs`}</Text>
              </Column>
              <Column className="items-start justify-start lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[23%]">
                <Column className="items-center w-[100%]">
                  <Row className="items-center justify-evenly mr-[2.75px] 2xl:mr-[2px] xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] w-[98%]">
                    <Image
                      src="img_group_3.svg"
                      className="lg:h-[22px] xl:h-[25px] h-[27.62px] 2xl:h-[28px] 3xl:h-[34px] xl:mb-[4px] lg:mb-[4px] mb-[5.24px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[10.3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] object-contain w-[26%]"
                      alt="Group"
                    />
                    <Text className="font-normal not-italic lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-yellow_900 tracking-ls1">{`10,000`}</Text>
                  </Row>
                </Column>
                <Row className="font-cabin items-center justify-end ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] mt-[5.84px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[79%]">
                  <Image
                    src="img_increasebutton.svg"
                    className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] object-contain rounded-radius9 lg:w-[26px] xl:w-[30px] w-[34px] 3xl:w-[40px]"
                    alt="IncreaseButton"
                  />
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`2`}</Text>
                  <Image
                    src="img_decreasebutton.svg"
                    className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] object-contain rounded-radius9 lg:w-[26px] xl:w-[30px] w-[34px] 3xl:w-[40px]"
                    alt="DecreaseButton"
                  />
                </Row>
              </Column>
            </Row>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default CartPage;
