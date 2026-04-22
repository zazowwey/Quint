export default function Projects({file_name , project_name, project_year, projects_desc, project_image_01, project_file_01_A, project_file_01_B, project_image_02, project_file_02_A, project_file_02_B, project_image_03, project_file_03_A, project_file_03_B, wedo_01, wedo_02, wedo_03, wedo_04, padding_top}){
    return(
        <div className = " w-full h-[100%] flex flex-row items-start justify-end overflow-hidden"> 
            <div className = "w-full h-[100%] flex flex-row items-stretch justify-end">

                <div className = "w-[43px] h-[126vh] border-r-[1px] border-(--C200)" style={{paddingTop: padding_top}}>
                    <div className = "flex flex-row items-center justify-center px-[12px] w-[100%] h-[130px] bg-(--C100) border-l-[1px] border-t-[1px] border-b-[1px] border-(--C200)">
                        <div className = "rotate-[-90deg]">
                            <span className = "text-b002 font-Secondary text-(--C300)">{file_name}</span>
                        </div>
                    </div>
                </div>

                <div className = "flex flex-col items-center justify-stretch gap-[60px] pt-[120px] pr-[63px] pl-[69px] w-[100%] h-[100%] bg-(--C100)">

                    {/* top row */}
                    
                    <div className = "w-[100%]">
                        <div className = "flex flex-col items-start justify-start gap-[32px]">
                            <div className = "relative">
                                <span className="text-d002 font-Primary text-(--C300) leading-[--ls02]">{project_name}</span>
                                <div className = "pt-[74px] absolute top-0 left-aauto right-0 bottom-0">
                                    <div className = "flex flex-col items-center justify-center w-[109px] h-[54px] bg-(--C400) rounded-[100%] rotate-[-12deg]">
                                        <span className = "text-d003 rotate-[12deg] font-Primary text-(--C100) leading-[--ls02]">{project_year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "grid grid-cols-3 gap-[80px]">
                            <p className = "col-span-2 text-b002 font-Secondary text-(--C300) w-[100%] max-w-[372px]">{projects_desc}</p>
                            <div className = "col-span-1 w-auto"></div>
                        </div>
                    </div>


                    {/* bottom row */}

                    <div className = "flex flex-row items-end justify-stretch gap-[64px] w-[100%] relative">
                        
                        <div className = "flex flex-row items-end justify-start w-[958px] h-[100%] relative">
                            
                            <div className = "flex flex-col items-end justify-start gap-[8px] w-[362px] h-[416px]">
                                <div className = "flex flex-row items-stretch justify-start gap-[12px]">
                                    <p className = "text-b003 font-Secondary text-(--C300)">{project_file_01_A}</p>
                                    <p className = "text-b003 font-Secondary text-(--C200)">{project_file_01_B}</p>
                                </div>
                                <img src={project_image_01} alt="Project Image" className = "w-[100%] max-w-[100%] h-[100%] max-h-[391px] object-cover shadow-[-12px_-2px_50px_rgba(0,0,0,0.3)]" />
                            </div>

                            <div className = "flex flex-col items-end justify-start gap-[8px] w-[362px] h-[367px] absolute top-auto left-[298px] right-auto bottom-0">
                                <div className = "flex flex-row items-stretch justify-start gap-[12px]">
                                    <p className = "text-b003 font-Secondary text-(--C300)">{project_file_02_A}</p>
                                    <p className = "text-b003 font-Secondary text-(--C200)">{project_file_02_B}</p>
                                </div>
                                <img src={project_image_02} alt="Project Image" className = "w-[100%] max-w-[100%] h-[100%] max-h-[391px] object-cover shadow-[-12px_-2px_50px_rgba(0,0,0,0.3)]" />
                            </div>


                            <div className = "flex flex-col items-end justify-start gap-[8px] w-[362px] h-[318px] absolute top-auto left-auto right-0 bottom-0">
                                <div className = "flex flex-row items-stretch justify-start gap-[12px]">
                                    <p className = "text-b003 font-Secondary text-(--C300)">{project_file_03_A}</p>
                                    <p className = "text-b003 font-Secondary text-(--C200)">{project_file_03_B}</p>
                                </div>
                                <img src={project_image_03} alt="Project Image" className = "w-[100%] max-w-[100%] h-[100%] max-h-[391px] object-cover shadow-[-12px_-2px_50px_rgba(0,0,0,0.3)]" />
                            </div>

                        </div>

                        <div className = "flex flex-col items-stretch justify-start gap-[24px] pb-[80px] w-[100%] max-w-[240px]">
                            <p className = "text-d003 font-Primary text-(--C300)">What are <span className="text-(--C100) bg-(--C400)">we did?</span></p>
                            <div className = "flex flex-col items-stretch justify-start gap-[4px]">
                                <div className = "px-[4px] pb-[2px] w-[100%] relative z-2 border-b-[1px] border-(--C200)">
                                    <p className = "text-b002 font-Secondary text-(--C300)">{wedo_01}</p>
                                </div>

                                <div className = "px-[4px] pb-[2px] w-[100%] relative z-2 border-b-[1px] border-(--C200)">
                                    <p className = "text-b002 font-Secondary text-(--C300)">{wedo_01}</p>
                                </div>

                                <div className = "px-[4px] pb-[2px] w-[100%] relative z-2 border-b-[1px] border-(--C200)">
                                    <p className = "text-b002 font-Secondary text-(--C300)">{wedo_02}</p>
                                </div>

                                <div className = "px-[4px] pb-[2px] w-[100%] relative z-2 border-b-[1px] border-(--C200)">
                                    <p className = "text-b002 font-Secondary text-(--C300)">{wedo_03}</p>
                                </div>

                                <div className = "px-[4px] pb-[2px] w-[100%] relative z-2 border-b-[1px] border-(--C200)">
                                    <p className = "text-b002 font-Secondary text-(--C300)">{wedo_04}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                
                    

                </div>

            </div>
        </div>
    );
}