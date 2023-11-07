import {Aside, Header} from "@/components";

const Home = () => {
    return (
        <div>
            <Header navigationItem="home"/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col relative">
                        <div className="min-w-[320px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                <Aside/>
                                <div className="h-[200vh]">

                                </div>
                                {/*<Content />*/}
                                {/*<FriendList />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;