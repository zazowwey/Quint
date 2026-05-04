import Primary from "./Primary_button/Primary";

export default function Navbar(){
    return(
        <nav className = "w-full h-auto bg-transparent fixed z-999 top-0 bottom-auto right-0 left-0 backdrop-blur-md mix-blend-difference" >
            <div className = "w-full h-full px-auto">
                <div className = "w-full h-full flex flex-col items-center justify-between relative">
                    <div className = "w-full h-full flex flex-row items-center justify-between py-[20px] px-(--main-padding) border-b border-solid border-(--C500)">
                        
                        {/* Nav left col */}
                         <div className = "w-[50%] h-[40px] flex flex-row items-center justify-start gap-[83px]">
                            
                            {/* Brand */}
                            <div className = "w-[105px] h-auto p-[4px] overflow-hidden relative z-3 bg-white rounded-full flex items-center justify-start">
                                <div className = "w-[32px] h-[32px] rounded-full py-[4px] px-[8px] bg-(--C300) cursor-pointer flex flex-row items-center">
                                    <img src="/images/logo.svg" alt="logo" className="w-[16px] h-[16px]"/>
                                </div>    
                                <h6 className =" text-(--C300) absolute right-[16px] blend-difference flex flex-row items-start z-3 italic fw-bold">
                                    Quint 
                                </h6>
                            </div> 

                            {/* Brand name */}

                            <div className = "flex flex-row items-center justify-start gap-[8px]">
                                <p className = "text-(--C100) font-Secondary size-(--b002) w-auto">Quint®</p>
                                <p className = "text-(--C100) font-Secondary size-(--b002) opacity-50 w-auto no-break">Design Studio</p>
                            </div>
                            
                        </div> 

                        {/* Nav right col */}

                         <div className = "w-[50%] h-[40px] flex flex-row items-center justify-end gap-[83px]">
                            
                            {/* Brand name */}

                            <div className = "flex flex-row items-center justify-start gap-[24px]">

                            <div className = "flex flex-row items-center justify-start gap-[8px]">
                                <p className = "text-(--C100) font-Secondary size-(--b002) w-auto">ID</p>
                                <p className = "text-(--C100) font-Secondary size-(--b002) opacity-50 w-auto no-break">10:00 AM</p>
                            </div>

                            <div className = "flex flex-row items-center justify-start gap-[8px]">
                                <p className = "text-(--C100) font-Secondary size-(--b002) w-auto">US</p>
                                <p className = "text-(--C100) font-Secondary size-(--b002) opacity-50 w-auto no-break">10:00 AM</p>
                            </div>

                            </div>

                            {/* Brand */}

                            {/* <div className = "w-auto h-auto px-[20px] py-[11px] overflow-hidden relative z-3 bg-white rounded-full flex items-center justify-end gap-[10px]">
                                <h6 className ="text-(--C300) right-[16px] blend-difference flex flex-row items-start z-3 fw-bold">
                                    Let's Talk 
                                </h6>
                                    
                                <img src="/images/Vector.svg" alt="logo" className="w-[16px] h-[16px]"/>  
                            </div>  */}
                            <Primary
                                primary_button_text = "Let's Talk"
                            />

                            
                        </div>

                        {/* Menu wrapper */}
                        <div className ="w-full h-full absolute gap-[10px] px-[16px] z-[2]">
                            <div className = "flex flex-col items-center justify-center h-full px-[16px] relative cursor-pointer gap-[6px]">
                                <div className = "w-[32px] h-[2px] bg-white rounded-full"></div>
                                <div className = "w-[32px] h-[2px] bg-white rounded-full "></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}