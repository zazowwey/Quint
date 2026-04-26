export default function Cta(){
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
                                <span className = "text-d002 font-Primary text-(--C100) text-center">Launch Your Project <br/> With Precision.</span>
                            </div>
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
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}