import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const SingleproductdescriptionPage = () => {
  const navigate = useNavigate();

  const handleNavigate8 = () => navigate("/");
  const handleNavigate3 = () => navigate("/login");
  const handleNavigate4 = () => navigate("/signup");
  const handleBackNavigation6 = () => navigate(-1);

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="lg:mb-[20px] xl:mb-[23px] mb-[26.5px] 2xl:mb-[26px] 3xl:mb-[31px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[100%]">
          <Row className="items-center justify-start w-[100%]">
            <Text className="font-normal lg:ml-[52px] xl:ml-[60px] ml-[68px] 3xl:ml-[81px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
              <span className="text-yellow_900 font-allerta">
                <>{`One`}</>
              </span>
              <span className="text-black_900 font-allerta">
                <>{`Hour`}</>
              </span>
            </Text>
            <Row className="font-cabin items-center justify-center lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[366px] xl:ml-[418px] ml-[471px] 3xl:ml-[565px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[19%]">
              <Text
                className="common-pointer font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_902 tracking-ls1"
                onClick={handleNavigate8}
              >{`Home`}</Text>
              <Text
                className="common-pointer font-medium lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] text-black_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                onClick={handleNavigate3}
              >{`Login`}</Text>
              <Text
                className="common-pointer font-medium lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                onClick={handleNavigate4}
              >{`Sign up`}</Text>
            </Row>
          </Row>
          <Row className="font-cabin items-end justify-start lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Column className="items-start justify-start lg:mb-[374px] xl:mb-[428px] mb-[481.5px] 2xl:mb-[481px] 3xl:mb-[578px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[20%]">
              <Row
                className="common-pointer items-center justify-start lg:mx-[20px] xl:mx-[23px] mx-[26px] 3xl:mx-[31px] rounded-radius10 w-[31%]"
                onClick={handleBackNavigation6}
              >
                <Image
                  src="img_icon_1.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Icon"
                />
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
              </Row>
              <Column className="lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] w-[100%]">
                <Stack className="bg-white_A700 lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] rounded-radius20 w-[100%]">
                  <Image
                    src="img_dsd1.png"
                    className="absolute lg:h-[193px] xl:h-[220px] h-[247px] 2xl:h-[248px] 3xl:h-[297px] inset-[0] justify-center m-[auto] object-contain w-[68%]"
                    alt="dsd1"
                  />
                </Stack>
              </Column>
            </Column>
            <Column className="font-roboto justify-start lg:mb-[372px] xl:mb-[425px] mb-[478.34px] 2xl:mb-[478px] 3xl:mb-[574px] lg:mt-[239px] xl:mt-[273px] mt-[308px] 3xl:mt-[369px] w-[23%]">
              <Text className="font-bold leading-lh text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left tracking-ls1 w-[100%]">{`Goodday cookeis`}</Text>
              <Row className="items-center justify-start mb-[0] 3xl:ml-[10px] ml-[9px] mr-[10px] 3xl:mr-[12px] lg:mx-[7px] xl:mx-[8px] w-[41%]">
                <Image
                  src="img_group_4.svg"
                  className="lg:h-[22px] xl:h-[25px] h-[27.62px] 2xl:h-[28px] 3xl:h-[34px] xl:mb-[4px] lg:mb-[4px] mb-[5.24px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[10.3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] object-contain w-[26%]"
                  alt="Group"
                />
                <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4.09px] 3xl:ml-[4px] 2xl:ml-[4px] not-italic lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-yellow_900 tracking-ls1">{`10,000`}</Text>
              </Row>
            </Column>
            <Line className="bg-yellow_900 3xl:h-[1099px] lg:h-[712px] xl:h-[814px] h-[914.5px] 2xl:h-[916px] lg:ml-[276px] xl:ml-[316px] ml-[356px] 3xl:ml-[427px] w-[4px]" />
            <Column className="font-brandongrotesque items-start justify-start lg:mb-[35px] xl:mb-[40px] mb-[45.5px] 2xl:mb-[45px] 3xl:mb-[54px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] lg:mt-[131px] xl:mt-[150px] mt-[169px] 3xl:mt-[202px] w-[26%]">
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
                  <Button className="bg-yellow_900 font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[14px] xl:mr-[16px] mr-[18px] 3xl:mr-[21px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius10 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[53%]">{`Checkout`}</Button>
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
        </Column>
      </Column>
    </>
  );
};

export default SingleproductdescriptionPage;
