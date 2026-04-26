export default function Footer(){
    return(
        <section className = "pt-[120px] overflow-hidden bg-(--C100)">
            <div className = "mx-auto w-[100%]">
                <div className = "flex flex-col items-stretch justify-start gap-[56px]">

                    {/* Footer top  */}

                    <div className = "flex flex-col items-stretch justify-start gap-[40px]">

                        {/* Footer top row 1 */}

                        <div className = "flex flex-col items-stretch justify-start gap-[16px]">
                            <div className = "w-[100%] px-(--main-padding) relative border-b-[1px] border-(--C200)">
                                <p className = "text-b002 text-(--C300) text-left font-Secondary">A Webflow template built for agencies and creative professionals</p>
                            </div>
                            <div className = "w-[100%] px-(--main-padding) relative border-b-[1px] border-(--C200)">
                                <p className = "text-b002 text-(--C300) text-left font-Secondary">who value editorial structure and refined motion.</p>
                            </div>
                        </div>

                        {/* Footer top row 2 */}

                        <div className = "flex flex-row items-end justify-start h-[auto]">

                            <div className = "flex flex-col items-end justify-stretch w-[100%]">
                                <div className = "w-[100%] h-[40px] border-x-[1px] border-t-[1px] border-(--C200)"></div>
                                <div className = "w-[100%] h-[40px] border-x-[1px] border-y-[1px] border-(--C200)"></div>
                            </div>

                            {/* Footer form */}

                            <div className = "flex flex-col items-stretch justify-start gap-[16px]">
                                <h6 className = "text-(--C300)">Feel free to Talk with Us!</h6>
                                <div>
                                    <div className = "flex flex-row items-stretch justify-start">
                                        <input className = "border-y-[1px] border-(--C200) border-r-[1px] w-[263px] h-[40px] px-[12px] py-[8px] outline-none placeholder-(--C200) font-Secondary text-(--C200)" type="text" placeholder="First Name" ></input>
                                        <input className = "border-y-[1px] border-(--C200) border-r-[1px] w-[263px] h-[40px] px-[12px] py-[8px] outline-none placeholder-(--C200) font-Secondary text-(--C200)" type="text" placeholder="Last Name" ></input>
                                    </div>
                                    <div className = "flex flex-row items-stretch justify-start">
                                        <input className = "border-b-[1px] border-(--C200) border-r-[1px]  h-[40px] px-[12px] py-[8px] outline-none placeholder-(--C200) font-Secondary text-(--C200) w-[486px]" type="email" placeholder="E-mail" ></input>
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

                    <div className = "flex flex-row items-stretch justify-start gap-[120px] pl-[64px] relative">
                        
                        <div className = "flex flex-row items-stretch justify-start gap-[120px] perspective-[1000px] perspective-origin-[50%_50%]">
                            <div className = "pt-[80px]">
                                <img src="/images/Vector.svg" alt="Logo" className = "w-[72px] h-[80px]"/>
                            </div>
                            <img src="/images/Character.svg" alt="character" className = "w-[376px] h-[510px] object-cover"/>
                            <div className = "pt-[80px] flex flex-col items-end justify-end pb-[120px]">
                                <img src="/images/Vector.svg" alt="Logo" className = "w-[72px] h-[80px]"/>
                            </div>
                        </div>

                        <div className = "flex flex-col items-stretch justify-between p-[24px] w-[360px] h-[400px] absolute top-auto left-auto right-[24px] bottom-[24px] bg-(--C300)">
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
                            <p className = "text-b003 text-(--C200) font-Secondary">© 2026 Quint Template. All Rights Reserved.</p>
                        </div>

                        <div className = "absolute top-auto left-[24px] bottom-[24px] right-auto">
                        <p className = "text-b003 text-(--C300) font-Secondary">Designed By <span className = "underline">8AM design</span></p>
                        <p className = "text-b003 text-(--C300) font-Secondary underline">hello@8am.design</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}