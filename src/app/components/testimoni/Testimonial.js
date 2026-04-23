export default function Testimonial({ testimonial_image, user_name, testimoni}){
    return(
        <div className = "flex flex-row items-center justify-center gap-[40px] w-[596px] h-[607px] overflow-hidden">
            <div className = "relative w-[260px] h-[583px] overflow-hidden rounded-[100%] rotate-[7deg]">
                <img src = {testimonial_image} alt="testimonial image" className="w-[100%] h-[100%] object-cover scale-[1.2] rotate-[-7deg]" />
                <span className = "text-d003 w-auto font-Primary text-(--C100) absolute top-auto left-[22%] bottom-[24%] right-auto rotate-[-7deg]">{user_name}</span>
            </div>

            <div className = "flex flex-col items-stretch justify-start gap-[80px] w-[100%] max-w-[250px]">
                <div className = "pl-(--main-padding)">
                    <img src="/testimonial/quote.svg" alt="quote icon" className="w-[68px] h-[60px] object-cover" />
                </div>
                <p className = "text-b001 text-(--C100) font-Secondary text-left">{testimoni}</p>
            </div>
        </div>
    );
}