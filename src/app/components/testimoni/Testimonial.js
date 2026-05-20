export default function Testimonial({ testimonial_image, user_name, testimoni}){
    return(
        <div className = "flex flex-row items-center lg:justify-center md:justify-start justify-center gap-[40px] lg:w-[596px] md:w-[441px] w-[100%] lg:h-[607px] md:h-[301px] h-[301px] overflow-hidden">
            <div className = "relative lg:w-[260px] md:w-[114px] w-[114px] lg:h-[583px] md:h-[289px] h-[289px] overflow-hidden rounded-[100%] rotate-[7deg]">
                <img src = {testimonial_image} alt="testimonial image" className="w-[100%] h-[100%] object-cover scale-[1.2] rotate-[-7deg]" />
                <span className = "text-d003 w-auto font-Primary text-(--C100) absolute top-auto left-[22%] bottom-[24%] right-auto rotate-[-7deg]">{user_name}</span>
            </div>

            <div className = "flex flex-col items-stretch justify-start gap-[80px] w-[100%] max-w-[250px]">
                <div className = "pl-(--main-padding)">
                    <img src="/testimonial/quote.svg" alt="quote icon" className="lg:w-[68px] md:w-[34px] w-[34px] lg:h-[60px] md:h-[30px] h-[30px] object-cover" />
                </div>
                <p className = "text-b001 text-(--C100) font-Secondary text-left">{testimoni}</p>
            </div>
        </div>
    );
}