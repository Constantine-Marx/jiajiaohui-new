import {Button, Input, View} from '@tarojs/components';
import {useNavigate} from 'react-router-dom';

export default function AgentForm()
{
  const navigate = useNavigate();

  return (
    <View className="flex flex-col h-full w-full" style={{backgroundColor: '#F8F8F8'}}>
      <View className="flex flex-1 flex-col w-full px-6 py-10" style={{backgroundColor: '#F8F8F8'}}>
        <View className="font-semibold text-xl mb-2">填写基础信息，快速发单</View>
        <View style={{color: '#858A99'}}>完成信息填写，即可进入发单流程</View>
        <View className="flex flex-col bg-white rounded-lg px-4 py-4 mt-3">
          <View className="flex items-center justify-between py-2">
            <View>姓名</View>
            <Input className="flex-1 text-right" placeholder="请填写姓名" placeholderStyle="text-align: right"/>
          </View>
          <View className="flex items-center justify-between py-2">
            <View>微信账号</View>
            <Input className="flex-1 text-right" placeholder="填写微信号，帮助老师快速联系您" placeholderStyle="text-align: right"/>
          </View>
          <View className="flex items-center py-2">
            <View>手机号</View>
            <Input className="flex-1 text-right" placeholder="请填写手机号" placeholderStyle="text-align: right"/>
          </View>
        </View>
      </View>
      <View className="flex justify-center bg-white pt-3 pb-10 px-6" style={{height: '15%'}}>
        <Button
          className="flex items-center justify-center h-full w-full text-white"
          style={{backgroundColor: '#4572FB'}}
          onClick={() => navigate('/')}
        >完成</Button>
      </View>
    </View>
  )
}
