export default function Service({service, service_desc}){
    return(
        <div className = "flex flex-col items-start justify-stretch gap-[40px]">
            <div className = "w-[100%] h-[1px] bg-(--C200)"></div>

            <div className = "flex flex-col items-start justify-stretch gap-[40px]">
                <div className = "flex flex-row items-end justify-between px-(--main-padding) w-full">
                    <h3 className = "text-(--C100)">{service}</h3>
                    <p className = "text-b002 text-(--C100) font-Secondary">{service_desc}</p>
                </div>
                <div className = "w-[100%] h-[200px] overflow-hidden">
                    <div className = "flex flex-row items-start justify-stretch gap-[20px]">
                        <img src="/carousel/C1.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C2.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C3.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C4.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C5.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C6.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C7.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                        <img src="/carousel/C8.png" alt="service" className="w-[284px] h-[200px] object-cover" />
                    </div>
                </div>
            </div>
            
            <div className = "w-[100%] h-[1px] bg-(--C200)"></div>
        </div>
    );
}