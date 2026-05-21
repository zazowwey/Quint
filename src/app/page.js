import Image from "next/image";
import Projects from "./components/projects/Projects";
import Service from "./components/service/service";
import Testimonial from "./components/testimoni/Testimonial";
import { supabase } from "@/lib/supabase/client";

export default async function Home() {

  const { data: heroContent } = await supabase
    .from("hero_content")
    .select("*")
    .single();

   const { data: heroMeta } = await supabase
    .from("hero_meta")
    .select("*")
    .order("order_index");

  // Fetch hero images
  const { data: heroImages } = await supabase
    .from("hero_images")
    .select("*")
    .order("order_index");

  const { data: about } = await supabase
    .from("about_content")
    .select("*")
    .single();

  const { data: projectOvw } = await supabase 
    .from("project_overview")
    .select("*")
    .single();

  const { data: project } = await supabase 
    .from("projects")
    .select("*")
    .order("order_index");

  const { data: service_header } = await supabase 
    .from("services_header")
    .select("*")
    .single();

  const { data: service } = await supabase 
    .from("services")
    .select("*")
    .order("order_index");

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .order("order_index");

  const imageStyles = [
    "w-[604px] h-[340px] object-cover absolute z-[1] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[32deg]",   // hero_01
    "w-[604px] h-[340px] object-cover absolute z-[2] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[-14deg]",  // hero_02
    "w-[604px] h-[340px] object-cover absolute z-[3] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[-24deg] translate-x-[34px] translate-y-[43px]",                                          // hero_03
    "w-[604px] h-[340px] object-cover absolute z-[4] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[28deg] translate-x-[20px] translate-y-[20px]",                                           // hero_04
  ];

  const wrapperStyles = [
  "flex-row items-center justify-start lg:pl-[40px] md:pl-[40px] pl-0",
  "flex-row items-center lg:justify-start md:justify-end justify-center lg:pl-[223px] md:pl-0 pl-0 lg:pt-[178px] md:pt-0 pt-0 lg:pr-0 md:pr-[30px] pr-0",
  "flex-row items-center lg:justify-start md:justify-start justify-start lg:pl-[223px] md:pl-[120px] pl-0 lg:pt-[178px] md:pt-0 pt-0",
  "flex-row items-center justify-end lg:pr-[222px] md:pr-0 pr-0",
];

  const isAbsolute = [false, true, false, false];

    
  return (
    <main>

    {/* Hero section */}

    <section className = "w-full h-[110vh] pb-[21px]">
      <div className = "w-full h-[100vh] pt-[102px] relative flex flex-row items-center justify-center">
        <div className = "w-full flex flex-col items-center justify-center gap-[56px]">

          {/* Section title */}

          <div className = "w-full flex flex-col items-start justify-stretch relative">

          {/* hero 01 */}
            <div className="w-full flex flex-col item-center justify-center">
              <span className="text-d001 w-auto text-center leading-[1.2em] tracking-ls02">
                {heroContent?.headline_top?.split("").map((char, i) => (
                  <span key={i} style={{ display: "inline-block", opacity: 0, animation: "letterReveal 0.8s ease-out forwards", animationDelay: `${1.7 + i * 0.08}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <div style={{ width: 0, height: "2px", animation: "lineReveal 1.7s ease-out forwards", animationDelay: "0s" }} className="bg-(--C200)"></div>
            </div>

          {/* hero 02 */}

            <div className="w-full flex flex-col item-center justify-center">
              <span className="text-d001 w-auto text-center leading-[1.2em] tracking-ls02">
                {heroContent?.headline_bottom?.split("").map((char, i) => (
                  <span key={i} style={{ display: "inline-block", opacity: 0, animation: "letterReveal 0.8s ease-out forwards", animationDelay: `${1.75 + i * 0.08}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <div style={{ width: 0, height: "2px", animation: "lineReveal 1.7s ease-out forwards", animationDelay: "0.05s" }} className="bg-(--C200)"></div>
            </div>

          {/* Hero button */}

          <div className = "w-full h-full flex flex-col items-center justify-center lg:absolute md:static static z-[33] md:pt-[43px] lg:pt-0 pt-[87px]">
                <div style={{ opacity: 0, animationName: "scaleReveal", animationDuration: "0.8s", animationTimingFunction: "ease-out", animationFillMode: "forwards", animationDelay: "2.2s" }} className = "w-auto h-auto p-[4px] overflow-hidden relative z-3 bg-(--C100) rounded-full flex flex-row items-center justify-start gap-[10px]">
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
          <p style={{ opacity: 0, animationName: "letterReveal", animationDuration: "0.5s", animationTimingFunction: "ease-out", animationFillMode: "forwards", animationDelay: "2s" }} className="text-(--C100) font-Secondary w-full text-center">Scroll for more</p>

          {/* Hero Meta */}
            <div className="w-[100%] flex flex-col items-stretch justify-center gap-[8px]">
              
              {heroMeta?.map((item) => {
                const lineDelay = 0.1 + item.order_index * 0.05;
                const textDelay = 1.7 ;
                return (
                  <div className="w-full flex flex-col items-stretch justify-between" key={item.id}>
                    <div className="w-full lg:px-[240px] md:px-(--main-padding) px-(--main-padding) flex flex-row items-stretch justify-between">
                      
                      <p className={`${item.order_index === 1 ? "text-(--C100)" : "text-(--C100)/60"} font-Secondary w-auto text-center`}>
                        {item.capability?.split("").map((char, i) => (
                          <span key={i} style={{ display: "inline-block", opacity: 0, animation: "letterReveal 0.8s ease-out forwards", animationDelay: `${textDelay + i * 0.03}s` }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </p>

                      <p className={`${item.order_index === 1 ? "text-(--C100)" : "text-(--C100)/60"} font-Secondary w-auto text-center`}>
                        {item.client_text?.split("").map((char, i) => (
                          <span key={i} style={{ display: "inline-block", opacity: 0, animation: "letterReveal 0.8s ease-out forwards", animationDelay: `${textDelay + i * 0.03}s` }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </p>

      </div>
      <div style={{ width: 0, height: "1px", animation: "lineReveal 1.7s ease-out forwards", animationDelay: `${lineDelay}s` }} className="bg-(--C200)"></div>
    </div>
  );
})}

            </div>
          </div>

          {/* Hero image */}
          <div className=" hidden flex flex-row items-center justify-center overflow-hidden absolute z-[10] top-0 bottom-0 right-0 left-0">
            {heroImages?.map((item) => (
              <img
                key={item.id}
                src={item.image_url}
                alt={`hero image ${item.order_index}`}
                className={`w-[604px] h-[340px] object-cover absolute top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] ${imageStyles[item.order_index - 1]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* About section */}

    <section className = "w-full px-(--main-padding) lg:h-[100vh] md:h-auto h-auto pb-[21px] pt-[50px] bg-(--C100)">
      <div className = "w-full h-[100%] flex flex-row items-center justify-center">
        <div className = "w-full h-[100%] flex flex-col items-stretch justify-center gap-[57px] relative">
          <div className = "w-full h-[100%] flex flex-col items-stretch justify-center gap-[64px] relative">

            {/* About top row */}
            <div className = "flex flex-col lg:items-start md:items-start items-center justify-center gap-[24px]">
              <h6 className = "text-(--C300) w-full text-center">Overview</h6>
              <div className = "flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center lg:w-full md:w-full justify-center lg:gap-[0px] md:gap-[0px] gap-[40px]">
                <span className = "text-d002 text-(--C300) w-auto text-center leading-lh01 tracking-ls02">{about?.title}</span>
                <img src= {about?.logo_url} alt="logo" className= "lg:w-[72px] md:w-[38px] w-[20px] lg:h-[72px] md:h-[42px] h-[22px]"/>
              </div>
            </div>

            {/* About bottom row */}

            <div className = "flex lg:flex-row md:flex-col flex-col lg:items-stretch md:items-end items-end justify-center lg:gap-[140px] md:gap-[64px] gap-[40px]">

              <div className = "lg:pt-[100px] md:pt-[53px] pt-[0px] h-auto flex flex-col items-stretch justify-end gap-[32px]">
                <p className = "text-d003 text-(--C300) flex flex-col items-center justify-center lg:block md:block">{about?.headline_regular}<span className = "text-(--C100) text-d003 bg-(--C400)">{about?.headline_highlight}</span></p>
                <div className = "flex lg:flex-row md:flex-row flex-col items-stretch justify-start gap-[20px]">
                  <p className = "text-b002 text-(--C300) font-Secondary lg:w-[200px] md:w-[50%] w-[100%] text-justify">{about?.body_text_1}</p>
                  <p className = "text-b002 text-(--C300) font-Secondary lg:w-[200px] md:w-[50%] w-[100%] text-justify">{about?.body_text_2}</p>
                </div>
              </div>

              <img src = {about?.image_url} alt="Quint about section" className = "lg:w-[450px] md:w-[450px] w-[100%] h-[320px] object-cover"/>
            </div>

          </div>
        </div>
      </div>
    </section>


    {/* Project section */}
    <section className = "w-full h-[100%] bg-(--C100)">   
      <div className = "w-[100%] h-[100%] mx-auto">
        <div className = "flex flex-col items-center justify-stretch h-[100%] relative w-[100%]">

          <div className = "flex lg:flex-row md:flex-row flex-col lg:items-center md:items-start lg:justify-center md:justify-start gap-[80px] pt-[91px] pb-[21px] px-(--main-padding) h-[100%] w-full">
            
            <div className = "flex flex-col items-end justify-start gap-[80px] w-[100%] max-w-[420px]">
              <p className = "text-d003 font-Primary text-(--C300)">{projectOvw?.description}</p>
              <div className = "w-[100%] flex flex-row items-end justify-end">
                <img src= {projectOvw?.logo_url} alt="about logo" className="w-[72px] h-[80px]" />
              </div>
            </div>


            <div className = "flex flex-row items-center lg:justify-center md:justify-end justify-end lg:w-[368px] md:w-[100%] w-[100%] lg:h-[737px] md:h-[598px] h-[450px] ">
              <div className = "flex flex-row items-center justify-start lg:w-[283px] md:w-[283px] w-[157px] lg:h-[700px] md:h-[700px] h-[450px] overflow-hidden bg-(--C300) rounded-[100%] rotate-[7deg] relative">
                <div className = "flex flex-row items-end justify-end lg:w-[600px] md:w-[400px] rotate-[-7deg] absolute gap-[0px]">
                  <span className = "text-d002 text(--C100) font-Primary text-left max-w-[470px]">{projectOvw?.section_title}</span>
                </div>
              </div>
            </div>

          </div>

          {project?.map((item) => (
            <Projects 
            key={item?.id}
            file_name = {item?.file_name}
            project_name = {item.project_name}
            project_year = {item.project_year}
            projects_desc = {item.projects_desc}
            project_image_01={item.image_url_01}
            project_file_01_A={item.file_01_a}
            project_file_01_B={item.file_01_b}
            project_image_02={item.image_url_02}
            project_file_02_A={item.file_02_a}
            project_file_02_B={item.file_02_b}
            project_image_03={item.image_url_03}
            project_file_03_A={item.file_03_a}
            project_file_03_B={item.file_03_b}
            wedo_01={item.wedo_01}
            wedo_02={item.wedo_02}
            wedo_03={item.wedo_03}
            wedo_04={item.wedo_04}
            padding_top = {item.padding_top}
          />
          ))}
          


        </div>
      </div>
    </section>

    {/* Service section */}
    <section className = "pt-[120px]">
      <div className = "mx-auto w-[100%]">
        <div className = "flex flex-col items-stretch justify-start gap-[120px]">

          <div className = "flex flex-col items-center justify-center gap-[32px]">
            <h6 className = "text-(--C100)">Capabilities</h6>
            <h2 className = "text-(--C100)">{service_header?.heading}</h2>
            <p className = "text-b002 text-(--C100) font-Secondary max-w-[400px] w-[400px] text-center">{service_header?.description}</p>
          </div>

          <div>
            {service?.map((item) => (
              <Service 
                key={item?.id}
                service = {item?.service}
                service_desc = {item?.service_desc}
              />
            ))}  
          </div>
          
        </div>
      </div>
    </section>

    {/* Testimonial Section */}
    <section className = "w-full h-auto px-(--main-padding) bg-(--C300)">
      <div className = "w-[100%] mx-auto h-auto ">
        <div className = "h-auto relative">

          <div className = "w-[100%] flex flex-col items-stretch justify-start gap-[111px] pt-[80px] pb-[110px] h-auto relative z-[3]">
            
            <div className = "flex flex-col items-center justify-center">
              <h6 className = "text-(--C100)">Written</h6>
              <h2 className = "text-(--C100)">Trusted by Creative Partners.</h2>
            </div>

            <div className = "flex flex-col items-stretch justify-start gap-[111px] pt-[80px] pb-[110px]">

              {testimonials?.map((item) => (
                <div key={item.id} className={`flex ${wrapperStyles[item.order_index - 1]} gap-[30px] w-[100%] h-auto relative`}>
                  {isAbsolute[item.order_index - 1] ? (
                    <div className="lg:absolute md:static static lg:top-[-315px] md:top-0 top-0 lg:left-auto md:left-0 left-0 bottom-0 right-0">
                      <Testimonial
                        testimonial_image={item.testimonial_image}
                        user_name={item.user_name}
                        testimoni={item.testimoni}
                      />
                    </div>
                  ) : (
                    <Testimonial
                      testimonial_image={item.testimonial_image}
                      user_name={item.user_name}
                      testimoni={item.testimoni}
                    />
                  )}
                </div>
              ))}
            </div>



          </div>

           <div className = "w-[100%] flex flex-row items-stretch justify-between h-[100%] absolute z-[1] top-0 left-0 right-0 bottom-0 border-l-[1px] border-r-[1px] border-(--C200)">
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none "></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
              <div className = "w-[1px] h-[100%] bg-(--C200) pointer-events-none"></div>
            </div>

        </div>
      </div>
    </section>

    </main>
  );
}
