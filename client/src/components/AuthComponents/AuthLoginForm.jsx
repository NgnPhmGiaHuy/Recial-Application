"use client"

import Link from "next/link";

import { useToggleState } from "@/hooks";
import { EyeIcon, EyeSlashIcon, OAuthLogin } from "@/components";

const AuthLoginForm = ({ action, handleChange, isLogin, isSignup, error, setError }) => {
    const [showPassword, setShowPassword, handleShowPassword] = useToggleState(false);

    return (
        <>
            <div className={`${isSignup ? "bg-white items-center justify-center" : null} p-[28px] flex flex-col rounded-[40px]`}>
                <div>
                    <div className={`${isLogin ? "sm:text-[56px]" : null} ${isSignup ? "sm:text-[46px]" : null} text-[36px] text-amber-400 font-extralight sm:leading-[67px] leading-[50px]`}>
                        <h1>{isLogin ? <span>Save world through your community</span> : <span>Connect for Green Change</span>}</h1>
                    </div>
                </div>
                <div className={`${isLogin ? "sm:w-[408px]" : "sm:w-fit"} w-fit mt-[24px] flex flex-col`}>
                    <form onSubmit={action}>
                        <div className="flex flex-col">
                            <div className="my-[12px] flex flex-col items-start relative">
                                <div className="sm:text-[14px] text-[12px] text-black font-normal leading-normal">
                                    <label htmlFor="session_key">Email or phone</label>
                                </div>
                                <div className="w-full relative mt-[8px]">
                                    <input type="text" name="session_key" id="session_key" placeholder="Email or phone numbers" onChange={handleChange} required
                                           className={`${error && error.isEmailError ? "outline-red-500" : "outline-zinc-500"} w-full sm:h-[57px] h-[44px] p-4 rounded-xl outline outline-1 focus:outline-lime-400`} onFocus={error ? () => setError({setIsEmailError: false}) : null}/>
                                </div>
                            </div>
                            { error && error.isEmailError && error.formErrorStatus ? (
                                <div className="my-[2px] flex flex-row items-center">
                                    <div className="sm:w-[20px] w-[16px] sm:h-[20px] h-[16px] p-[2px] flex items-center justify-center bg-red-500 rounded-md overflow-hidden relative">
                                        <span className="sm:text-[14px] text-[12px] text-white text-center font-bold break-words relative leading-5">
                                            !
                                        </span>
                                    </div>
                                    <div className="ml-[8px] flex items-center relative">
                                        <span className="sm:text-[14px] text-[12px] text-red-500 text-left font-normal break-words relative leading-5">
                                            { error.formErrorStatus }
                                        </span>
                                    </div>
                                </div>
                            ) : null }
                            {isSignup ? (
                                <div className="my-[12px] flex flex-row items-start gap-4">
                                    <div className="flex flex-col flex-1">
                                        <div className="sm:text-[14px] text-[12px] text-black font-normal leading-normal">
                                            <label htmlFor="session_firstname">First name</label>
                                        </div>
                                        <div className="w-full mt-[8px]">
                                            <input type="text" name="session_firstname" id="session_firstname" placeholder="First name" onChange={handleChange} required className="w-full sm:h-[57px] h-[44px] p-4 rounded-xl outline outline-1 outline-zinc-500 focus:outline-lime-400"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div className="text-black sm:text-[14px] text-[12px] font-normal leading-normal">
                                            <label htmlFor="session_lastname">Last name</label>
                                        </div>
                                        <div className="w-full mt-[8px]">
                                            <input type="text" name="session_lastname" id="session_lastname" placeholder="Last name (optional)" onChange={handleChange} className="w-full sm:h-[57px] h-[44px] p-4 rounded-xl outline outline-1 outline-zinc-500 focus:outline-lime-400"/>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <div className="my-[12px] flex flex-col items-start">
                                <div className="sm:text-[14px] text-[12px] text-black font-normal leading-normal">
                                    <label htmlFor="session_password">Password</label>
                                </div>
                                <div className="w-full relative mt-[8px]">
                                    <input type={`${showPassword ? "text" : "password"}`} name="session_password" id="session_password" placeholder="Password" onChange={handleChange} required
                                           className={`${error && error.isPasswordError ? "outline-red-500" : "outline-zinc-500"} w-full sm:h-[57px] h-[44px]  p-4 rounded-xl outline outline-1 focus:outline-lime-400`} onFocus={error ? () => setError({setIsPasswordError: false}) : null}/>
                                    <div className="top-0 right-[16px] h-full flex items-center justify-center absolute">
                                        <div className="w-fit h-fit text-black cursor-pointer" onClick={handleShowPassword}>
                                            { showPassword ? (
                                                <EyeIcon fill="none" stroke="currentColor" />
                                            ) : (
                                                <EyeSlashIcon fill="none" stroke="currentColor" />
                                            ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { error && error.isPasswordError && error.formErrorStatus ? (
                                <div className="my-[2px] flex flex-row items-center">
                                    <div className="w-[20px] h-[20px] p-[2px] flex items-center justify-center bg-red-500 rounded-md overflow-hidden relative">
                                        <span className="sm:text-[14px] text-[12px] text-white text-center font-bold break-words relative leading-5">
                                            !
                                        </span>
                                    </div>
                                    <div className="ml-[8px] flex items-center relative">
                                        <span className="sm:text-[14px] text-[12px] text-red-500 text-left font-normal break-words relative leading-5">
                                            { error.formErrorStatus }
                                        </span>
                                    </div>
                                </div>
                            ) : null }
                            { isLogin && (
                                <div className="w-full my-[16px] flex flex-row items-center justify-start">
                                    <div className="flex flex-row">
                                        <div className="sm:text-[16px] text-[13px] text-lime-500 font-semibold hover:text-lime-700 leading-5 transition-all">
                                            <Link href="">Forgot password ?</Link>
                                        </div>
                                    </div>
                                </div>
                            ) }
                            <div className="mx-[4px] my-[8px] flex items-center justify-center">
                                <button type="submit" className="w-full sm:h-[54px] h-[44px] px-[24px] sm:py-[12px] py-[8px] sm:text-[16px] text-[14px] text-white font-bold bg-lime-500 rounded-full leading-5 hover:bg-lime-700 transition-all">
                                    { isLogin ? (<span>Login</span>) : (<span>Agree & Join</span>) }
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="sm:pt-[16px] pt-[12px] sm:pb-[24px] pb-[20px]">
                        <div className="w-full flex items-center justify-center text-center before:h-[1px] before:bg-zinc-300 before:w-auto before:grow after:h-[1px] after:bg-zinc-300 after:w-auto after:grow">
                            <p className="sm:h-[21px] h-[17px] sm:px-[32px] px-[28px] sm:text-[16px] text-[14px] text-black">or</p>
                        </div>
                    </div>
                    <div>
                        <OAuthLogin isLogin={isLogin} isSignup={isSignup} setError={setError}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLoginForm;