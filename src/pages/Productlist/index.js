import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { List } from "components/List";

const ProductlistPage = () => {
  const navigate = useNavigate();

  const handleNavigate15 = () => navigate("/login");
  const handleNavigate14 = () => navigate("/signup");
  const handleNavigate16 = () => navigate("/cart");

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Row className="items-start justify-between lg:mb-[41px] xl:mb-[47px] mb-[53.5px] 2xl:mb-[53px] 3xl:mb-[64px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[100%]">
          <Column className="3xl:mb-[107px] lg:mb-[69px] xl:mb-[79px] mb-[89.5px] 2xl:mb-[89px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] w-[71%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="font-normal lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
                <span className="text-yellow_900 font-allerta">
                  <>{`One`}</>
                </span>
                <span className="text-black_900 font-allerta">
                  <>{`Hour`}</>
                </span>
              </Text>
              <Row className="font-cabin items-center justify-between lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[26%]">
                <Text className="font-medium text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1">{`Home`}</Text>
                <Text
                  className="common-pointer font-medium text-black_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                  onClick={handleNavigate15}
                >{`Login`}</Text>
                <Text
                  className="common-pointer font-medium text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                  onClick={handleNavigate14}
                >{`Sign up`}</Text>
              </Row>
            </Row>
            <Row className="font-cabin items-start justify-between lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[100%]">
              <Image
                src="img_icon.svg"
                className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[6%]"
                alt="Icon"
              />
              <div className="3xl:mr-[114px] bg-transparent border-0 lg:mr-[73px] mr-[95px] w-[71%] xl:mr-[84px] input-wrap">
                <Image
                  src="img_vector.svg"
                  className="absolute h-[30px] right-[19px] bg-transparent border-0 lg:h-[24px] lg:right-[14px] xl:h-[27px] xl:right-[16px] 2xl:h-[31px] 3xl:h-[37px] 3xl:right-[22px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border-0 font-medium lg:pb-[12px] xl:pb-[14px] pb-[16.060001px] 2xl:pb-[16px] 3xl:pb-[19px] pl-[11px] 3xl:pl-[13px] lg:pl-[8px] xl:pl-[9px] 3xl:pr-[117px] lg:pr-[76px] xl:pr-[87px] pr-[98px] lg:pt-[14px] xl:pt-[16px] pt-[19.060001px] 2xl:pt-[19px] 3xl:pt-[22px] rounded-radius10 placeholder:text-black_900_23 text-black_900_23 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left w-[100%]"
                  name="search"
                  placeholder={`search`}
                ></Input>
              </div>
            </Row>
            <Row className="font-allerta items-start justify-start lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[100%]">
              <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:my-[2px] lg:my-[2px] my-[3px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-yellow_900 tracking-ls1">{`All categories`}</Text>
              <Text className="font-normal xl:ml-[100px] ml-[113px] 3xl:ml-[135px] lg:ml-[87px] not-italic lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-yellow_900 tracking-ls1">{`Today’s deals`}</Text>
              <Row className="items-center justify-center lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
                <Text className="font-normal not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Canned food`}</Text>
                <Text className="font-normal lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Soft drinks`}</Text>
                <Text className="font-normal lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Food stuffs`}</Text>
              </Row>
              <Text className="font-normal lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`candy/chokolate...........`}</Text>
            </Row>
            <Row className="font-allerta items-start justify-between lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[104px] xl:mb-[119px] mb-[134px] 3xl:mb-[160px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[20%]">
                <Text className="font-normal lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Canned food`}</Text>
                <Text className="font-normal lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Soft drinks`}</Text>
                <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Food stuffs`}</Text>
                <Text className="font-normal lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`candy/chokolate`}</Text>
                <Column className="lg:mt-[42px] xl:mt-[48px] mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Line className="bg-black_900 h-[2px] w-[100%]" />
                </Column>
                <Text className="font-normal lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Contact us`}</Text>
                <Text className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`About us`}</Text>
                <Text className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] not-italic text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Help`}</Text>
              </Column>
              <Column className="font-roboto items-start justify-start w-[79%]">
                <Image
                  src="img_capture1.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] h-[90px] 2xl:h-[91px] lg:mx-[150px] xl:mx-[171px] mx-[193px] 3xl:mx-[231px] object-contain w-[47%]"
                  alt="Capture1"
                />
                <Column className="lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Stack className="lg:h-[167px] xl:h-[191px] h-[214px] 2xl:h-[215px] 3xl:h-[257px] w-[24%]">
                      <Stack className="absolute lg:h-[167px] xl:h-[191px] h-[214px] 2xl:h-[215px] 3xl:h-[257px] inset-[0] w-[100%]">
                        <Stack className="absolute bg-gray_50 lg:h-[167px] xl:h-[191px] h-[214px] 2xl:h-[215px] 3xl:h-[257px] right-[0] rounded-radius10 w-[90%]">
                          <Image
                            src="img_vector_1.svg"
                            className="absolute lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] object-contain right-[7%] top-[10%] w-[15%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack className="absolute lg:h-[124px] xl:h-[141px] h-[158.38px] 2xl:h-[159px] 3xl:h-[191px] left-[0] top-[2%] w-[75%]">
                          <Image
                            src="img_rectangle73.png"
                            className="absolute lg:h-[124px] xl:h-[141px] h-[158.38px] 2xl:h-[159px] 3xl:h-[191px] inset-[0] object-contain w-[100%]"
                            alt="Rectangle73"
                          />
                          <Text className="absolute bottom-[1%] font-bold right-[2%] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`212 fresh bread`}</Text>
                        </Stack>
                      </Stack>
                      <Row className="absolute bottom-[5%] items-end justify-center right-[5%] w-[80%]">
                        <Image
                          src="img_group.svg"
                          className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[14%]"
                          alt="Group"
                        />
                        <Text className="font-normal leading-lh ml-[1.95px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[62%]">{`10,000`}</Text>
                        <Image
                          src="img_group110.svg"
                          className="lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[2px] mb-[3.64px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9.01px] 2xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] object-contain w-[17%]"
                          alt="Group110"
                        />
                      </Row>
                    </Stack>
                    <Column className="bg-gray_50 items-center rounded-radius10 w-[22%]">
                      <Row className="items-start justify-between lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Image
                          src="img_image10.png"
                          className="h-[108.36px] 2xl:h-[109px] 3xl:h-[131px] lg:h-[85px] xl:h-[97px] lg:ml-[17px] xl:ml-[20px] ml-[22.49px] 2xl:ml-[22px] 3xl:ml-[27px] object-contain rounded-radius1 w-[44%]"
                          alt="image10"
                        />
                        <Image
                          src="img_vector_1.svg"
                          className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] lg:mb-[63px] xl:mb-[72px] mb-[81.41px] 2xl:mb-[81px] 3xl:mb-[97px] lg:mr-[12px] xl:mr-[13px] mr-[15.45px] 2xl:mr-[15px] 3xl:mr-[18px] object-contain w-[15%]"
                          alt="Vector"
                        />
                      </Row>
                      <Stack className="lg:h-[47px] xl:h-[54px] h-[59.84px] 2xl:h-[60px] 3xl:h-[72px] xl:mb-[10px] mb-[12.16px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] xl:ml-[6px] lg:ml-[6px] ml-[7.73px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[11px] xl:mr-[12px] mr-[14.38px] 2xl:mr-[14px] 3xl:mr-[17px] lg:mt-[12px] xl:mt-[13px] mt-[15.64px] 2xl:mt-[15px] 3xl:mt-[18px] w-[88%]">
                        <Row className="absolute bottom-[0] items-end justify-start left-[5%] w-[79%]">
                          <Image
                            src="img_group.svg"
                            className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                            alt="Group"
                          />
                          <Text className="font-normal leading-lh ml-[1.96px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                        </Row>
                        <Image
                          src="img_group90.svg"
                          className="absolute bottom-[6%] lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] object-contain right-[0] w-[17%]"
                          alt="Group90"
                        />
                        <Text className="absolute font-bold left-[0] text-bluegray_800 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left top-[0] tracking-ls1">{`Golden morn maize`}</Text>
                      </Stack>
                    </Column>
                    <Column className="bg-gray_50 items-start rounded-radius10 w-[22%]">
                      <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Image
                            src="img_cooo4.png"
                            className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] object-contain w-[42%]"
                            alt="cooo4"
                          />
                          <Image
                            src="img_vector_1.svg"
                            className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] 3xl:mb-[103px] lg:mb-[66px] xl:mb-[76px] mb-[86.05px] 2xl:mb-[86px] lg:mr-[12px] xl:mr-[13px] mr-[15.45px] 2xl:mr-[15px] 3xl:mr-[18px] object-contain w-[15%]"
                            alt="Vector"
                          />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[45px] xl:h-[51px] h-[56.84px] 2xl:h-[57px] 3xl:h-[69px] lg:mb-[14px] xl:mb-[17px] mb-[19.16px] 2xl:mb-[19px] 3xl:mb-[23px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] xl:mr-[3px] lg:mr-[3px] mr-[4.38px] 2xl:mr-[4px] 3xl:mr-[5px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[90%]">
                        <Row className="absolute bottom-[0] items-end justify-start left-[1%] w-[77%]">
                          <Image
                            src="img_group.svg"
                            className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                            alt="Group"
                          />
                          <Text className="font-normal leading-lh ml-[1.96px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                        </Row>
                        <Image
                          src="img_group90.svg"
                          className="absolute bottom-[3%] lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] object-contain right-[0] w-[17%]"
                          alt="Group113"
                        />
                        <Text className="absolute font-bold left-[0] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left top-[0] tracking-ls1">{`Kellog’s corn flakes`}</Text>
                      </Stack>
                    </Column>
                    <Column className="bg-gray_50 items-center xl:mr-[2px] lg:mr-[2px] mr-[3px] rounded-radius10 w-[22%]">
                      <Row className="items-start justify-between lg:mt-[20px] xl:mt-[23px] mt-[25.87px] 2xl:mt-[25px] 3xl:mt-[31px] w-[100%]">
                        <Image
                          src="img_image9.png"
                          className="h-[102.25px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[91px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.96px] 2xl:ml-[9px] mt-[10.26px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] object-contain w-[41%]"
                          alt="image9"
                        />
                        <Image
                          src="img_vector_1.svg"
                          className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] 3xl:mb-[102px] lg:mb-[66px] xl:mb-[76px] mb-[85.56px] 2xl:mb-[85px] 3xl:mr-[11px] lg:mr-[7px] xl:mr-[8px] mr-[9.42px] 2xl:mr-[9px] object-contain w-[15%]"
                          alt="Vector"
                        />
                      </Row>
                      <Row className="items-end justify-evenly xl:mb-[10px] mb-[12.16px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[2px] mt-[3.62px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Stack className="lg:h-[47px] xl:h-[54px] h-[59.84px] 2xl:h-[60px] 3xl:h-[72px] w-[69%]">
                          <Text className="absolute font-bold inset-x-[0] mx-[auto] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left top-[0] tracking-ls1 w-[max-content]">{`Instant malt milk`}</Text>
                          <Row className="absolute bottom-[0] items-end justify-evenly w-[100%]">
                            <Image
                              src="img_group.svg"
                              className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                              alt="Group"
                            />
                            <Text className="font-normal leading-lh not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                          </Row>
                        </Stack>
                        <Image
                          src="img_group111.svg"
                          className="lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[2px] mb-[3.64px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[15%]"
                          alt="Group111"
                        />
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-center justify-end lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[100%]">
                    <Column className="bg-gray_50 items-start rounded-radius10 w-[22%]">
                      <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Image
                            src="img_cooo4.png"
                            className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] object-contain w-[42%]"
                            alt="cooo4"
                          />
                          <Image
                            src="img_vector_2.svg"
                            className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] 3xl:mb-[103px] lg:mb-[66px] xl:mb-[76px] mb-[86.05px] 2xl:mb-[86px] lg:mr-[12px] xl:mr-[13px] mr-[15.45px] 2xl:mr-[15px] 3xl:mr-[18px] object-contain w-[15%]"
                            alt="Vector"
                          />
                        </Row>
                      </Column>
                      <Stack className="lg:h-[45px] xl:h-[51px] h-[56.84px] 2xl:h-[57px] 3xl:h-[69px] xl:mb-[10px] mb-[12.16px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] xl:mr-[3px] lg:mr-[3px] mr-[4.38px] 2xl:mr-[4px] 3xl:mr-[5px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[90%]">
                        <Row className="absolute bottom-[0] items-end justify-start left-[1%] w-[77%]">
                          <Image
                            src="img_group.svg"
                            className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                            alt="Group"
                          />
                          <Text className="font-normal leading-lh ml-[1.96px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                        </Row>
                        <Image
                          src="img_group90.svg"
                          className="absolute bottom-[3%] lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] object-contain right-[0] w-[17%]"
                          alt="Group113"
                        />
                        <Text className="absolute font-bold left-[0] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left top-[0] tracking-ls1">{`Kellog’s corn flakes`}</Text>
                      </Stack>
                    </Column>
                    <List
                      className="lg:gap-[20px] xl:gap-[23px] gap-[26px] 3xl:gap-[31px] grid grid-cols-2 min-h-[auto] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] w-[47%]"
                      orientation="horizontal"
                    >
                      <Column className="bg-gray_50 items-start justify-center rounded-radius10 w-[100%]">
                        <Column className="items-end lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Image
                            src="img_vector_2.svg"
                            className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] lg:mx-[12px] xl:mx-[13px] mx-[15.45px] 2xl:mx-[15px] 3xl:mx-[18px] object-contain w-[15%]"
                            alt="Vector"
                          />
                        </Column>
                        <Image
                          src="img_rectangle47.png"
                          className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] lg:mt-[6px] xl:mt-[7px] mt-[8.05px] 2xl:mt-[8px] 3xl:mt-[9px] xl:mx-[10px] mx-[12px] 3xl:mx-[14px] lg:mx-[9px] object-contain w-[60%]"
                          alt="Rectangle47"
                        />
                        <Column className="lg:mb-[14px] xl:mb-[17px] mb-[19.16px] 2xl:mb-[19px] 3xl:mb-[23px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[100%]">
                          <Row className="items-end justify-end w-[100%]">
                            <Stack className="lg:h-[45px] xl:h-[51px] h-[56.84px] 2xl:h-[57px] 3xl:h-[69px] w-[71%]">
                              <Row className="absolute bottom-[0] inset-x-[0] items-end justify-evenly mx-[auto] w-[98%]">
                                <Image
                                  src="img_group.svg"
                                  className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                                  alt="Group"
                                />
                                <Text className="font-normal leading-lh not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                              </Row>
                              <Text className="absolute font-bold inset-x-[0] mx-[auto] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left top-[0] tracking-ls1 w-[max-content]">{`Goodday cookeis`}</Text>
                            </Stack>
                            <Image
                              src="img_group90.svg"
                              className="lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mr-[3px] lg:mr-[3px] mr-[4.38px] 2xl:mr-[4px] 3xl:mr-[5px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain w-[15%]"
                              alt="Group112"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_50 items-start justify-center rounded-radius10 w-[100%]">
                        <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Image
                              src="img_cooo4.png"
                              className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] object-contain w-[42%]"
                              alt="cooo4"
                            />
                            <Image
                              src="img_vector_2.svg"
                              className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] 3xl:mb-[103px] lg:mb-[66px] xl:mb-[76px] mb-[86.05px] 2xl:mb-[86px] lg:mr-[12px] xl:mr-[13px] mr-[15.45px] 2xl:mr-[15px] 3xl:mr-[18px] object-contain w-[15%]"
                              alt="Vector"
                            />
                          </Row>
                        </Column>
                        <Stack className="lg:h-[45px] xl:h-[51px] h-[56.84px] 2xl:h-[57px] 3xl:h-[69px] lg:mb-[14px] xl:mb-[17px] mb-[19.16px] 2xl:mb-[19px] 3xl:mb-[23px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] xl:mr-[3px] lg:mr-[3px] mr-[4.38px] 2xl:mr-[4px] 3xl:mr-[5px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[90%]">
                          <Row className="absolute bottom-[0] items-end justify-start left-[1%] w-[77%]">
                            <Image
                              src="img_group.svg"
                              className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                              alt="Group"
                            />
                            <Text className="font-normal leading-lh ml-[1.96px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                          </Row>
                          <Image
                            src="img_group90.svg"
                            className="absolute bottom-[3%] lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] object-contain right-[0] w-[17%]"
                            alt="Group113"
                          />
                          <Text className="absolute font-bold left-[0] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left top-[0] tracking-ls1">{`Kellog’s corn flakes`}</Text>
                        </Stack>
                      </Column>
                    </List>
                    <Stack className="lg:h-[167px] xl:h-[191px] h-[214px] 2xl:h-[215px] 3xl:h-[257px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] w-[25%]">
                      <div className="absolute bg-gray_50 lg:h-[167px] xl:h-[191px] h-[214px] 2xl:h-[215px] 3xl:h-[257px] right-[0] rounded-radius10 w-[89%]"></div>
                      <Row className="absolute items-end justify-between left-[0] top-[2%] w-[95%]">
                        <Stack className="lg:h-[148px] xl:h-[169px] h-[189.96997px] 2xl:h-[191px] 3xl:h-[229px] w-[81%]">
                          <Stack className="absolute lg:h-[148px] xl:h-[169px] h-[189.97px] 2xl:h-[191px] 3xl:h-[229px] inset-[0] justify-center m-[auto] w-[100%]">
                            <Image
                              src="img_rectangle73_1.png"
                              className="absolute lg:h-[124px] xl:h-[141px] h-[158.38px] 2xl:h-[159px] 3xl:h-[191px] inset-x-[0] mx-[auto] object-contain top-[0] w-[97%]"
                              alt="Rectangle73"
                            />
                            <Row className="absolute bottom-[0] items-end justify-evenly right-[0] w-[80%]">
                              <Image
                                src="img_group.svg"
                                className="lg:h-[16px] xl:h-[18px] h-[19.82px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[3px] mb-[4.65px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[21px] xl:mt-[24px] mt-[27.37px] 2xl:mt-[27px] 3xl:mt-[32px] object-contain w-[18%]"
                                alt="Group"
                              />
                              <Text className="font-normal leading-lh not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1 w-[81%]">{`10,000`}</Text>
                            </Row>
                          </Stack>
                          <Text className="absolute bottom-[20%] font-bold right-[6%] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`212 fresh bread`}</Text>
                        </Stack>
                        <Column className="items-start justify-start mb-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[16%]">
                          <Image
                            src="img_vector_2.svg"
                            className="lg:h-[21px] xl:h-[24px] h-[26.95px] 2xl:h-[27px] 3xl:h-[33px] mr-[3.98px] 2xl:mr-[3px] xl:mr-[3px] lg:mr-[3px] 3xl:mr-[4px] object-contain w-[87%]"
                            alt="Vector"
                          />
                          <Column className="items-end xl:mt-[102px] mt-[115.18px] 2xl:mt-[115px] 3xl:mt-[138px] lg:mt-[89px] w-[100%]">
                            <Image
                              src="img_group111.svg"
                              className="lg:h-[24px] xl:h-[27px] h-[30.2px] 2xl:h-[31px] 3xl:h-[37px] ml-[3.91px] 2xl:ml-[3px] xl:ml-[3px] lg:ml-[3px] 3xl:ml-[4px] mr-[0] object-contain w-[87%]"
                              alt="Group110"
                            />
                          </Column>
                        </Column>
                      </Row>
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Line className="bg-yellow_900 3xl:h-[1099px] lg:h-[712px] xl:h-[814px] h-[914.5px] 2xl:h-[916px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[4px]" />
          <Column className="font-cabin items-center justify-start lg:mb-[33px] xl:mb-[37px] mb-[42.5px] 2xl:mb-[42px] 3xl:mb-[51px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] mt-[93px] w-[24%]">
            <Row className="items-start justify-center w-[100%]">
              <Image
                src="img_navlink.svg"
                className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] object-contain rounded-radius10 w-[16%]"
                alt="NavLink"
              />
              <Text className="font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:text-fs30 xl:text-fs34 2xl:text-fs39 text-fs39060001373291016 3xl:text-fs46 text-left text-yellow_900">{`cart`}</Text>
            </Row>
            <Row className="lg:gap-[14px] xl:gap-[16px] gap-[18px] 3xl:gap-[21px] grid grid-cols-3 items-center justify-between lg:mt-[40px] xl:mt-[46px] mt-[52px] 3xl:mt-[62px] w-[100%]">
              <Stack className="bg-white_A700 xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius10 w-[100%]">
                <Image
                  src="img_rectangle47_1.png"
                  className="absolute bottom-[25%] lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] inset-x-[0] mx-[auto] object-contain w-[74%]"
                  alt="Rectangle47"
                />
              </Stack>
              <Stack className="bg-white_A701 xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius10 w-[100%]">
                <Image
                  src="img_rectangle73_2.png"
                  className="absolute bottom-[0] h-[104.1px] 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] left-[9%] object-contain w-[74%]"
                  alt="Rectangle73"
                />
              </Stack>
              <Stack className="bg-white_A701 xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius10 w-[100%]">
                <Image
                  src="img_image10_1.png"
                  className="absolute bottom-[20%] lg:h-[50px] xl:h-[57px] h-[63.59px] 2xl:h-[64px] 3xl:h-[77px] inset-x-[0] mx-[auto] object-contain rounded-radius1 w-[45%]"
                  alt="image10"
                />
              </Stack>
            </Row>
            <Row className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-2 items-center justify-start lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[100%]">
              <Stack className="bg-white_A700 xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius10 w-[100%]">
                <Image
                  src="img_image9_1.png"
                  className="absolute bottom-[14%] lg:h-[60px] xl:h-[69px] h-[77.12px] 2xl:h-[78px] 3xl:h-[93px] inset-x-[0] mx-[auto] object-contain w-[54%]"
                  alt="image9"
                />
              </Stack>
              <div className="bg-white_A700 xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] rounded-radius10 w-[100%]"></div>
            </Row>
            <Stack
              className="common-pointer bg-yellow_901 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[91px] mx-[auto] rounded-radius14 w-[73%]"
              onClick={handleNavigate16}
            >
              <Text className="absolute font-medium h-[max-content] inset-y-[0] my-[auto] right-[28%] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700">{`View cart`}</Text>
              <Image
                src="img_navlink_1.svg"
                className="absolute bottom-[3%] lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] left-[19%] object-contain rounded-radius10 w-[22%]"
                alt="NavLink"
              />
            </Stack>
            <Row className="items-center justify-center lg:mt-[167px] xl:mt-[191px] mt-[215px] 3xl:mt-[258px] w-[100%]">
              <Image
                src="img_image11.png"
                className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] object-contain lg:w-[36px] xl:w-[41px] w-[47px] 3xl:w-[56px]"
                alt="image11"
              />
              <Image
                src="img_image12.png"
                className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] mb-[1px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] object-contain lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                alt="image12"
              />
              <Image
                src="img_image13.png"
                className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] object-contain lg:w-[36px] xl:w-[41px] w-[47px] 3xl:w-[56px]"
                alt="image13"
              />
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProductlistPage;
