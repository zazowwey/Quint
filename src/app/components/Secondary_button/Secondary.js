export default function Secondary({ Button_text }){
    return(
        <div className="w-auto cursor-pointer relative mix-blend-difference">
            <span className="pr-[50px] text-white text-btn1">{Button_text}</span>
            <div className="flex flex-col items-center justify-center absolute top-0 bottom-0 right-0 left-0">
                <img src="/images/black_arrow.svg" alt="Arrow" className="w-auto h-[100%] invert"/>
            </div>
        </div>
    );
}