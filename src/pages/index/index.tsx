import {Route, Routes} from 'react-router-dom';
import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import {View} from '@tarojs/components';
import NavBar from '@/pages/nav_bar/nav-bar';
import CreateOrder from '@/pages/order/create-order';
import Register from '@/pages/register/register';
import TutorForm from '@/pages/register/tutor-form';
import AgentForm from '@/pages/register/agent-form';

export default function Index(){
  return (
    <View className="absolute flex flex-col w-full h-full">
      <View id="nav-bar" className="sticky top-0 z-50">
        <NavBar/>
      </View>
      <View id="content" className="flex-1 box-border w-full">
        <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-order" element={<CreateOrder/>}/>
          <Route path="/register/tutor" element={<TutorForm/>}/>
          <Route path="/register/agent" element={<AgentForm/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </View>
    </View>
  )
}
