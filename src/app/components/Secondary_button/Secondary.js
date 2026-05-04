export default function Secondary({ Button_text }){
    return(
        <div className="w-auto cursor-pointer relative mix-blend-difference">
            <h6 className="pr-[50px] text-white">{Button_text}</h6>
            <div className="flex flex-col items-center justify-center absolute top-0 bottom-0 right-0 left-0">
                <img src="/images/black_arrow.svg" alt="Arrow" className="w-auto h-[100%] invert"/>
            </div>
        </div>
    );
}