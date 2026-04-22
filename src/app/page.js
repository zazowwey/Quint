import Image from "next/image";
import Projects from "./components/projects/Projects";
import Service from "./components/service/service";

export default function Home() {
  return (
    <>

    {/* Hero section */}

    <section className = "w-full h-[110vh] pb-[21px]">
      <div className = "w-full h-[100vh] pt-[102px] relative flex flex-row items-center justify-center">
        <div className = "w-full flex flex-col items-center justify-center gap-[56px]">

          {/* Section title */}

          <div className = "w-full flex flex-col items-start justify-stretch relative">

          {/* hero 01 */}

          <div className = "w-full flex flex-col item-center justify-center ">
            <span className="text-d001 w-auto text-center leading-[1.2em]">Structed</span>
            <div className = "w-full h-[2px] bg-(--C200)"></div>
          </div>

          {/* Hero 02 */}

          <div className = "w-full flex flex-col item-center justify-center ">
            <span className="text-d001 w-auto text-center leading-[1.2em]">Expression</span>
            <div className = "w-full h-[2px] bg-(--C200)"></div>
          </div>

          {/* Hero button */}

          <div className = "w-full h-full flex flex-col items-center justify-center absolute z-33">
                <div className = "w-auto h-auto p-[4px] overflow-hidden relative z-3 bg-(--C100) rounded-full flex flex-row items-center justify-start gap-[10px]">
                  <div className = "w-[32px] h-[32px] rounded-full py-[4px] px-[8px] bg-(--C300) cursor-pointer flex flex-row items-center">
                    <img src="/images/logo.svg" alt="logo" className="w-[16px] h-[16px]"/>
                  </div>    
                    <h6 className =" text-(--C300) pr-[16px] blend-difference flex flex-row items-start z-3 italic fw-bold">
                      Hover This!
                  </h6>
              </div> 
          </div>

          </div>

          {/* Hero bottom row */}

          <div className = "flex flex-col items-start justify-center gap-[56px] w-full h-auto">
            <p className = "text-(--C100) font-Secondary w-full text-center">Scroll for more</p>

          {/* Hero Meta */}

            <div className = "w-[100%] flex flex-col items-stretch justify-center gap-[8px]">
              
              <div className = "w-full flex flex-col items-stretch justify-between ">
                <div className = "w-full px-[240px] flex flex-row items-stretch justify-between ">
                  <p className = "text-(--C100) font-Secondary w-auto text-center">Our Capabilities</p>
                  <p className = "text-(--C100) font-Secondary  w-auto text-center">Global Clients</p>
                </div>
                <div className = "w-full h-[1px] bg-(--C200)"></div>
              </div>

              <div className = "w-full flex flex-col items-stretch justify-between ">
                <div className = "w-full px-[240px] flex flex-row items-stretch justify-between ">
                  <p className = "text-(--C100) font-Secondary w-auto text-center opacity-[60%]">Brand Identity</p>
                  <p className = "text-(--C100) font-Secondary w-auto text-center opacity-[60%]">Quint is a design studio</p>
                </div>
                <div className = "w-full h-[1px] bg-(--C200)"></div>
              </div>

              <div className = "w-full flex flex-col items-stretch justify-between ">
                <div className = "w-full px-[240px] flex flex-row items-stretch justify-between ">
                  <p className = "text-(--C100) font-Secondary w-auto text-center opacity-[60%]">Presentation Design</p>
                  <p className = "text-(--C100) font-Secondary w-auto text-center opacity-[60%]">crafting brand identity</p>
                </div>
                <div className = "w-full h-[1px] bg-(--C200)"></div>
              </div>

              <div className = "w-full flex flex-col items-stretch justify-between ">
                <div className = "w-full px-[240px] flex flex-row items-stretch justify-between ">
                  <p className = "text-(--C100) font-Secondary w-auto text-center opacity-[60%]">Magazine</p>
                  <p className = "text-(--C100) font-Secondary w-auto text-center opacity-[60%]">and presentation</p>
                </div>
                <div className = "w-full h-[1px] bg-(--C200)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About section */}

    <section className = "w-full px-(--main-padding) h-[100vh] pb-[21px] bg-(--C100)">
      <div className = "w-full h-[100vh] flex flex-row items-center justify-center">
        <div className = "w-full h-[100%] flex flex-col items-stretch justify-center gap-[57px] relative">
          <div className = "w-full h-[100%] flex flex-col items-stretch justify-center gap-[64px] relative">

            {/* About top row */}
            <div className = "flex flex-col items-start justify-center gap-[24px]">
              <h6 className = "text-(--C300) w-full text-center">Overview</h6>
              <div className = "w-full flex flex-row items-start justify-center gap-[0px]">
                <span className = "text-d002 text-(--C300) w-auto text-center">Quint Design Studio</span>
                <img src= "/images/Vector.svg" alt="logo" className= "w-[72px] h-[72px]"/>
              </div>
            </div>

            {/* About bottom row */}

            <div className = "flex flex-row items-stretch justify-center gap-[140px]">

              <div className = "pt-[100px] h-[362px] flex flex-col items-stretch justify-end gap-[32px]">
                <p className = "text-d003 text-(--C300)">Built for Modern <span className = "text-(--C100) text-d003 bg-(--C400)">Creative Teams.</span></p>
                <div className = "flex flex-row items-stretch justify-start gap-[20px]">
                  <p className = "text-b002 text-(--C300) font-Secondary w-[200px] text-justify">Our lookbooks serve as a dialogue between the garment and the environment. Photographed in high-contrast settings, each frame captures the tension between fabric and form, documenting the evolution of the Haus aesthetic.</p>
                  <p className = "text-b002 text-(--C300) font-Secondary w-[200px] text-justify">high-contrast settings, each frame captures the tension between fabric and form, documenting the evolution of the Haus aesthetic.</p>
                </div>
              </div>

              <img src = "/about/about.png" alt="Quint about section" className = "w-[450px] h-[320px] object-cover"/>
            </div>

          </div>
        </div>
      </div>
    </section>


    {/* Project section */}
    <section className = "w-full h-[100%] bg-(--C100)">
      <div className = "w-[100%] h-[100%] mx-auto">
        <div className = "flex flex-col items-center justify-stretch h-[100%] relative w-[100%]">

          <div className = "flex flex-row items-center justify-center gap-[80px] pt-[91px] pb-[21px] h-[100%]">
            
            <div className = "flex flex-col items-end justify-start gap-[80px] w-[100%] max-w-[420px]">
              <p className = "text-d003 font-Primary text-(--C300)">A flexible project showcase built to support visual depth and strategic storytelling. From branding systems to digital products, each case study layout is structured to guide attention through imagery, motion, and concise narrative blocks.</p>
              <div className = "w-[100%] flex flex-row items-end justify-end">
                <img src= "/images/Vector.svg" alt="about logo" className="w-[72px] h-[80px]" />
              </div>
            </div>


            <div className = "flex flex-row items-center justify-center w-[368px] h-[737px]">
              <div className = "flex flex-row items-center justify-start w-[283px] h-[700px] overflow-hidden bg-(--C300) rounded-[100%] rotate-[7deg] relative">
                <div className = "flex flex-row items-end justify-start  w-[900px] rotate-[-7deg] absolute gap-[0px]">
                  <span className = "text-d002 text(--C100) font-Primary text-right max-w-[470px]">Selected Work</span>
                </div>
              </div>
            </div>

          </div>

          <Projects 
            file_name = "Project_001"
            project_name = "Northbound Journal"
            project_year = "2026"
            projects_desc = "A quarterly print journal exploring contemporary culture and visual practice. Quint developed the full editorial system, grid structure, typography hierarchy, and print-ready templates."
            project_image_01 = "/Project_image/1_1.png"
            project_file_01_A = "image 1.1"
            project_file_01_B = "editorial_cover"
            project_image_02 = "/Project_image/1_2.png"
            project_file_02_A = "image 1.2"
            project_file_02_B = "project_02"
            project_image_03 = "/Project_image/1_3.png"
            project_file_03_A = "image 1.3"
            project_file_03_B = "project_01"
            wedo_01 = "Art Direction"
            wedo_02 = "Editorial Layout System"
            wedo_03 = "Print Production Setup"
            wedo_04 = "Digital Companion Landing"
            padding_top = "121px"
          />

          <Projects 
            file_name = "Project_002"
            project_name = "Form & Frame"
            project_year = "2026"
            projects_desc = "A modular print template collection designed for emerging designers and studios to build consistent publications."
            project_image_01 = "/Project_image/2_1.png"
            project_file_01_A = "image 2.1"
            project_file_01_B = "magazine_spread"
            project_image_02 = "/Project_image/2_2.png"
            project_file_02_A = "image 2.2"
            project_file_02_B = "campaign_poster"
            project_image_03 = "/Project_image/2_3.png"
            project_file_03_A = "image 2.3"
            project_file_03_B = "product_editorial"
            wedo_01 = "Template Design"
            wedo_02 = "Layout System"
            wedo_03 = "Typography Framework"
            wedo_04 = "Print Specifications"
            padding_top = "240px"
          />

          <Projects 
            file_name = "Project_003"
            project_name = "Monolith Rebrand"
            project_year = "2026"
            projects_desc = "A complete brand repositioning for a contemporary architecture firm. The system balances restraint and authority through typography-led identity."
            project_image_01 = "/Project_image/3_1.png"
            project_file_01_A = "image 3.1"
            project_file_01_B = "brand_campaign"
            project_image_02 = "/Project_image/3_2.png"
            project_file_02_A = "image 3.2"
            project_file_02_B = "brand_stationery"
            project_image_03 = "/Project_image/3_3.png"
            project_file_03_A = "image 3.3"
            project_file_03_B = "marketing_collateral"
            wedo_01 = "Brand Strategy"
            wedo_02 = "Logo System"
            wedo_03 = "Brand Guidelines"
            wedo_04 = "Stationery & Presentation"
            padding_top = "369px"
          />

          <Projects 
            file_name = "Project_004"
            project_name = "Signal Report 01"
            project_year = "2026"
            projects_desc = "A long-form visual report meticulously translating complex research findings into an accessible editorial experience designed to bridge the gap between raw information."
            project_image_01 = "/Project_image/4_1.png"
            project_file_01_A = "image 4.1"
            project_file_01_B = "poster_layout"
            project_image_02 = "/Project_image/4_2.png"
            project_file_02_A = "image 4.2"
            project_file_02_B = "editorial_poster"
            project_image_03 = "/Project_image/4_3.png"
            project_file_03_A = "image 4.3"
            project_file_03_B = "campaign_visual"
            wedo_01 = "Information Architecture"
            wedo_02 = "Editorial Design"
            wedo_03 = "Data Visualization"
            wedo_04 = "Cover & Print Direction"
            padding_top = "478px"
          />


        </div>
      </div>
    </section>

    {/* Service section */}
    <section className = "pt-[120px]">
      <div className = "mx-auto w-[100%]">
        <div className = "flex flex-col items-stretch justify-start gap-[120px]">

          <div className = "flex flex-col items-center justify-center gap-[32px]">
            <h6 className = "text-(--C100)">Capabilities</h6>
            <h2 className = "text-(--C100)">Structured for Services.</h2>
            <p className = "text-b002 text(--C100) font-Secondary max-w-[400px] w-[400px] text-center">Whether you provide brand strategy, digital design, or creative direction, the system adapts without feeling repetitive.</p>
          </div>

          <div>
            <Service 
              service = "Brand Identity System"
              service_desc = "We build your logo."
            />

            <Service 
              service = "Brand Identity System"
              service_desc = "We build your logo."
            />

            <Service 
              service = "Brand Identity System"
              service_desc = "We build your logo."
            />

            <Service 
              service = "Brand Identity System"
              service_desc = "We build your logo."
            />

            <Service 
              service = "Brand Identity System"
              service_desc = "We build your logo."
            />

            <Service 
              service = "Brand Identity System"
              service_desc = "We build your logo."
            />
            
          </div>

          

        </div>
      </div>
    </section>

    </>
  );
}
