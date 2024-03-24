import { ClimateSciencePageCardHeader, GrayButton, RecognizedOrganizationsItem } from "@/components";

const RecognizedOrganizations = () => {
    const organizations = [
        {
            profile: {
                _id: "",
                profile_picture_url: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/276176409_275332584771142_507904235747872858_n.png?stp=dst-png_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHDnpI6YanDCWdzu9RAUnM73FdOea2zsPvcV055rbOw-zlXPdhh2o-TAbNS6qaUHySv_96k0afFaUvJ8HaPo3WN&_nc_ohc=Z4N_wAuJjIsAX-xa9cp&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfCNO-11TH2jlcorZx2Z0-zckRKSyoCoaaxJio_8mXadhQ&oe=66031697",
                organization_name: "IPCC",
                organization_description: "Nonprofit organization",
            }
        }, {
            profile: {
                _id: "",
                profile_picture_url: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/271749354_287578106737301_2016233505493951851_n.png?stp=dst-png_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGQBCYtPrGivl5Q4goYDs0u8a73mcNn1UjxrveZw2fVSHmDMA39ibDZT_UOGwQHXBOimQrVfEltCeHWlGlni7fu&_nc_ohc=ArrJBajB6WgAX-ZAJ6h&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfBIf15Jm2TUOz_7YAPVnLOBwKCJC1KWkhjOylrjYjiMFQ&oe=6602E1CA",
                organization_name: "World Meteorological Organization ",
                organization_description: "Intergovernmental Organization",
            }
        }, {
            profile: {
                _id: "",
                profile_picture_url: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/271714453_288492856644133_2259217072983045887_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHp8uGn7pQ5-VLllAqDkPKDeXvRXlli5_B5e9FeWWLn8FqeYC_PzDcpQuBZvpyn4bvnR14EBuQrI3haWLWVEwjp&_nc_ohc=zh3hkv2yK3MAX_Egxk7&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDWjHK7al9WY9RBE2MigMzkzNRq0FoPHu87b7QrCjXUBQ&oe=66035F15",
                organization_name: "UN Environment Programme",
                organization_description: "Organization",
            }
        },
    ]

    return (
        <div>
            <div className="w-full flex flex-col flex-shrink-0 relative">
                <div className="w-full rounded-xl bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] overflow-hidden relative">
                    <div className="flex flex-col grow relative">
                        <ClimateSciencePageCardHeader title="Recognized organizations" onClick=""/>
                        <div className="my-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="flex flex-col flex-shrink-0 grow justify-center relative">
                                <div>
                                    {organizations.map((value, index) => (
                                        <RecognizedOrganizationsItem key={index} organizationProps={value}/>
                                    ))}
                                </div>
                            </div>
                            <div className="px-[16px] py-[8px]">
                                <GrayButton title="See all" onClick=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecognizedOrganizations;