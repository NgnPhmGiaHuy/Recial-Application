import React from "react";
import {OAuthLogin} from "@/components";

const AuthLoginForm = ({action, handleChange, isLogin, isSignup}) => {
    return (
        <>
            <div
                className={`${isSignup ? "bg-white items-center justify-center" : null} flex flex-col p-[28px] rounded-[40px]`}>
                <div>
                    <div className={`${isLogin ? "text-[56px]" : null} ${isSignup ? "text-[46px]" : null} text-amber-400 font-extralight leading-[67px]`}>
                        <h1>{isLogin ? <span>Save world through your community</span> : <span>Connect for Green Change</span>}</h1>
                    </div>
                </div>
                <div className={`${isLogin ? "w-[408px]" : "w-fit"} flex flex-col mt-[24px]`}>
                    <form onSubmit={action}>
                        <div className="flex flex-col">
                            <div className="flex flex-col items-start my-[12px]">
                                <div className="text-black text-[14px] font-normal leading-normal">
                                    <label htmlFor="session_key">Email or phone</label>
                                </div>
                                <div className="w-full">
                                    <input type="text" name="session_key" id="session_key"
                                           placeholder="Email or phone numbers"
                                           onChange={handleChange}
                                           required
                                           className="mt-[8px] h-[57px] p-4 w-full rounded-md border border-solid border-gray-500 focus:outline-lime-400"/>
                                </div>
                            </div>
                            {isSignup ? (
                                <div className="flex flex-row items-start gap-4 my-[12px]">
                                    <div className="flex flex-1 flex-col">
                                        <div className="text-black text-[14px] font-normal leading-normal">
                                            <label htmlFor="session_firstname">First name</label>
                                        </div>
                                        <div className="w-full">
                                            <input type="text" name="session_firstname" id="session_firstname"
                                                   placeholder="First name"
                                                   onChange={handleChange}
                                                   required
                                                   className="mt-[8px] h-[57px] p-4 w-full rounded-md border border-solid border-gray-500 focus:outline-lime-400"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div className="text-black text-[14px] font-normal leading-normal">
                                            <label htmlFor="session_lastname">Last name</label>
                                        </div>
                                        <div className="w-full">
                                            <input type="text" name="session_lastname" id="session_lastname"
                                                   placeholder="Last name (optional)"
                                                   onChange={handleChange}
                                                   className="mt-[8px] h-[57px] p-4 w-full rounded-md border border-solid border-gray-500 focus:outline-lime-400"/>
                                        </div>
                                    </div>

                                </div>
                            ) : null}
                            <div className="flex flex-col items-start my-[12px]">
                                <div className="text-black text-[14px] font-normal leading-normal">
                                    <label htmlFor="session_password">Password</label>
                                </div>
                                <div className="w-full">
                                    <input type="password" name="session_password" id="session_password"
                                           placeholder="Password"
                                           onChange={handleChange}
                                           required
                                           className="mt-[8px] h-[57px] p-4 w-full rounded-md border border-solid border-gray-500 focus:outline-lime-400"/>
                                </div>
                            </div>
                            {isLogin ? (
                                <div className="flex flex-row items-center justify-start my-[16px] w-full">
                                    <div className="flex flex-row">
                                        <div
                                            className="text-lime-500 text-[16px] font-semibold leading-5 hover:text-lime-700 transition-all">
                                            <a href="">Forgot password ?</a>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <div className="flex items-center justify-center my-[8px] mx-[4px]">
                                <button type="submit"
                                        className="w-full h-[54px] px-[24px] py-[12px] text-base font-bold bg-lime-500 text-white rounded-full hover:bg-lime-700 transition-all">
                                    {isLogin ? (<span>Login</span>) : (<span>Agree & Join</span>)}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="pt-[16px] pb-[24px]">
                        <div
                            className="w-full before:h-[1px] before:bg-zinc-300 before:w-auto before:grow after:h-[1px] after:bg-zinc-300 after:w-auto after:grow flex items-center justify-center text-center">
                            <p className="h-[21px] px-[32px] text-black">or</p>
                        </div>
                    </div>
                    <div>
                        <OAuthLogin isLogin={isLogin} isSignup={isSignup}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLoginForm;