/* eslint-disable @typescript-eslint/no-explicit-any */
import Creature from "../components/my-creature";
import tw from "twin.macro";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useMyQuery } from "../hooks/query/useMYQuery";
import { useWallet } from "@txnlab/use-wallet";
import { useGenQuery } from "../hooks/query/useGENQuery";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/loading";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyPage = () => {
  const [imageList, setImageList] = useState<any[]>([]);
  const { activeAddress } = useWallet();
  const { useGetImgByAddress } = useMyQuery();
  const { useGetUserAi } = useGenQuery();

  const { data: userAiData } = useGetUserAi(activeAddress || "") || {};

  const { data: myNftList, refetch: myNftListRefetch } =
    useGetImgByAddress(activeAddress || "") || {};

  console.log(myNftList);

  useEffect(() => {
    if (myNftList) {
      myNftListRefetch();
      setImageList(myNftList.data);
    }
  }, [activeAddress, myNftList]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (!activeAddress) return <Title>Log In First</Title>;
  if (activeAddress && !imageList) return <Loading />;

  return (
    <Wrapper>
      <InfoWrapper>
        <Title>My Page</Title>
      </InfoWrapper>

      <AiWrapper>
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Creature />
          </Suspense>
          <AiStatsBox>
            <AiStatsTitle>My Creature Stats</AiStatsTitle>
            <AiStatsItem>
              Active :{" "}
              {parseFloat(userAiData?.ai_stats.basic.active).toFixed(1)}
            </AiStatsItem>
            <AiStatsItem
              style={{ backgroundColor: userAiData?.ai_stats.basic.color }}
            >
              Color : {userAiData?.ai_stats.basic.color}
            </AiStatsItem>
            <AiStatsItem>
              Emotion :{" "}
              {parseFloat(userAiData?.ai_stats.basic.emotion).toFixed(1)}
            </AiStatsItem>
            <AiStatsItem>
              Intelligence :{" "}
              {parseFloat(userAiData?.ai_stats.basic.inteligence).toFixed(1)}
            </AiStatsItem>
            <AiStatsItem>
              Sensitive :{" "}
              {parseFloat(userAiData?.ai_stats.basic.seneitive).toFixed(1)}
            </AiStatsItem>
            <AiStatsItem>
              Size : {parseFloat(userAiData?.ai_stats.basic.size).toFixed(1)}
            </AiStatsItem>
          </AiStatsBox>
        </>
      </AiWrapper>
      <ImagesWrapper>
        <Title>My Images</Title>
        <ImagesContaimer>
          {imageList?.map((item: any) => (
            <Suspense fallback={<div>Loading...</div>}>
              <ImageBox key={item.id}>
                <InfoBox>
                  <Base64Image base64String={item.image} />
                  <StatBox>
                    {Object.entries(item.stats).map(([key, value]) => (
                      <Stat key={key}>
                        <StatTitle>{key} : </StatTitle>
                        <StatValue>{String(value)}</StatValue>
                      </Stat>
                    ))}
                  </StatBox>
                </InfoBox>
                <PriceBox>
                  {item.ownerships ? (
                    <>
                      <Doughnut
                        data={{
                          // labels: Object.keys(item.ownerships),
                          datasets: [
                            {
                              data: Object.values(item.ownerships),
                              backgroundColor: Object.values(
                                item.ownerships
                              ).map(() => getRandomColor()),
                            },
                          ],
                        }}
                      />
                      <PriceTitle>Price Ratio</PriceTitle>
                    </>
                  ) : (
                    <Yet>Not sold yet</Yet>
                  )}
                </PriceBox>
              </ImageBox>
            </Suspense>
          ))}
        </ImagesContaimer>
      </ImagesWrapper>
    </Wrapper>
  );
};

const Base64Image = ({ base64String }: { base64String: string }) => {
  return (
    <img
      src={`data:image/png;base64,${base64String}`}
      alt="Base64 Image"
      width="300"
      height="300"
    />
  );
};

const Wrapper = tw.div`
  flex flex-col items-center
  p-12 gap-8 w-screen box-border

`;

const AiWrapper = tw.div`
  flex w-screen items-center gap-48 justify-center
`;

const AiStatsBox = tw.div`
  flex flex-col gap-8
`;

const AiStatsTitle = tw.h3`
  font-xxl-b
`;

const AiStatsItem = tw.div`
  font-xxl-b
`;

const InfoWrapper = tw.div`
  flex w-full box-border p-12
`;

const Title = tw.div`
  font-xxxxl-b
`;

const ImagesWrapper = tw.div`
  flex flex-col w-screen p-36 box-border gap-16
`;

const ImagesContaimer = tw.div`
  flex w-full
  gap-48
  p-12 box-border 
  overflow-x-auto
`;

const InfoBox = tw.div`
  flex flex-col gap-8
`;

const PriceBox = tw.div`
  flex flex-col gap-8 items-center justify-center
`;

const PriceTitle = tw.div`
  font-xxl-b
`;

const ImageBox = tw.div`
  flex gap-16 box-border
`;

const StatBox = tw.div`
  flex flex-col gap-8
`;

const Stat = tw.div`
  flex gap-8 items-center w-full justify-center
`;

const StatTitle = tw.div`
  font-l-b
`;

const StatValue = tw.div`
  font-l-m
`;

const Yet = tw.div`
  font-xxl-b
`;

export default MyPage;
