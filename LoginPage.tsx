import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import moment from 'moment';
import {
    Input,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';

interface LoginPageProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const today = new Date();
        const todayDate = moment(today).format('MMDD');
        if (username === '' && password === '1233') {
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
        } else {
            setShowSuccessAlert(false);
            setShowErrorAlert(true);
        }
    };

    const handleChangeStatus = () => {
        setShowErrorAlert(false);
    };
    return (
        <div className="w-full flex justify-center items-center h-[100vh]  bg-emerald-50">
            <div className="flex-col justify-between  w-4/12 rounded-3xl border-zinc-800 border-2  bg-white relative">
                {showErrorAlert && (
                    <div className=" translate-y-2/3 flex flex-col z-50  absolute w-8/12  translate-x-1/4">
                        <Alert
                            status="error"
                            className="w-4/12 h-48 mx-auto  rounded-2xl transform flex flex-col justify-between"
                        >
                            <div className="flex p-10 w-full">
                                <AlertIcon />
                                <AlertTitle className="px-12">
                                    密碼錯誤
                                </AlertTitle>
                            </div>
                            <Button onClick={handleChangeStatus}>確認</Button>
                        </Alert>
                    </div>
                )}
                <div className="font-bold text-3xl  px-8 pt-8 pb-4 flex justify-center">
                    登入
                </div>
                <form onSubmit={handleLogin} className="w-8/12 mx-auto py-5">
                    <div className="py-3 flex-col flex">
                        <label
                            htmlFor="username"
                            className="pb-5 font-semibold"
                        >
                            Username
                        </label>
                        <div className="w-full flex justify-end">
                            <Input
                                type="text"
                                id="username"
                                width={56}
                                className="py-5 "
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    <div className="py-3 flex-col flex">
                        <label
                            htmlFor="password"
                            className="pb-5 font-semibold"
                        >
                            Password
                        </label>
                        <div className="w-full flex justify-end">
                            <Input
                                type="password"
                                id="password"
                                width={56}
                                value={password}
                                className=""
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="py-7 flex justify-center">
                        <Button type="submit" className="w-56">
                            登入
                        </Button>
                    </div>
                </form>
                {/* 登入成功的 Alert */}
                {showSuccessAlert && (
                    <Alert status="success" className="w-8/12 mx-auto">
                        <AlertIcon />
                        <AlertTitle>登入成功</AlertTitle>
                    </Alert>
                )}
                {/* 登入失敗的 Alert */}
            </div>
        </div>
    );
};

export default LoginPage;
