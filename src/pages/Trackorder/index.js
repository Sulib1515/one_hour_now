import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Line } from "components/Line";

const TrackorderPage = () => {
  const navigate = useNavigate();

  const handleBackNavigation2 = () => navigate(-1);

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="items-start justify-start 3xl:mb-[109px] lg:mb-[70px] xl:mb-[80px] mb-[91px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
          <Text className="font-normal lg:mx-[32px] xl:mx-[37px] mx-[42px] 3xl:mx-[50px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
            <span className="text-yellow_900 font-allerta">
              <>{`One`}</>
            </span>
            <span className="text-black_900 font-allerta">
              <>{`Hour`}</>
            </span>
          </Text>
          <Row
            className="common-pointer font-cabin items-center justify-start lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:mx-[17px] xl:mx-[19px] mx-[22px] 3xl:mx-[26px] rounded-radius10 w-[6%]"
            onClick={handleBackNavigation2}
          >
            <Image
              src="img_icon_1.svg"
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
              alt="Icon"
            />
            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
          </Row>
          <Column className="font-brandongrotesque items-center lg:mt-[63px] xl:mt-[72px] mt-[82px] 3xl:mt-[98px] w-[100%]">
            <Row className="bg-white_A700 items-end justify-between mx-[auto] rounded-radius10 w-[95%]">
              <Column className="items-start justify-start lg:mb-[55px] xl:mb-[63px] mb-[71.71px] 2xl:mb-[71px] 3xl:mb-[86px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[33px] xl:mt-[38px] mt-[43.35px] 2xl:mt-[43px] 3xl:mt-[52px] w-[30%]">
                <Column className="items-center w-[100%]">
                  <Stack className="h-[104.59px] 2xl:h-[105px] 3xl:h-[126px] lg:h-[82px] xl:h-[94px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[96%]">
                    <Line className="absolute bg-orange_A200 lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] left-[9%] rotate-[90deg] top-[0] w-[2px]" />
                    <Row className="absolute bottom-[0] items-center justify-start w-[100%]">
                      <Stack className="bg-yellow_50 lg:h-[60px] xl:h-[68px] h-[75.94px] 2xl:h-[76px] 3xl:h-[92px] rounded-radius10 w-[20%]">
                        <Image
                          src="img_19190811custo.png"
                          className="absolute lg:h-[40px] xl:h-[46px] h-[51.32px] 2xl:h-[52px] 3xl:h-[62px] inset-[0] justify-center m-[auto] object-contain w-[74%]"
                          alt="19190811custo"
                        />
                      </Stack>
                      <Text className="font-medium lg:mb-[18px] xl:mb-[21px] mb-[23.73px] 2xl:mb-[23px] 3xl:mb-[28px] lg:ml-[14px] xl:ml-[16px] ml-[18.98px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[22px] mt-[24.92px] 2xl:mt-[24px] 3xl:mt-[29px] text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Order Taken`}</Text>
                      <Image
                        src="img_group48_1.svg"
                        className="lg:h-[23px] xl:h-[26px] h-[28.48px] 2xl:h-[29px] 3xl:h-[35px] lg:ml-[133px] xl:ml-[153px] ml-[172.05px] 2xl:ml-[172px] 3xl:ml-[206px] lg:my-[18px] xl:my-[21px] my-[23.73px] 2xl:my-[23px] 3xl:my-[28px] object-contain lg:w-[22px] xl:w-[25px] w-[28.48px] 2xl:w-[28px] 3xl:w-[34px]"
                        alt="Group48"
                      />
                    </Row>
                  </Stack>
                </Column>
                <Line className="bg-orange_A200 lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mt-[46px] xl:mt-[53px] mt-[60.41px] 2xl:mt-[60px] 3xl:mt-[72px] lg:mx-[44px] xl:mx-[50px] mx-[57px] 3xl:mx-[68px] rotate-[90deg] w-[2px]" />
                <Column className="items-center w-[100%]">
                  <Row className="items-center justify-start ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[96%]">
                    <Stack className="bg-bluegray_50 lg:h-[60px] xl:h-[68px] h-[75.94px] 2xl:h-[76px] 3xl:h-[92px] rounded-radius10 w-[20%]">
                      <Image
                        src="img_68512removebg.png"
                        className="absolute lg:h-[52px] xl:h-[60px] h-[66.45px] 2xl:h-[67px] 3xl:h-[80px] inset-[0] justify-center m-[auto] object-contain lg:w-[51px] xl:w-[59px] w-[66.45px] 2xl:w-[66px] 3xl:w-[79px]"
                        alt="68512removebg"
                      />
                    </Stack>
                    <Text className="font-medium lg:mb-[18px] xl:mb-[21px] mb-[23.74px] 2xl:mb-[23px] 3xl:mb-[28px] lg:ml-[14px] xl:ml-[16px] ml-[18.98px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[22px] mt-[24.91px] 2xl:mt-[24px] 3xl:mt-[29px] text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Order Is Being Prepared`}</Text>
                    <Image
                      src="img_group49.svg"
                      className="lg:h-[23px] xl:h-[26px] h-[28.48px] 2xl:h-[29px] 3xl:h-[35px] 3xl:ml-[103px] lg:ml-[67px] xl:ml-[77px] ml-[86.61px] 2xl:ml-[86px] lg:my-[18px] xl:my-[21px] my-[23.73px] 2xl:my-[23px] 3xl:my-[28px] object-contain lg:w-[22px] xl:w-[25px] w-[28.48px] 2xl:w-[28px] 3xl:w-[34px]"
                      alt="Group49"
                    />
                  </Row>
                </Column>
                <Line className="bg-orange_A200 lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] lg:mt-[60px] xl:mt-[69px] mt-[78.06px] 2xl:mt-[78px] 3xl:mt-[93px] lg:mx-[44px] xl:mx-[50px] mx-[57px] 3xl:mx-[68px] rotate-[90deg] w-[2px]" />
                <Column className="items-center mb-[0] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Row className="items-center justify-start ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[96%]">
                    <Stack className="bg-red_50 lg:h-[60px] xl:h-[68px] h-[75.94px] 2xl:h-[76px] 3xl:h-[92px] rounded-radius10 w-[20%]">
                      <Image
                        src="img_deliverymanri.png"
                        className="absolute lg:h-[52px] xl:h-[60px] h-[66.45px] 2xl:h-[67px] 3xl:h-[80px] inset-[0] justify-center m-[auto] object-contain lg:w-[51px] xl:w-[59px] w-[66.45px] 2xl:w-[66px] 3xl:w-[79px]"
                        alt="deliverymanri"
                      />
                    </Stack>
                    <Column className="items-start 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.5px] 2xl:mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[18.98px] 2xl:ml-[18px] 3xl:ml-[22px] mt-[10.67px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[47%]">
                      <Text className="font-medium mr-[1px] text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Order Is Being Delivered`}</Text>
                      <Text className="font-normal mb-[0] lg:mt-[3px] mt-[4.75px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Your delivery agent is coming`}</Text>
                    </Column>
                    <Image
                      src="img_group50.svg"
                      className="lg:h-[37px] xl:h-[43px] h-[47.46px] 2xl:h-[48px] 3xl:h-[57px] mb-[14.25px] lg:ml-[47px] xl:ml-[54px] ml-[61.7px] 2xl:ml-[61px] 3xl:ml-[74px] mt-[14.23px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] object-contain lg:w-[36px] xl:w-[42px] w-[47.46px] 2xl:w-[47px] 3xl:w-[56px]"
                      alt="Group50"
                    />
                  </Row>
                  <Column className="items-start justify-start mt-[1px] w-[100%]">
                    <Line className="bg-orange_A200 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:mx-[38px] xl:mx-[44px] mx-[50px] 3xl:mx-[60px] rotate-[90deg] w-[2px]" />
                    <Column className="items-center w-[100%]">
                      <Row className="items-center justify-start lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] w-[96%]">
                        <Stack className="bg-gray_100 lg:h-[60px] xl:h-[68px] h-[75.94px] 2xl:h-[76px] 3xl:h-[92px] rounded-radius10 w-[20%]">
                          <Image
                            src="img_group52.svg"
                            className="absolute lg:h-[37px] xl:h-[43px] h-[47.46px] 2xl:h-[48px] 3xl:h-[57px] inset-[0] justify-center m-[auto] object-contain lg:w-[36px] xl:w-[42px] w-[47.46px] 2xl:w-[47px] 3xl:w-[56px]"
                            alt="Group52"
                          />
                        </Stack>
                        <Text className="font-medium lg:mb-[18px] xl:mb-[21px] mb-[23.74px] 2xl:mb-[23px] 3xl:mb-[28px] lg:ml-[14px] xl:ml-[16px] ml-[18.98px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[22px] mt-[24.91px] 2xl:mt-[24px] 3xl:mt-[29px] text-black_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Order Received`}</Text>
                        <Image
                          src="img_group53.svg"
                          className="2xl:h-[10px] 3xl:h-[12px] lg:h-[8px] h-[9.49px] xl:h-[9px] mb-[33.23px] lg:ml-[100px] xl:ml-[115px] ml-[129.34px] 2xl:ml-[129px] 3xl:ml-[155px] mt-[33.22px] lg:my-[25px] xl:my-[29px] 2xl:my-[33px] 3xl:my-[39px] object-contain w-[12%]"
                          alt="Group53"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Image
                src="img_rectangle45.png"
                className="lg:h-[407px] xl:h-[466px] h-[523px] 2xl:h-[524px] 3xl:h-[628px] lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] lg:mr-[24px] xl:mr-[27px] mr-[31px] 3xl:mr-[37px] xl:mt-[104px] mt-[118px] 3xl:mt-[141px] lg:mt-[91px] object-contain rounded-radius10 w-[60%]"
                alt="Rectangle45"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default TrackorderPage;
