import { supabase } from "@/lib/supabase/client";

export default async function Cta(){

    const { data: cta_content } = await supabase 
        .from("cta_content")
        .select("*")
        .single();

    const { data: cta_image }= await supabase
        .from("cta_images")
        .select("*")
        .order("order_index");

    const ctaImageStyles = [
    "w-[321px] h-[181px] object-cover absolute z-[1] top-auto bottom-[-5%] left-auto right-[12%] shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[15deg]",   // hero_01
    "w-[350px] h-[250px] object-cover absolute z-[4] top-auto bottom-[11%] left-[16%] right-auto shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[65deg]",  // hero_02
    "w-[260px] h-[340px] object-cover absolute z-[auto] top-auto bottom-[21%] left-auto right-[33%] shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[-40deg]",  // hero_03
    "w-[350px] h-[250px] object-cover absolute z-[3] top-[34%] bottom-auto left-[19%] right-auto shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[55deg]",      // hero_04
    "w-[250px] h-[260px] object-cover absolute z-[2] top-[9%] bottom-auto left-[28%] right-auto shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[30deg]",
    "w-[324px] h-[182px] object-cover absolute z-[auto] top-[19%] bottom-auto left-auto right-[16%] shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[-30deg]",
    "w-[180px] h-[240px] object-cover absolute z-[1] top-[-6%] bottom-auto left-[46%] right-auto shadow-[-8px_-2px_80px_rgba(0,0,0,0.3)] rotate-[40deg]"
  ];

    return(
        <section className = "px-(--main-padding)">
            <div className = "mx-auto w-[100%] h-[300vh] relative">
                <div className = "sticky top-0">
                    <div className = "relative">

                        <div className = "w-[100%] flex flex-row items-stretch justify-between h-[100%] absolute z-[1] top-0 left-0 right-0 bottom-0 border-l-[1px] border-r-[1px] border-(--C200)">
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                            <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
                        </div>

                        <div className = "flex flex-col items-stretch justify-between pb-[64px] h-[100vh] relative z-[2]">
                            <div className = "flex flex-col items-center justify-center h-[100%]">
                                <span className = "text-d002 font-Primary text-(--C100) text-center">{cta_content?.headline}<br/>{cta_content?.cta_text}</span>
                            </div>

                            {/* Progress Bar */}
                            <div className = "w-[100%] h-[56px] relative z-[5] bg-(--C300) border-t-[1px] border-b-[1px] border-(--C200)">
                                {/* <div></div> */} 
                                <div className = "flex flex-row items-stretch justify-between w-[100%] h-[100%] relative z-[2] border-l-[1px] border-r-[1px] border-(--C200) blend-difference">

                                    <div className = "flex flex-row items-center justify-start gap-[24px] pl-[32px] h-[100%}">
                                        <p className = "text-btn2 text-(--C100) font-Primary text-left">Launch Your Project</p>
                                        <img src = "/images/arrow_cta.svg" alt="arrow icon" className="w-[40px] h-[33px] object-cover" />
                                    </div>

                                    <div className="flex flex-row items-center justify-start pr-[32px] overflow-hidden">
                                        
                                        <div className = "h-[20px] overflow-hidden">
                                            <div className = "flex flex-col items-center justify-start">
                                                <div>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">0</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">10</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">20</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">30</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">40</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">50</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">60</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">70</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">80</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">90</p>
                                                    <p className = "text-b002 text-(--C100) font-Secondary">100</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className = "text-b002 text-(--C100) font-Secondary">%</p>

                                    </div>

                                </div>
                            </div>

                            {/* CTA Images */}
                            <div className = "hidden flex flex-col items-center justify-end w-[100%] h-[100%] overflow-hidden absolute z-[2] top-0 bottom-0 left-0 right-0">
                                <div className = "w-[100%] h-[120vh] relative">
                                    {cta_image?.map((item) => (
                                        <img key={item.id} src={item.image_url} alt="cta image" className={`${ctaImageStyles[item.order_index - 1]}`}/>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}