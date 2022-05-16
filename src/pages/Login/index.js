import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Button } from "components/Button";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigate7 = () => navigate("/");
  const handleNavigate18 = () => navigate("/signup");
  const handleNavigate10 = () => navigate("/forgetpassword");
  const handleNavigate11 = () => navigate("/");

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
          <Column className="w-[100%]">
            <Row className="items-end justify-between w-[100%]">
              <Text className="font-normal mb-[1px] lg:ml-[61px] xl:ml-[70px] ml-[79px] 3xl:ml-[94px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
                <span className="text-yellow_900 font-allerta">
                  <>{`One`}</>
                </span>
                <span className="text-black_900 font-allerta">
                  <>{`Hour`}</>
                </span>
              </Text>
              <Row className="font-cabin items-center justify-center lg:mr-[162px] xl:mr-[185px] mr-[209px] 3xl:mr-[250px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[19%]">
                <Text
                  className="common-pointer font-medium text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                  onClick={handleNavigate7}
                >{`Home`}</Text>
                <Text className="font-medium lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-yellow_902 tracking-ls1">{`Login`}</Text>
                <Text
                  className="common-pointer font-medium lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] text-black_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1"
                  onClick={handleNavigate18}
                >{`Sign up`}</Text>
              </Row>
            </Row>
          </Column>
          <Row className="font-cabin items-center justify-start lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:mx-[52px] xl:mx-[59px] mx-[67px] 3xl:mx-[80px] rounded-radius10 w-[6%]">
            <Image
              src="img_icon_1.svg"
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
              alt="Icon"
            />
            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
          </Row>
          <Column className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Column className="bg-white_A700 items-start justify-start mx-[auto] rounded-radius20 w-[49%]">
              <Text className="font-bold font-cabin lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:mx-[21px] xl:mx-[24px] mx-[27px] 3xl:mx-[32px] text-bluegray_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">{`Get your Fresh products`}</Text>
              <Text className="font-alata font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:mx-[20px] xl:mx-[23px] mx-[26px] 3xl:mx-[31px] not-italic text-bluegray_600 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[64%]">{`We deliver the best products in town. Order today!!!`}</Text>
              <Text className="font-bold font-robotocondensed xl:mt-[105px] mt-[119px] 3xl:mt-[142px] lg:mt-[92px] lg:mx-[224px] xl:mx-[256px] mx-[288px] 3xl:mx-[345px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-shadow-ts text-yellow_900">{`Login`}</Text>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-normal font-roboto 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:mr-[47px] xl:mr-[54px] mr-[61px] 3xl:mr-[73px] lg:mt-[29px] xl:mt-[34px] mt-[38.5px] 2xl:mt-[38px] 3xl:mt-[46px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] py-[10.06px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius13 shadow-bs2 placeholder:text-black_900_35 text-black_900_35 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left w-[79%]"
                name="E mail / phone "
                placeholder={`E mail / phone number`}
              ></Input>
              <Input
                className="placeholder:bg-colors bg-white_A700 border-0 font-normal font-roboto 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:mr-[47px] xl:mr-[54px] mr-[61px] 3xl:mr-[73px] 3xl:mt-[100px] lg:mt-[64px] xl:mt-[74px] mt-[83.5px] 2xl:mt-[83px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] py-[10.06px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius13 shadow-bs2 placeholder:text-black_900_35 text-black_900_35 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left w-[79%]"
                name="Password"
                placeholder={`Password`}
              ></Input>
              <Text
                className="common-pointer font-normal font-roboto lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[109px] 3xl:mx-[130px] lg:mx-[84px] xl:mx-[96px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-red_A700"
                onClick={handleNavigate10}
              >{`Forgot password?`}</Text>
              <Column className="font-robotocondensed items-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] xl:mt-[104px] mt-[117px] 3xl:mt-[140px] lg:mt-[91px] w-[100%]">
                <Button
                  className="common-pointer bg-yellow_902 font-bold mx-[auto] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius6 lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700 w-[37%]"
                  onClick={handleNavigate11}
                >{`Login`}</Button>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
