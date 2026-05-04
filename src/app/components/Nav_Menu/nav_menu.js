export default function Nav_menu () {
    return(
        <div className = "hidden flex flex-row items-stretch justify-start w-full h-[100vh] pt-[80px] px-(--main-padding) overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-[44] bg-(--C300)">
            {/* Nav Menu BG */}
            <div className = "flex flex-row items-stretch justify-between w-[100%] h-[100%] relative z-[1]">
                <div className = "w-[1px] h-[100%] bg-(--C200)"></div>
                <div className = "w-[1px] h-[100%] bg-(--C200)"></div>
                <div className = "w-[1px] h-[100%] bg-(--C200)"></div>
                <div className = "w-[1px] h-[100%] bg-(--C200)"></div>
            </div>

            {/*Menu Link */}
            <div className = "flex flex-row items-stretch justify-between pt-[80px] px-(--main-padding) absolute z-[3] top-0 bottom-0 right-0 left-0">
                <div className = "flex flex-col items-stretch justify-between py-[40px] px-[12px] w-[35%] h-[100%]">
                    <div className = "flex flex-col items-stretch justify-start gap-[40px] w-[100%]">
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">Home</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">About</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">Works</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">Service</a>
                    </div>
                    <div>
                        <p className = "text-b003 color-(--C100) font-Secondary leading-lh02 tracking-ls02">Designed By <a href="#" className = "text-(--C100) underline">8AM Design</a></p>
                    </div>
                </div>

                <div className = "flex flex-col items-stretch justify-between py-[40px] px-[12px] w-[35%] h-[100%]">
                    <div className = "flex flex-col items-stretch justify-start gap-[40px] w-[100%]">
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">License</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">Style Guide</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">404</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">Changelog</a>
                    </div>
                    <div>
                        <p className = "text-b003 color-(--C100) font-Secondary leading-lh02 tracking-ls02">hello@8am.design</p>
                    </div>
                </div>

                <div className = "flex flex-col items-stretch justify-between py-[40px] px-[12px] w-[35%] h-[100%]">
                    <div className = "flex flex-col items-stretch justify-start gap-[40px] w-[100%]">
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">Instagram</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">LinkedIn</a>
                        <a href="#" className = "text-nav-link text-(--C100) font-Primary leading-lh01 tracking-ls02">X</a>
                    </div>
                </div>
            </div>
        </div>
    );
}