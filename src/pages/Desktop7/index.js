import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Stack } from "components/Stack";

const Desktop7Page = () => {
  const navigate = useNavigate();

  const handleNavigate13 = () => navigate("/");
  const handleNavigate12 = () => navigate("/trackorder");

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="items-start justify-start 3xl:mb-[102px] lg:mb-[66px] xl:mb-[75px] mb-[85px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[100%]">
          <Text className="font-normal lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
            <span className="text-yellow_900 font-allerta">
              <>{`One`}</>
            </span>
            <span className="text-black_900 font-allerta">
              <>{`Hour`}</>
            </span>
          </Text>
          <Column className="font-cabin lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Row className="items-start justify-start w-[100%]">
              <Row className="items-center justify-center lg:mb-[619px] xl:mb-[708px] mb-[796px] 3xl:mb-[955px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] mt-[1px] rounded-radius10 w-[6%]">
                <Image
                  src="img_icon_1.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Icon"
                />
                <Text className="font-normal lg:m-[6px] xl:m-[7px] m-[8px] 3xl:m-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
              </Row>
              <Column className="bg-white_A700 font-alata lg:ml-[202px] xl:ml-[231px] ml-[260px] 3xl:ml-[312px] rounded-radius20 w-[49%]">
                <Row className="items-start justify-start lg:mt-[41px] xl:mt-[47px] mt-[53px] 3xl:mt-[63px] w-[100%]">
                  <Row className="items-start justify-start lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] w-[71%]">
                    <Stack className="lg:h-[263px] xl:h-[301px] h-[338px] 2xl:h-[339px] 3xl:h-[406px] w-[88%]">
                      <Stack className="absolute lg:h-[263px] xl:h-[301px] h-[338px] 2xl:h-[339px] 3xl:h-[406px] inset-[0] w-[100%]">
                        <Column className="absolute bottom-[4%] items-start justify-start right-[0] w-[64%]">
                          <div className="bg-green_400_1c lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius12 w-[10%]"></div>
                          <Column className="items-center w-[100%]">
                            <Image
                              src="img_group48.svg"
                              className="lg:h-[216px] xl:h-[247px] h-[276.67px] 2xl:h-[277px] 3xl:h-[333px] mr-[1px] object-contain lg:w-[215px] xl:w-[246px] w-[276.67px] 2xl:w-[276px] 3xl:w-[332px]"
                              alt="Group48"
                            />
                          </Column>
                        </Column>
                        <Row className="absolute items-start justify-between left-[0] top-[0] w-[60%]">
                          <div className="bg-gray_401 xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] rounded-radius55 w-[0]"></div>
                          <div className="bg-green_400_1c lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] rounded-radius12 w-[11%]"></div>
                        </Row>
                        <div className="absolute bg-green_400_1c bottom-[0] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[31%] rounded-radius12 w-[6%]"></div>
                      </Stack>
                      <Row className="absolute items-start justify-between left-[0] top-[11%] w-[39%]">
                        <Column className="items-start justify-start lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[16%]">
                          <Column className="items-end w-[100%]">
                            <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius8 w-[50%]"></div>
                          </Column>
                          <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[137px] xl:mt-[157px] mt-[177px] 3xl:mt-[212px] rounded-radius8 w-[50%]"></div>
                        </Column>
                        <Column className="items-start justify-start 3xl:mb-[115px] lg:mb-[74px] xl:mb-[85px] mb-[96px] w-[58%]">
                          <Column className="w-[100%]">
                            <Row className="items-start justify-between w-[100%]">
                              <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] rounded-radius8 w-[14%]"></div>
                              <div className="bg-green_400_1c lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius12 w-[28%]"></div>
                            </Row>
                          </Column>
                          <div className="bg-green_400_1c lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] mt-[99px] rounded-radius12 w-[28%]"></div>
                        </Column>
                      </Row>
                    </Stack>
                    <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[231px] xl:mt-[265px] mt-[298px] 3xl:mt-[357px] rounded-radius8 w-[3%]"></div>
                    <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[157px] xl:mb-[180px] mb-[203px] 3xl:mb-[243px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:mt-[105px] mt-[119px] 3xl:mt-[142px] lg:mt-[92px] rounded-radius8 w-[3%]"></div>
                  </Row>
                  <div className="bg-green_400_1c lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[101px] 3xl:mb-[121px] lg:mb-[78px] xl:mb-[89px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] lg:mt-[165px] xl:mt-[189px] mt-[213px] 3xl:mt-[255px] rounded-radius12 w-[4%]"></div>
                  <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[182px] xl:mb-[209px] mb-[235px] 3xl:mb-[282px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] mt-[87px] rounded-radius8 w-[2%]"></div>
                  <div className="bg-green_400_1c lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[45px] xl:mb-[51px] mb-[58px] 3xl:mb-[69px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[205px] xl:mt-[234px] mt-[264px] 3xl:mt-[316px] rounded-radius8 w-[2%]"></div>
                </Row>
                <Column className="items-start justify-start lg:mb-[105px] xl:mb-[120px] mb-[136px] 3xl:mb-[163px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[100%]">
                  <Column className="items-end w-[100%]">
                    <div className="bg-green_400_42 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mx-[224px] xl:mx-[257px] mx-[289px] 3xl:mx-[347px] rounded-radius12 w-[4%]"></div>
                  </Column>
                  <Stack className="lg:h-[108px] xl:h-[123px] h-[138px] 2xl:h-[139px] 3xl:h-[166px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] xl:mx-[108px] mx-[122px] 3xl:mx-[146px] lg:mx-[94px] w-[59%]">
                    <Text className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 top-[0] tracking-ls1 w-[max-content]">{`Congratulations!!!`}</Text>
                    <Text className="absolute bottom-[0] font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 not-italic text-bluegray_900 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 tracking-ls1 w-[100%]">{`Your order have been taken and is being attended to`}</Text>
                  </Stack>
                  <Column className="lg:mt-[19px] xl:mt-[22px] mt-[24.99px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="common-pointer bg-white_A701 border border-black_900 border-solid font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic lg:pb-[17px] xl:pb-[20px] pb-[22.929993px] 2xl:pb-[22px] 3xl:pb-[27px] lg:pt-[27px] xl:pt-[31px] pt-[35px] 3xl:pt-[42px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] rounded-radius10 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-yellow_900 tracking-ls1 w-[38%]"
                        onClick={handleNavigate13}
                      >{`Continue shopping`}</Text>
                      <Text
                        className="common-pointer bg-yellow_900 font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mr-[32px] xl:mr-[36px] mr-[41.47px] 2xl:mr-[41px] 3xl:mr-[49px] not-italic lg:pb-[25px] xl:pb-[29px] pb-[33px] 3xl:pb-[39px] lg:pl-[27px] xl:pl-[31px] pl-[34.940002px] 2xl:pl-[34px] 3xl:pl-[41px] lg:pr-[21px] xl:pr-[24px] pr-[27.53003px] 2xl:pr-[27px] 3xl:pr-[33px] pt-[1px] rounded-radius10 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_51 tracking-ls1 w-[28%]"
                        onClick={handleNavigate12}
                      >{`Track order`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Desktop7Page;
