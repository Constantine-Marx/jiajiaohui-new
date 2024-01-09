import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home/home";
import Login from "@/pages/login/login";
import {View} from "@tarojs/components";
import NavBar from "@/pages/nav_bar/nav-bar";
import CreateOrder from "@/pages/order/create-order";
import {useAtom} from "jotai/index";
import {NavBarOffsetHeightAtom} from "@/store/store";
import Register from "@/pages/register/register";
import TutorForm from "@/pages/register/tutor-form";
import AgentForm from "@/pages/register/agent-form";

export default function Index(){
  const [nav_bar_offset_height, _] = useAtom(NavBarOffsetHeightAtom);
  return (
      <View className="flex flex-col">
        <NavBar />
        <View className="absolute box-border h-full w-full" style={{paddingTop: nav_bar_offset_height}}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-order" element={<CreateOrder />} />
            <Route path="/register/tutor" element={<TutorForm />} />
            <Route path="/register/agent" element={<AgentForm />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </View>
      </View>
  )
}
