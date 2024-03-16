import { Outlet } from "react-router-dom";

const LoginRoot = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="max-w-[350px] rounded-[10px] shadow-lg bg-slate-300">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginRoot;
