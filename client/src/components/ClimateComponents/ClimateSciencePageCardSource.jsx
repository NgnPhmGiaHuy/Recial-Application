import Link from "next/link";

const ClimateSciencePageCardSource = ({ link, source }) => {
    return (
        <div>
            <div className="px-[16px] pt-[16px] pb-[8px]">
                <span className="block text-[12px] text-zinc-500 text-left font-normal break-words relative leading-5">
                    Source: <Link href={link} target="_blank" rel="noopener noreferrer"><strong className="hover:underline transition-all">{source}</strong></Link>
                </span>
            </div>
        </div>
    );
};

export default ClimateSciencePageCardSource;