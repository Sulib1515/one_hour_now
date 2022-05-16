import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleBackNavigation5 = () => navigate(-1);
  const handleBackNavigation4 = () => navigate(-1);

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[100%]">
          <Text className="font-normal lg:mx-[49px] xl:mx-[56px] mx-[64px] 3xl:mx-[76px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
            <span className="text-yellow_900 font-allerta">
              <>{`One`}</>
            </span>
            <span className="text-black_900 font-allerta">
              <>{`Hour`}</>
            </span>
          </Text>
          <Column className="font-cabin lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[100%]">
            <Row className="items-start justify-start w-[100%]">
              <Row
                className="common-pointer items-center justify-center lg:mb-[142px] xl:mb-[162px] mb-[183px] 3xl:mb-[219px] lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] rounded-radius10 w-[6%]"
                onClick={handleBackNavigation5}
              >
                <Image
                  src="img_icon_1.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Icon"
                />
                <Text className="font-normal lg:m-[6px] xl:m-[7px] m-[8px] 3xl:m-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
              </Row>
              <Column className="bg-white_A700 items-start justify-end lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] rounded-radius13 w-[44%]">
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:mx-[18px] xl:mx-[21px] mx-[24px] 3xl:mx-[28px] lg:text-fs24 xl:text-fs27 2xl:text-fs31 text-fs3125 3xl:text-fs37 text-gray_900 text-left xl:tracking-ls6 lg:tracking-ls6 2xl:tracking-ls7 tracking-ls78125 3xl:tracking-ls9 uppercase">{`Select payment method`}</Text>
                <Column className="items-center xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Row className="items-center justify-start mx-[auto] w-[98%]">
                    <Image
                      src="img_iconarea.svg"
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="IconArea"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900_7f text-left">{`Pay with card`}</Text>
                  </Row>
                  <Row className="items-center justify-start mx-[auto] w-[98%]">
                    <Image
                      src="img_iconarea.svg"
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="IconArea"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900_7f text-left">{`Pay on delivery`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column className="bg-white_A700 font-cabin items-start justify-end lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[251px] xl:mx-[287px] mx-[323px] 3xl:mx-[387px] rounded-radius15 w-[44%]">
            <Text className="font-normal lg:mt-[17px] xl:mt-[20px] mt-[22.5px] 2xl:mt-[22px] 3xl:mt-[27px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs24 xl:text-fs27 2xl:text-fs31 text-fs3125 3xl:text-fs37 text-gray_900 text-left xl:tracking-ls6 lg:tracking-ls6 2xl:tracking-ls7 tracking-ls78125 3xl:tracking-ls9 uppercase">{`pay with card`}</Text>
            <Text className="font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[37px] xl:mx-[42px] mx-[48px] 3xl:mx-[57px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_7f text-left tracking-ls1">{`Cardholder Name`}</Text>
            <Button className="bg-white_A700 font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[13px] xl:py-[15px] py-[17.720001px] 2xl:py-[17px] 3xl:py-[21px] rounded-radius13 shadow-bs1 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900_7f text-left w-[88%]">{`John Maker`}</Button>
            <Text className="font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[37px] xl:mx-[42px] mx-[48px] 3xl:mx-[57px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_7f text-left tracking-ls1">{`Card Number`}</Text>
            <div className="3xl:mt-[9px] 3xl:mx-[48px] bg-transparent border-0 lg:mt-[6px] lg:mx-[31px] mt-[8px] mx-[40px] w-[88%] xl:mt-[7px] xl:mx-[35px] input-wrap">
              <Image
                src="img_vector_3.svg"
                className="absolute left-[25.5px] bg-transparent border-0 lg:left-[19px] xl:left-[22px] 2xl:left-[25px] 3xl:left-[30px] my-[auto] inset-y-[0]"
                alt="Vector"
              />
              <Input
                className="placeholder:bg-transparent bg-white_A700 border-0 font-medium lg:pl-[56px] xl:pl-[64px] pl-[72px] 3xl:pl-[86px] lg:py-[16px] xl:py-[19px] py-[21.470001px] 2xl:py-[21px] 3xl:py-[25px] rounded-radius13 shadow-bs1 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 placeholder:text-gray_900_7f text-gray_900_7f text-left w-[100%]"
                name="5126-5987-2214-"
                placeholder={`5126-5987-2214-7621`}
              ></Input>
            </div>
            <Column className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Row className="items-center justify-start mx-[auto] w-[93%]">
                <Column className="w-[31%]">
                  <Text className="font-normal 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_7f text-left tracking-ls1">{`Expiry Date`}</Text>
                  <div className="3xl:mt-[9px] bg-transparent border-0 lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px] input-wrap">
                    <Image
                      src="img_vector_4.svg"
                      className="absolute h-[21px] left-[25.5px] bg-transparent border-0 lg:h-[17px] lg:left-[19px] xl:h-[19px] xl:left-[22px] 2xl:h-[22px] 2xl:left-[25px] 3xl:h-[26px] 3xl:left-[30px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border-0 font-medium lg:pl-[56px] xl:pl-[64px] pl-[72px] 3xl:pl-[86px] lg:py-[14px] xl:py-[17px] py-[19.220001px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius13 shadow-bs1 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 placeholder:text-gray_900_7f text-gray_900_7f text-left w-[100%]"
                      name="MM / YYYY"
                      placeholder={`MM / YYYY`}
                    ></Input>
                  </div>
                </Column>
                <Column className="lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[24%]">
                  <Text className="font-normal 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_7f text-left tracking-ls1">{`CVC`}</Text>
                  <Button className="bg-white_A700 font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[13px] xl:py-[15px] py-[17.720001px] 2xl:py-[17px] 3xl:py-[21px] rounded-radius13 shadow-bs1 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900_7f text-left w-[100%]">{`123`}</Button>
                </Column>
              </Row>
            </Column>
            <CheckBox
              className="font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left w-[60%]"
              inputClassName="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] outline outline-[0.5px] outline-gray_700 rounded-radius2 w-[24px] xl:h-[22px] xl:w-[21px] mr-[5px]"
              name="Group33"
              label={`Save this as your default payment method`}
            ></CheckBox>
            <Button className="bg-yellow_900 font-medium lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:mx-[37px] xl:mx-[42px] mx-[48px] 3xl:mx-[57px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius10 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700 w-[85%]">{`Confirm payment`}</Button>
            <Column className="items-center lg:mb-[11px] xl:mb-[12px] mb-[14.5px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Button
                className="common-pointer font-normal mx-[auto] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.375px] 2xl:py-[9px] rounded-radius11 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 underline w-[12%]"
                onClick={handleBackNavigation4}
              >{`Back`}</Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PaymentPage;
