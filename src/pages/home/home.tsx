import {View} from "@tarojs/components";
import {Button} from "@antmjs/vantui";
import {useNavigate} from "react-router-dom";

export default function Home()
{
  let navigate = useNavigate();

  return (
      <View>
        <View>
          <Button onClick={() => navigate('/login')}>登录</Button>
          <Button onClick={() => navigate('/create-order')}>新建订单</Button>
        </View>
      </View>
    )
}
