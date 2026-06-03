"use client"
import { useState } from "react";

export default function Service({ service, service_desc, service_images }) {

    const [hovered, setHovered] = useState(false);
    const doubled = [...(service_images ?? []), ...(service_images ?? [])];

    return (
        <div className="flex flex-col items-start justify-stretch gap-[40px]">
            <div className="w-[100%] h-[1px] bg-(--C200)"></div>

            <div className="flex flex-col items-start justify-stretch gap-[40px]" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="flex lg:flex-row md:flex-row flex-col lg:items-end md:items-end items-start justify-between px-(--main-padding) w-full">
                    <h3 style={{ color: hovered ? 'white' : 'grey' }} className="transition-colors duration-800">{service}</h3>
                    <p className="text-b002 font-Secondary transition-colors duration-800" style={{ color: hovered ? 'white' : 'grey' }}>{service_desc}</p>
                </div>
                <div
                    className="w-[100%] overflow-hidden transition-all duration-500"
                    style={{ height: hovered ? "200px" : "0px" }}
                >
                    <div className="flex flex-row items-start flex-1 gap-[20px] animate-loopTicker">
                        {doubled.map((item,index) => (
                            <img key={index} src={item?.image_url} alt="service" className="lg:w-[284px] md:w-[284px] w-[150px] lg:h-[200px] md:h-[200px] h-[100px] object-cover" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-(--C200)"></div>
        </div>
    );
}