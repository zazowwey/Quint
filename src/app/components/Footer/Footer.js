import { supabase } from "@/lib/supabase/client";


export default async function Footer(){

    const { data: footer } = await supabase
        .from("footer_content")
        .select("*")
        .single();

    return(
        <section className = "pt-[120px] overflow-hidden bg-(--C100)">
            <div className = "mx-auto w-[100%]">
                <div className = "flex flex-col items-stretch justify-start gap-[56px]">

                    {/* Footer top  */}

                    <div className = "flex flex-col items-stretch justify-start gap-[40px]">

                        {/* Footer top row 1 */}

                        <div className = "flex flex-col items-stretch justify-start gap-[16px]">
                            <div className = "w-[100%] px-(--main-padding) relative border-b-[1px] border-(--C200)">
                                <p className = "text-b002 text-(--C300) text-left font-Secondary">{footer?.desc_line_1}</p>
                            </div>
                            <div className = "w-[100%] px-(--main-padding) relative border-b-[1px] border-(--C200)">
                                <p className = "text-b002 text-(--C300) text-left font-Secondary">{footer?.desc_line_2}</p>
                            </div>
                        </div>

                        {/* Footer top row 2 */}

                        <div className = "flex flex-row items-end justify-start h-[auto]">

                            <div className = "flex flex-col items-end justify-stretch lg:w-[100%] md:w-[100%] w-[4%]">
                                <div className = "w-[100%] h-[40px] border-x-[1px] border-t-[1px] border-(--C200)"></div>
                                <div className = "w-[100%] h-[40px] border-x-[1px] border-y-[1px] border-(--C200)"></div>
                            </div>

                            {/* Footer form */}

                            <div className = "flex flex-col items-stretch justify-start gap-[16px] lg:w-auto md:w-auto w-[100%]">
                                <h6 className = "text-(--C300)">{footer?.form_heading}</h6>
                                <div className ="w-full">
                                    <div className = "flex flex-row items-stretch justify-start w-[100%]">
                                        <input className = "border-y-[1px] border-(--C200) border-r-[1px] lg:w-[263px] md:w-[263px] w-[100%] h-[40px] px-[12px] py-[8px] outline-none placeholder-(--C200) font-Secondary text-(--C200)" type="text" placeholder="First Name" ></input>
                                        <input className = "border-y-[1px] border-(--C200) border-r-[1px] lgw-[263px] md:w-[263px] w-[100%] h-[40px] px-[12px] py-[8px] outline-none placeholder-(--C200) font-Secondary text-(--C200)" type="text" placeholder="Last Name" ></input>
                                    </div>
                                    <div className = "flex flex-row items-stretch justify-start w-[100%]">
                                        <input className = "border-b-[1px] border-(--C200) border-r-[1px]  h-[40px] px-[12px] py-[8px] outline-none placeholder-(--C200) font-Secondary text-(--C200) lg:w-[486px] md:w-[486px] w-[100%]" type="email" placeholder="E-mail" ></input>
                                        <button className = "bg-(--C300) px-[12.5] py-[14.5] w-[40px] h-[40px] flex flex-row items-center justify-center">
                                            <img src="/images/arrow_cta.svg" alt="submit" className = "w-[100%} h-[100%]" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className = "flex flex-col items-end justify-stretch w-[4%]">
                                <div className = "w-[100%] h-[40px] border-r-[1px] border-t-[1px] border-(--C200)"></div>
                                <div className = "w-[100%] h-[40px] border-r-[1px] border-y-[1px] border-(--C200)"></div>
                            </div>
                        </div>

                    </div>

                    {/* Footer bottom row */}

                    <div className = "flex lg:flex-row md:flex-row flex-col items-stretch justify-start lg:gap-[120px] md:gap-0 gap-0 lg:pl-[64px] md:pl-[24px] pl-(--main-padding) lg:pr-0 md:pr-0 pr-(--main-padding) lg:pb-0 md:pb-0 pb-(--main-padding) relative ">
                        
                        <div className = "flex flex-row items-end lg:justify-start md:justify-start justify-center lg:gap-[120px] md:gap-0 gap-0 perspective-[1000px] perspective-origin-[50%_50%] lg:h-auto md:h-[569px] h-auto">
                            <div className = "pt-[80px] h-full lg:block md:block hidden">
                                <img src={footer?.logo_url} alt="Logo" className = "w-[72px] h-[80px]"/>
                            </div>
                            <img src={footer?.character_url} alt="character" className = "lg:w-[376px] md:w-[294px] w-[236px] lg:h-[510px] md:h-[400px] h-[320px] object-cover"/>
                            <div className="pt-[80px] flex flex-col items-start justify-end pb-[120px] h-full lg:flex md:hidden hidden">
                                <img src={footer?.logo_url} alt="Logo" className="w-[72px] h-[80px]"/>
                            </div>
                        </div>

                        <div className = "flex flex-col items-stretch justify-between p-[24px] lg:w-[360px] md:w-[240px] w-[100%] h-[400px] lg:absolute md:absolute static top-auto left-auto right-[24px] bottom-[24px] bg-(--C300)">
                            <div className = "flex flex-col items-stretch justify-start gap-[32px]">
                                <div className = "flex flex-col items-stretch justify-start gap-[4px]">
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">Home</p>
                                    </div>
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">About</p>
                                    </div>
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">Works</p>
                                    </div>
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">Service</p>
                                    </div>
                                </div>

                                <div className = "flex flex-col items-stretch justify-start gap-[4px]">
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">License</p>
                                    </div>
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">Style guide</p>
                                    </div>
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">404</p>
                                    </div>
                                    <div className = "pb-[4px] border-b-[1px] border-(--C200) cursor-pointer">
                                        <p className = "text-b002 font-Secondary text-(--C100)">ChangeLog</p>
                                    </div>
                                </div>
                            </div>

                            <div className = "flex flex-row items-stretch justify-start gap-[8px]">
                                <div className = "w-[24px] h-[24px]">
                                    <img src="/images/linkedin.svg" alt="linkedin" className = "w-[24px] h-[24px]" />
                                </div>
                                <div className = "w-[24px] h-[24px]">
                                    <img src="/images/x.svg" alt="twitter" className = "w-[24px] h-[24px]" />
                                </div>
                                <div className = "w-[24px] h-[24px]">
                                    <img src="/images/ig.svg" alt="instagram" className = "w-[24px] h-[24px]" />
                                </div>
                            </div>
                            <p className = "text-b003 text-(--C200) font-Secondary">{footer?.copyright}</p>
                        </div>

                        <div className = "absolute top-auto left-[24px] bottom-[24px] right-auto">
                        <p className = "text-b003 text-(--C300) font-Secondary">Designed By <span className = "underline">{footer?.credit_name}</span></p>
                        <p className = "text-b003 text-(--C300) font-Secondary underline">{footer?.credit_email}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}