import {Image, View} from "@tarojs/components";
import {Button} from "@antmjs/vantui";
import {useNavigate} from "react-router-dom";
import LocationIcon from "public/location.svg";
import StarIcon from "public/star.svg";
import ArrowIcon from "public/arrow.png";

export default function Home()
{
  let navigate = useNavigate();

  return (
      <>
        <View className="flex flex-col items-center box-border h-full w-full px-6 pb-24" style={{backgroundColor: "#F8F8F8"}}>
          <Button onClick={() => navigate('/login')}>登录</Button>
          <Button onClick={() => navigate('/create-order')}>新建订单</Button>
          <View className="flex flex-col box-border w-full h-1/3 px-4 pb-4 my-3 bg-white rounded-md shadow-sm">
            <View className="flex w-full h-fit">
              <View className="flex items-center justify-center w-fit h-fit px-3 py-1.5 mr-2 border-x-3 border-b-3 rounded-b-md font-semibold"
                style={{backgroundColor: "#EAFFF0", color: "#30D8B9", borderColor: "#61E8D8"}}
              >
                物理
              </View>
              <View className="flex items-center justify-center w-fit h-fit px-3 py-1.5 mr-2 border-x-3 border-b-3 rounded-b-md font-semibold"
                style={{backgroundColor: "#E6EBFD", color: "#4572FB", borderColor: "#6190E8"}}
              >
                数学
              </View>
              <View className="flex flex-1 items-end justify-end text-xs pb-1" style={{color: "#99A1B6"}}>
                发布于1天前
              </View>
            </View>
            <View className="flex flex-1 justify-between w-full my-4">
              <View className="flex flex-col w-2/5">

              </View>
              <View className="flex flex-col w-1/2 rounded-lg" style={{backgroundColor: "#F9FAFE"}}>

              </View>
            </View>
            <View className="flex items-center w-full h-fit">
              <View className="flex items-center w-fit h-fit text-lg">
                <Image className="h-4/5" mode="heightFix" src={LocationIcon} />
                北京市朝阳区京旺家园
                <Image className="h-4/5" mode="heightFix" src={ArrowIcon} />
              </View>
              <View className="flex flex-1 items-center justify-end h-full">
                <Image className="h-4/5" mode="heightFix" src={StarIcon} />
              </View>
            </View>
          </View>
        </View>
        <View className="fixed bottom-0 w-full h-24 flex justify-between bg-white px-11 pt-4 pb-8">
        </View>
      </>
    )
}
