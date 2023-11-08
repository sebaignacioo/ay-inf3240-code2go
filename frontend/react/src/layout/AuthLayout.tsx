import { Link, Outlet } from "react-router-dom";

import Icon from "../components/Icon";

const AuthLayout = () => {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Link to="/"><Icon /></Link>
            </div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
