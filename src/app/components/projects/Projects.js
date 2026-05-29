import Secondary from "../Secondary_button/Secondary";

export default function Projects({file_name , project_name, project_year, projects_desc, project_image_01, project_file_01_A, project_file_01_B, project_image_02, project_file_02_A, project_file_02_B, project_image_03, project_file_03_A, project_file_03_B, wedo_01, wedo_02, wedo_03, wedo_04, padding_top}){
    return(
        <div className = " w-[100vw] h-[100vh] flex flex-row items-start justify-end overflow-hidden"> 
            <div className = "w-full h-[100%] flex lg:flex-row md:flex-col flex-col items-stretch justify-end">

                <div className = "lg:w-[43px] md:w-full w-full lg:h-[126vh] md:h-[41px] h-[41px] border-r-[1px] border-(--C200) lg:[padding-top:var(--pt)] flex flex-row items-start justify-end" style={{ "--pt": padding_top }}>
                    <div className = "flex flex-row items-center justify-center px-[12px] lg:w-[100%] md:w-auto w-auto lg:h-[126px] md:h-[100%] h-[100%] bg-(--C100) border-l-[1px] border-t-[1px] border-b-[1px] border-(--C200)">
                        <div className = "lg:rotate-[-90deg] md:rotate-0 rotate-0">
                            <span className = "text-b002 font-Secondary text-(--C300)">{file_name}</span>
                        </div>
                    </div>
                </div>

                <div className = "flex flex-col items-center justify-stretch lg:gap-[60px] md:gap-[60px] gap-[5px] lg:pt-[120px] md:pt-[80px] pt-[70px] lg:pr-[63px] md:pr-(--main-padding) pr-(--main-padding) lg:pl-[69px] md:pl-(--main-padding) pl-(--main-padding) w-[100%] h-[100%] bg-(--C100)">

                    {/* top row */}
                    
                    <div className = "w-[100%] flex flex-col lg:items-start md:items-start items-center lg:justify-start md:justify-start justify-center gap-[32px]">
                        <div className = "flex flex-col items-start justify-start gap-[32px]">
                            <div className = "relative">
                                <span className="lg:text-d002 md:text-d002 text-h002  font-Primary text-(--C300) leading-lh01 tracking-ls02">{project_name}</span>
                                <div className = "lg:pt-[74px] md:pt-0 pt-0 absolute lg:top-0 md:top-auto top-auto left-auto lg:right-0 md:right-[-8%] right-[-12%] lg:bottom-0 md:bottom-0 bottom-[-14%] lg:block md:flex flex flex-col items-center justify-center">
                                    <div className = "flex flex-col items-center justify-center lg:w-[109px] md:w-[72px] w-[72px] lg:h-[54px] md:h-[32px] h-[32px] bg-(--C400) rounded-[100%] rotate-[-12deg]">
                                        <span className = "text-d003 rotate-[12deg] font-Primary text-(--C100) leading-[--ls02]">{project_year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "flex lg:flex-row md:flex-row flex-col lg:items-end md:items-end items-start justify-start lg:gap-[80px] md:gap-[24px] gap-[24px]">
                            <p className = " text-b002 font-Secondary text-(--C300) w-[100%] max-w-[372px] lg:text-left md:text-left text-justify">{projects_desc}</p>
                            <div className = "lg:w-auto md:w-auto w-full flex flex-row items-start justify-end relative ">
                                <Secondary Button_text = "View Project"/>
                            </div>
                        </div>
                    </div>


                    {/* bottom row */}

                    <div className = "flex lg:flex-row md:flex-col flex-col items-end lg:justify-stretch md:justify-stretch justify-stretch gap-[64px] w-[100%] relative">
                        
                        <div className = "flex flex-row items-end lg:justify-start md:justify-start justify-center lg:w-[958px] md:w-full w-full h-[100%] relative">
                            
                            <div className = "flex flex-col items-end justify-start gap-[8px] lg:w-[362px] md:w-auto w-auto lg:h-[416px] md:h-auto h-auto">
                                <div className = "flex flex-row items-stretch justify-start gap-[12px]">
                                    <p className = "text-b003 font-Secondary text-(--C300) lg:block md:hidden hidden">{project_file_01_A}</p>
                                    <p className = "text-b003 font-Secondary text-(--C200) lg:block md:hidden hidden">{project_file_01_B}</p>
                                </div>
                                <img src={project_image_01} alt="Project Image" className = "lg:w-[100%] md:w-[234px] w-[111px] max-w-[100%] lg:h-[100%] md:h-[253px] h-[120px] max-h-[391px] object-cover shadow-[-12px_-2px_50px_rgba(0,0,0,0.3)]" />
                            </div>

                            <div className = "flex flex-col items-end justify-start gap-[8px] lg:w-[362px] md:w-auto w-auto lg:h-[367px] md:h-auto h-auto lg:absolute md:absolute static top-auto lg:left-[298px] md:left-[193px] left-[103px] right-auto bottom-0">
                                <div className = "flex flex-row items-stretch justify-start gap-[12px]">
                                    <p className = "text-b003 font-Secondary text-(--C300) lg:block md:hidden hidden">{project_file_02_A}</p>
                                    <p className = "text-b003 font-Secondary text-(--C200) lg:block md:hidden hidden">{project_file_02_B}</p>
                                </div>
                                <img src={project_image_02} alt="Project Image" className = "lg:w-[100%] md:w-[234px] w-[111px] max-w-[100%] lg:h-[100%] md:h-[221px] h-[105px] max-h-[391px] object-cover shadow-[-12px_-2px_50px_rgba(0,0,0,0.3)]" />
                            </div>


                            <div className = "flex flex-col items-end justify-start gap-[8px] lg:w-[362px] md:w-auto w-auto lg:h-[318px] md:h-auto h-auto lg:absolute md:absolute static top-auto lg:left-auto md:left-[386px] left-[182px] lg:right-0 md:right-auto right-auto lg:bottom-0 md:bottom-0 bottom-0">
                                <div className = "flex flex-row items-stretch justify-start gap-[12px]">
                                    <p className = "text-b003 font-Secondary text-(--C300) lg:block md:hidden hidden">{project_file_03_A}</p>
                                    <p className = "text-b003 font-Secondary text-(--C200) lg:block md:hidden hidden">{project_file_03_B}</p>
                                </div>
                                <img src={project_image_03} alt="Project Image" className = "lg:w-[100%] md:w-[234px] w-[111px] max-w-[100%] lg:h-[100%] md:h-[189px] h-[90px] max-h-[391px] object-cover shadow-[-12px_-2px_50px_rgba(0,0,0,0.3)]" />
                            </div>

                        </div>

                        <div className = "flex flex-col lg:items-stretch md:items-stretch items-center lg:justify-start md:justify-start justify-center  gap-[24px] lg:pb-[80px] md:pb-[24px] pb-[24px] w-[100%] lg:max-w-[240px] md:max-w-[240px] max-w-[100%]">
                            <p className = "text-d003 font-Primary text-(--C300)">What are <span className="text-(--C100) bg-(--C400)">we did?</span></p>
                            <div className = "flex flex-col items-stretch justify-start gap-[4px]">

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