import {Image, View} from "@tarojs/components";
import {useNavigate} from "react-router-dom";
import LocationIcon from "public/location.svg";
import StarIcon from "public/star.svg";
import Arrow1Icon from "public/arrow1.svg";
import Arrow2Icon from "public/arrow2.svg";
import Arrow4Icon from "public/arrow4.svg";
import Arrow5Icon from "public/arrow5.svg";
import SearchIcon from "public/search.svg";
import OrdersIcon from "public/orders.svg";
import MessagesIcon from "public/messages.svg";
import UserIcon from "public/user.svg";
import SpeakerIcon from "public/speaker.svg";

export default function Home()
{
  const navigate = useNavigate();

  return (
      <>
        <View className="flex flex-col items-center box-border w-full h-full px-6 pb-24" style={{backgroundColor: "#F8F8F8"}}>
          <View className="flex w-full my-2">
            <View className="flex items-center mr-3 font-semibold" style={{color: "#4572FB"}}>
              广州
              <Image className="h-1/6 ml-0.5" mode="heightFix"  src={Arrow4Icon} />
            </View>
            <View className="flex items-center flex-1 px-4 py-2 rounded-3xl text-lg" style={{color: "#CCCCCC", backgroundColor: "#EEEEF0"}}>
              <Image className="h-4/5 mr-0.5" mode="heightFix"  src={SearchIcon} />
              单号/中介/订单信息搜索
            </View>
          </View>
          <View className="flex items-center justify-between w-full px-8 py-4 my-1.5 rounded-xl" style={{backgroundColor: "#4572FB"}}>
            <View className="text-white font-semibold px-2">地点  </View>
            <Image className="h-1/4" mode="heightFix"  src={Arrow5Icon} />
            <View className="text-white font-semibold px-2">薪酬  </View>
            <Image className="h-1/4" mode="heightFix"  src={Arrow5Icon} />
            <View className="text-white font-semibold px-2">年段  </View>
            <Image className="h-1/4" mode="heightFix"  src={Arrow5Icon} />
            <View className="text-white font-semibold px-2">学科  </View>
            <Image className="h-1/4" mode="heightFix"  src={Arrow5Icon} />
          </View>
          <View className="flex flex-col box-border w-full h-1/3 px-4 pb-4 my-1.5 bg-white rounded-lg shadow-sm">
            <View className="flex">
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
            <View className="box-border flex flex-1 justify-between py-4">
              <View className="flex flex-col w-2/5">
                <View className="text-xl font-semibold" style={{color: "#52566A"}}>初中 二年级</View>
                <View className="flex items-center">
                  <View className="text-lg font-semibold" style={{color: "#FB7145"}}>¥</View>
                  <View className="text-2xl font-semibold" style={{color: "#FB7145"}}>120</View>
                  <View style={{color: "#52566A"}}>/小时</View>
                </View>
              </View>
              <View className="flex flex-col justify-between w-1/2 px-2 py-3 rounded-lg" style={{backgroundColor: "#F9FAFE"}}>
                <View className="flex">
                  <View className="flex-1" style={{color: "#99A1B6"}}>辅导日期</View>
                  <View style={{color: "#52566A"}}>3次/周</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: "#99A1B6"}}>辅导时长</View>
                  <View style={{color: "#52566A"}}>2小时</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: "#99A1B6"}}>信息费</View>
                  <View style={{color: "#52566A"}}>¥800</View>
                </View>
              </View>
            </View>
            <View className="flex">
              <View className="flex items-center w-fit text-lg">
                <Image className="h-3/5" mode="heightFix" src={LocationIcon} />
                <View className="ml-1 mr-2">北京市朝阳区京旺家园</View>
                <Image className="h-1/2" mode="heightFix" src={Arrow1Icon} />
              </View>
              <View className="flex flex-1 items-center justify-end h-full">
                <Image className="h-4/5" mode="heightFix" src={StarIcon} />
              </View>
            </View>
          </View>
        </View>
        <View className="flex flex-col fixed bottom-0 w-full">
          <View className="flex items-center px-5 py-3 h-11" style={{backgroundColor: "#4572FB"}} onClick={() => navigate('/login')}>
            <Image className="h-3/4" mode="heightFix" src={SpeakerIcon} />
            <View className="flex-1 ml-1.5 text-white">老师/中介快速登录，获取完整服务</View>
            <Image className="h-2/3" mode="heightFix" src={Arrow2Icon} />
          </View>
          <View className="flex justify-between bg-white px-11 pt-4 pb-8">
            <View className="flex flex-col items-center">
              <Image className="w-5/6" mode="widthFix" src={OrdersIcon}></Image>
              <View className="mt-2 text-lg font-semibold" style={{color: "#4572FB"}}>课源</View>
            </View>
            <View className="flex flex-col items-center">
              <Image className="w-5/6" mode="widthFix" src={StarIcon}></Image>
              <View className="mt-2 text-lg font-semibold" style={{color: "#99A1B6"}}>管理</View>
            </View>
            <View className="flex flex-col items-center">
              <Image className="w-5/6" mode="widthFix" src={MessagesIcon}></Image>
              <View className="mt-2 text-lg font-semibold" style={{color: "#99A1B6"}}>消息</View>
            </View>
            <View className="flex flex-col items-center">
              <Image className="w-5/6" mode="widthFix" src={UserIcon}></Image>
              <View className="mt-2 text-lg font-semibold" style={{color: "#99A1B6"}}>我的</View>
            </View>
          </View>
        </View>
      </>
    )
}
