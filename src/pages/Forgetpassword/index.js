import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Button } from "components/Button";

const ForgetpasswordPage = () => {
  const navigate = useNavigate();

  const handleBackNavigation3 = () => navigate(-1);

  return (
    <>
      <Column className="bg-gray_200 font-alike mx-[auto] w-[100%]">
        <Column className="items-start justify-start 3xl:mb-[111px] lg:mb-[72px] xl:mb-[82px] mb-[93px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
          <Text className="font-normal lg:mx-[52px] xl:mx-[59px] mx-[67px] 3xl:mx-[80px] not-italic text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 tracking-ls1">
            <span className="text-yellow_900 font-allerta">
              <>{`One`}</>
            </span>
            <span className="text-black_900 font-allerta">
              <>{`Hour`}</>
            </span>
          </Text>
          <Column className="font-cabin lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Row className="items-start justify-start w-[100%]">
              <Row
                className="common-pointer items-center justify-center lg:mb-[619px] xl:mb-[708px] mb-[796px] 3xl:mb-[955px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] mt-[1px] rounded-radius10 w-[6%]"
                onClick={handleBackNavigation3}
              >
                <Image
                  src="img_icon_1.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Icon"
                />
                <Text className="font-normal lg:m-[6px] xl:m-[7px] m-[8px] 3xl:m-[9px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Back`}</Text>
              </Row>
              <Column className="bg-white_A700 font-alata items-center justify-start lg:ml-[174px] xl:ml-[199px] ml-[224px] 3xl:ml-[268px] rounded-radius20 w-[49%]">
                <Column className="items-start justify-start xl:mt-[103px] mt-[116px] 3xl:mt-[139px] lg:mt-[90px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Text className="font-bold font-robotocondensed mx-[auto] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-yellow_900">{`Forgot password`}</Text>
                    <Text className="font-normal font-roboto leading-lh lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] mx-[auto] not-italic text-black_900 text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 w-[81%]">
                      {
                        <>
                          {`Please enter the e-mail address associated`}
                          <br />
                          {` with your OneHour account.`}
                          <br />
                          {` We will send you a link to this e-mail address to reset`}
                          <br />
                          {` your password.`}
                        </>
                      }
                    </Text>
                  </Column>
                  <Input
                    className="placeholder:bg-colors bg-white_A700 border-0 font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:mx-[55px] xl:mx-[63px] mx-[71px] 3xl:mx-[85px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.72px] 2xl:py-[9px] rounded-radius13 shadow-bs2 placeholder:text-black_900_35 text-black_900_35 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[79%]"
                    name="Email"
                    placeholder={`Email`}
                  ></Input>
                </Column>
                <div className="3xl:mb-[24px] 3xl:mt-[181px] 3xl:mx-[12px] lg:mb-[15px] lg:mt-[117px] lg:mx-[7px] mb-[20px] mt-[151px] mx-[10px] w-[37%] xl:mb-[17px] xl:mt-[134px] xl:mx-[8px] input-wrap">
                  <Image
                    src="img_group108.svg"
                    className="absolute right-[0] m-[auto] inset-y-[0]"
                    alt="Group108"
                  />
                  <Button className="bg-transparent lg:pr-[407px] xl:pr-[466px] pr-[524px] 3xl:pr-[629px] w-[100%]">
                    {""}
                  </Button>
                </div>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ForgetpasswordPage;
