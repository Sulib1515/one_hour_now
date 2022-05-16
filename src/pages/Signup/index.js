import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Stack } from "components/Stack";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleNavigate6 = () => navigate("/");
  const handleNavigate5 = () => navigate("/login");
  const handleBackNavigation1 = () => navigate(-1);
  const handleNavigate1 = () => navigate("/login");

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
          <Column className="w-[100%]">
            <Row className="items-end justify-between w-[100%]">
              <Text className="font-normal mb-[1px] ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
                <span className="text-yellow_900 font-allerta">
                  <>{`One`}</>
                </span>
                <span className="text-black_900 font-allerta">
                  <>{`Hour`}</>
                </span>
              </Text>
              <Row className="font-cabin items-center justify-center lg:mr-[140px] xl:mr-[161px] mr-[181px] 3xl:mr-[217px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[19%]">
                <Text
                  className="common-pointer font-medium text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                  onClick={handleNavigate6}
                >{`Home`}</Text>
                <Text
                  className="common-pointer font-medium lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] text-black_901 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                  onClick={handleNavigate5}
                >{`Login`}</Text>
                <Text className="font-medium lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_900 tracking-ls1">{`Sign up`}</Text>
              </Row>
            </Row>
          </Column>
          <Row
            className="common-pointer font-cabin items-center justify-start lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] 3xl:mx-[114px] lg:mx-[73px] xl:mx-[84px] mx-[95px] rounded-radius10 w-[6%]"
            onClick={handleBackNavigation1}
          >
            <Image
              src="img_icon_1.svg"
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
              alt="Icon"
            />
            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
          </Row>
          <Column className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Column className="bg-white_A700 items-start justify-start mx-[auto] rounded-radius20 w-[49%]">
              <Text className="font-adventpro font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] text-bluegray_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">{`Get your Fresh products`}</Text>
              <Text className="font-alata font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mx-[21px] xl:mx-[24px] mx-[27px] 3xl:mx-[32px] not-italic text-bluegray_600 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[63%]">{`Create your OneHour account in just a few clicks`}</Text>
              <Text className="font-bold font-robotocondensed lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:mx-[150px] xl:mx-[171px] mx-[193px] 3xl:mx-[231px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-shadow-ts text-yellow_900">{`Create an account`}</Text>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-alata font-normal lg:mt-[36px] xl:mt-[41px] mt-[46.5px] 2xl:mt-[46px] 3xl:mt-[55px] lg:mx-[48px] xl:mx-[55px] mx-[62px] 3xl:mx-[74px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius13 shadow-bs2 placeholder:text-black_900_3a text-black_900_3a lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[79%]"
                name="First name"
                placeholder={`First name`}
              ></Input>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-alata font-normal lg:mt-[17px] xl:mt-[20px] mt-[22.5px] 2xl:mt-[22px] 3xl:mt-[27px] lg:mx-[48px] xl:mx-[55px] mx-[62px] 3xl:mx-[74px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius13 shadow-bs2 placeholder:text-black_900_3a text-black_900_3a lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[79%]"
                name="Last name"
                placeholder={`Last name`}
              ></Input>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-alata font-normal lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:mx-[48px] xl:mx-[55px] mx-[62px] 3xl:mx-[74px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius13 shadow-bs2 placeholder:text-black_900_3a text-black_900_3a lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[79%]"
                name="Phone number"
                placeholder={`Phone number`}
              ></Input>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-alata font-normal lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:mx-[48px] xl:mx-[55px] mx-[62px] 3xl:mx-[74px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius13 shadow-bs2 placeholder:text-black_900_3a text-black_900_3a lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[79%]"
                name="Email"
                placeholder={`Email`}
              ></Input>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-alata font-normal lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:mx-[48px] xl:mx-[55px] mx-[62px] 3xl:mx-[74px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius13 shadow-bs2 placeholder:text-black_900_3a text-black_900_3a lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[79%]"
                name="Password"
                placeholder={`Password`}
              ></Input>
              <Column className="font-robotocondensed items-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] mt-[90px] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] mx-[auto] w-[37%]">
                  <Text
                    className="common-pointer absolute bg-yellow_902 rounded-radius6 top-[0]"
                    onClick={handleNavigate1}
                  ></Text>
                  <Text className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[9%] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700">{`Register`}</Text>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignupPage;
