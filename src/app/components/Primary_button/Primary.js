export default function Primary ({primary_button_text}){
    return(
        <div className = "flex flex-row items-stretch justify-start gap-[8px] px-[20px] py-[11px] w-auto bg-(--C100) rounded-[100px] border-1 border-(--C300) cursor-pointer">
            <p className = "text-btn1 text-(--C300) font-Primary">{primary_button_text}</p>
            <img src= "/images/Vector.svg" alt="primary button logo" className = "w-[16px] h-[16px] object-cover"/>
        </div>
    );
}