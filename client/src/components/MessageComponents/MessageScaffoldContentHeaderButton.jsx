const MessageScaffoldContentHeaderButton = ({ button }) => {
    return (
        <div onClick={button.onClick} className="w-[40px] h-[40px] p-[6px] flex flex-col flex-shrink-0 items-center justify-center cursor-pointer rounded-full overflow-hidden hover:bg-zinc-100 relative transition-all">
            <div className="w-[32px] h-[32px] flex items-center justify-center overflow-hidden relative">
                { button.icon }
            </div>
        </div>
    )
}

export default MessageScaffoldContentHeaderButton;