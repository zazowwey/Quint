import { supabase } from "@/lib/supabase/client";

export default async function Service({service, service_desc}){

    const { data: service_images } = await supabase
        .from ("service_images")
        .select("*")
        .order("order_index");

    return(
        <div className = "flex flex-col items-start justify-stretch gap-[40px]">
            <div className = "w-[100%] h-[1px] bg-(--C200)"></div>

            <div className = "flex flex-col items-start justify-stretch gap-[40px]">
                <div className = "flex lg:flex-row md:flex-row flex-col lg:items-end md:items-end items-start justify-between px-(--main-padding) w-full">
                    <h3 className = "text-(--C100)">{service}</h3>
                    <p className = "text-b002 text-(--C100) font-Secondary">{service_desc}</p>
                </div>
                <div className = "w-[100%] lg:h-[200px] md:h-auto h-auto overflow-hidden">
                    <div className = "flex flex-row items-start justify-stretch gap-[20px]">
                        {service_images?.map((item)=>(
                        <img key={item?.id} src={item?.image_url} alt="service" className="lg:w-[284px] md:w-[284px] w-[150px] lg:h-[200px] md:h-[200px] h-[100px] object-cover" />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className = "w-[100%] h-[1px] bg-(--C200)"></div>
        </div>
    );
}