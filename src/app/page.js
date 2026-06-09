import Projects from "./components/projects/Projects";
import Service from "./components/service/service";
import Testimonial from "./components/testimoni/Testimonial";
import Secondary from "./components/Secondary_button/Secondary";
import AboutScroll from "./components/Interaction/About_Scroll";
import TestimonialScroll from "./components/Interaction/Testimonial_scroll";
import HeroAnimation from "./components/Interaction/Hero_load";
import {
  getHeroMeta,
  // getHeroImages,
  // getAboutContent,
  // getProjectOverview,
  getProjectItems,
  getServicesHeader,
  getServices,
  // getServiceImages,
  getTestimonials,
  getSections,
  getGlobalAssets,
} from "@/lib/fetch/queries";

export default async function Home() {

  const heroMeta = await getHeroMeta();
  const project = await getProjectItems();
  const service = await getServices();
  const testimonials = await getTestimonials();
  const sections = await getSections();
  const globalAssets = await getGlobalAssets();

  const imageStyles = [
    "w-[604px] h-[340px] object-cover absolute z-[1] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[32deg]",
    "w-[604px] h-[340px] object-cover absolute z-[2] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[-14deg]",
    "w-[604px] h-[340px] object-cover absolute z-[3] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[-24deg] translate-x-[34px] translate-y-[43px]",
    "w-[604px] h-[340px] object-cover absolute z-[4] top-auto bottom-auto right-auto left-auto shadow-[0px_7px_70px_rgba(0,0,0,0.3)] rotate-[28deg] translate-x-[20px] translate-y-[20px]",
  ];

  const wrapperStyles = [
    "flex-row items-center justify-start lg:pl-[40px] md:pl-[40px] pl-0",
    "flex-row items-center lg:justify-start md:justify-end justify-center lg:pl-[223px] md:pl-0 pl-0 lg:pt-[178px] md:pt-0 pt-0 lg:pr-0 md:pr-[30px] pr-0",
    "flex-row items-center lg:justify-start md:justify-start justify-start lg:pl-[223px] md:pl-[120px] pl-0 lg:pt-[178px] md:pt-0 pt-0",
    "flex-row items-center justify-end lg:pr-[222px] md:pr-0 pr-0",
  ];

  const project_padding_top = [
    "121px",
    "240px",
    "360px",
    "478px",
  ]

  const isAbsolute = [false, true, false, false];

  const projectCount = project?.length ?? 0;

  // sections

  const hero = sections?.find(section => section.id === 1 );
  const about_section = sections?.find(section => section.id === 2 );
  const project_section = sections?.find(section => section.id === 3 );
  const service_section = sections?.find(section => section.id === 4 );
  const testimonial_section = sections?.find(section => section.id === 5 );
  const logo_white = globalAssets?.find(asset => asset.key === "logo-white");
  const logo_black = globalAssets?.find(asset => asset.key === "logo-black");
  const service_images = service_section?.section_images?.filter(asset => asset.section_id === 4);


  return (
    <main>

      <AboutScroll project={project} />
      <TestimonialScroll testimonials={testimonials} />
      <HeroAnimation />

      <div className="w-full lg:h-[900vh] h-auto relative" id="hero-about-wrapper">

        {/* Hero section */}
        <section id="hero-section"className="w-full h-[200vh] pb-[21px] lg:sticky static top-0 left-auto right-auto bottom-auto z-[1]">
          <div className="w-full h-[100vh] pt-[102px] relative flex flex-row items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-[56px]">

              <div className="w-full flex flex-col items-start justify-stretch relative">

                <div className="w-full flex flex-col items-center justify-center relative">
                  <span className="text-d001 w-auto text-center leading-[1.2em] tracking-ls02">
                    {hero?.heading?.split("").map((char, i) => (
                      <span key={i} className="hero-char-top">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                  <div className="hero-line h-[2px] bg-(--C200) absolute bottom-0 left-0"></div>
                </div>

                <div className="w-full flex flex-col items-center justify-center">
                  <span className="text-d001 w-auto text-center leading-[1.2em] tracking-ls02">
                    {hero?.sub_heading?.split("").map((char, i) => (
                      <span key={i} className="hero-char-bottom">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                  <div className="hero-line h-[2px] bg-(--C200) absolute bottom-0 left-0"></div>
                </div>

                <div className="w-full h-full flex flex-col items-center justify-center lg:absolute md:static static z-[33] md:pt-[43px] lg:pt-0 pt-[87px]">
                  <div className="hero-badge w-auto h-auto p-[4px] overflow-hidden relative z-3 bg-(--C100) rounded-full flex flex-row items-center justify-start gap-[10px]">
                    <div className="w-[32px] h-[32px] rounded-full py-[4px] px-[8px] bg-(--C300) cursor-pointer flex flex-row items-center">
                      <img src={logo_white?.image_url} alt="logo" className="w-[16px] h-[16px] animate-loopBrand" />
                    </div>
                    <h6 className="text-(--C300) pr-[16px] blend-difference flex flex-row items-start z-3 italic fw-bold">
                      Hover This!
                    </h6>
                  </div>
                </div>

              </div>

              <div className="flex flex-col items-start justify-center gap-[56px] w-full h-auto">
                <p className="hero-scroll-text text-(--C100) font-Secondary w-full text-center">
                  Scroll for more
                </p>

                <div className="w-full flex flex-col items-stretch justify-center gap-[8px]">
                  {heroMeta?.map((item) => {
                    return (
                      <div className="w-full flex flex-col items-stretch justify-between" key={item.id}>
                        <div className="w-full lg:px-[240px] md:px-(--main-padding) px-(--main-padding) flex flex-row items-stretch justify-between">
                          <p className={`${item.order_index === 1 ? "text-(--C100)" : "text-(--C100)/60"} font-Secondary w-auto text-center`}>
                            {item.capability?.split("").map((char, i) => (
                              <span key={i} className="hero-meta-char">
                                {char === " " ? "\u00A0" : char}
                              </span>
                            ))}
                          </p>
                          <p className={`${item.order_index === 1 ? "text-(--C100)" : "text-(--C100)/60"} font-Secondary w-auto text-center`}>
                            {item.client_text?.split("").map((char, i) => (
                              <span key={i} className="hero-meta-char">
                                {char === " " ? "\u00A0" : char}
                              </span>
                            ))}
                          </p>
                        </div>
                        <div className="hero-meta-line h-[1px] bg-(--C200)"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden flex-row items-center justify-center overflow-hidden absolute z-[10] top-0 bottom-0 right-0 left-0">
                {hero?.section_images?.map((item) => (
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

        {/* About + Project section */}
        <div id="horizontal-move" className="flex flex-col items-start justify-start w-full lg:h-[100vh] h-auto lg:overflow-hidden lg:sticky static top-0 left-auto right-auto bottom-auto z-[2]" >
          <div className="flex flex-col items-start justify-start gap-0 w-full lg:h-full h-auto lg:overflow-hidden">
            <div id="horizontal-move-wrapper"className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-[auto_auto] lg:items-stretch items-start lg:justify-stretch justify-start gap-0 lg:h-full h-auto lg:w-[200vw] w-full">

              {/* About section */}
              <section id="about-section" className="w-full lg:w-[100vw] px-(--main-padding) lg:h-[100vh] h-auto pb-[21px] pt-[50px] bg-(--C100)"  style={{ transformOrigin: 'center bottom' }}>
                <div className="w-full h-full flex flex-row items-center justify-center">
                  <div className="w-full h-full flex flex-col items-stretch justify-center gap-[57px] relative">
                    <div className="w-full h-full flex flex-col items-stretch justify-center gap-[64px] relative">

                      <div className="flex flex-col lg:items-start md:items-start items-center justify-center gap-[24px]">
                        <h6 className="text-(--C300) w-full text-center">{about_section?.heading}</h6>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center lg:w-full md:w-full justify-center lg:gap-[0px] md:gap-[0px] gap-[40px]">
                          <span className="text-d002 text-(--C300) w-auto text-center leading-lh01 tracking-ls02">{about_section?.sub_heading}</span>
                          <img src={logo_black?.image_url} alt="logo" className="lg:w-[72px] md:w-[38px] w-[20px] lg:h-[72px] md:h-[42px] h-[22px] animate-loopBrand" />
                        </div>
                      </div>

                      <div className="flex lg:flex-row md:flex-col flex-col lg:items-stretch md:items-end items-end justify-center lg:gap-[140px] md:gap-[64px] gap-[40px]">
                        <div className="lg:pt-[100px] md:pt-[53px] pt-[0px] h-auto flex flex-col items-stretch justify-end gap-[32px]">
                          <p className="text-d003 text-(--C300) flex flex-col items-center justify-center lg:block md:block">{about_section?.section_content?.content.headline_regular}
                            <span className="text-(--C100) text-d003 bg-(--C400) mx-[8px]">{about_section?.section_content?.content.headline_highlight}</span>
                          </p>
                          <div className="flex lg:flex-row md:flex-row flex-col items-stretch justify-start gap-[20px]">
                            <p className="text-b002 text-(--C300) font-Secondary lg:w-[215px] md:w-[50%] w-full text-justify">{about_section?.section_content?.content.body_text.slice(0, 220)}</p>
                            <p className="text-b002 text-(--C300) font-Secondary lg:w-[215px] md:w-[50%] w-full text-justify">{about_section?.section_content?.content.body_text.slice(220)}</p>
                          </div>
                        </div>
                        <img src={about_section?.section_content?.content.image_url} alt="Quint about section" className="lg:w-[450px] md:w-[450px] w-full h-[320px] object-cover" />
                      </div>

                      <div className="flex flex-row items-end justify-end pr-[62px] absolute bottom-0 right-0">
                        <div>
                          <Secondary Button_text="This Way" />
                          <h6 className="text-(--C300)">to see the things we made</h6>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              {/* Project section */}
              <section className="w-full lg:w-[100vw] lg:h-full h-auto bg-(--C100)">
                <div className="w-full h-full mx-auto">
                  <div className="flex flex-col items-center lg:justify-stretch justify-start h-full relative w-full">

                    <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-start lg:justify-center md:justify-start gap-[80px] pt-[91px] pb-[21px] px-(--main-padding) lg:h-full h-auto w-full">
                      <div className="flex flex-col items-end justify-start gap-[80px] w-full max-w-[420px]">
                        <p className="text-d003 font-Primary text-(--C300)">{project_section?.heading}</p>
                        <div className="w-full flex flex-row items-end justify-end">
                          <img src={logo_black?.image_url} alt="about logo" className="w-[72px] h-[80px] animate-loopBrand" />
                        </div>
                      </div>

                      <div className="flex flex-row items-center lg:justify-center md:justify-end justify-end lg:w-[368px] md:w-full w-full lg:h-[737px] md:h-[598px] h-[450px]">
                        <div className="flex flex-row items-center justify-start lg:w-[283px] md:w-[283px] w-[157px] lg:h-[700px] md:h-[700px] h-[450px] lg:overflow-hidden bg-(--C300) rounded-[100%] rotate-[7deg] relative">
                          <div className="flex flex-row items-end justify-end lg:w-[600px] md:w-[400px] rotate-[-7deg] absolute gap-[0px]">
                            <span className="text-d002 text(--C100) font-Primary text-left max-w-[470px]" id="dm-project">{project_section?.sub_heading}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop: absolute stacking */}
                    <div className="hidden lg:block w-[100vw] h-full absolute top-0 left-0 right-0 bottom-0">
                      <div className="flex flex-row items-start justify-end w-full h-full lg:overflow-hidden">
                        <div className="flex flex-col items-end justify-end w-[100vw] h-full relative">
                          {project?.map((item) => (
                            <div
                              key={item.id}
                              id={`work-item-${item.order_index}`}
                              className="w-[3%] h-full overflow-hidden absolute top-0 bottom-0 lg:flex hidden flex-row items-start justify-start"
                              style={{ zIndex: item.order_index }}
                            >
                              <div className="w-[100vw] h-full">
                                <Projects
                                  file_name={item?.file_name}
                                  project_name={item.project_name}
                                  project_year={item.project_year}
                                  projects_desc={item.projects_desc}
                                  images={item.project_img}
                                  wedo_01={item.wedo_01}
                                  wedo_02={item.wedo_02}
                                  wedo_03={item.wedo_03}
                                  wedo_04={item.wedo_04}
                                  padding_top={project_padding_top[item.order_index - 1]}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile/tablet: sticky stacking */}
                    <div
                      className="lg:hidden block w-full"
                      style={{ height: `${projectCount * 100}vh` }}
                    >
                      {project?.map((item) => (
                        <div
                          id={`work-item-${item.order_index}`}
                          key={item.id}
                          className="w-full sticky top-0"
                          style={{ zIndex: item.order_index }}
                        >
                          <Projects
                            file_name={item?.file_name}
                            project_name={item.project_name}
                            project_year={item.project_year}
                            projects_desc={item.projects_desc}
                            images={item.project_img}
                            wedo_01={item.wedo_01}
                            wedo_02={item.wedo_02}
                            wedo_03={item.wedo_03}
                            wedo_04={item.wedo_04}
                            padding_top={project_padding_top[item.order_index - 1]}
                          />
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

      </div>

      {/* Service section */}

      <section className="pt-[120px]">
        <div className="mx-auto w-full">
          <div className="flex flex-col items-stretch justify-start gap-[120px]">

            <div className="flex flex-col items-center justify-center gap-[32px]">
              <h6 className="text-(--C100)">{service_section?.heading}</h6>
              <h2 className="text-(--C100)">{service_section?.sub_heading}</h2>
              <p className="text-b002 text-(--C100) font-Secondary max-w-[400px] w-[400px] text-center">{service_section?.section_content?.content.service_desc}</p>
            </div>

            <div>
              {service?.map((item) => (
                <Service
                  key={item?.id}
                  service={item?.service}
                  service_desc={item?.service_desc}
                  service_images={service_images}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full h-auto px-(--main-padding) bg-(--C300)">
        <div className="w-full mx-auto h-auto">
          <div className="h-auto relative">

            <div className="w-full flex flex-col items-stretch justify-start gap-[111px] pt-[80px] pb-[110px] h-auto relative z-[3]">

              <div className="flex flex-col items-center justify-center">
                <h6 className="text-(--C100)">{testimonial_section?.heading}</h6>
                <h2 className="text-(--C100) lg:text-left md:text-center text-center">{testimonial_section?.sub_heading}</h2>
              </div>

              <div className="flex flex-col items-stretch justify-start gap-[111px] pt-[80px] pb-[110px]">
                {testimonials?.map((item) => (
                  <div key={item.id} className={`flex ${wrapperStyles[item.order_index - 1]} gap-[30px] w-full h-auto relative`}>
                    {isAbsolute[item.order_index - 1] ? (
                      <div className="lg:absolute md:static static lg:top-[-315px] md:top-0 top-0 lg:left-auto md:left-0 left-0 bottom-0 right-0">
                        <Testimonial
                          id={`testimonial-image-${item.order_index}`}
                          testimonial_image={item.testimonial_image}
                          user_name={item.user_name}
                          testimoni={item.testimoni}
                        />
                      </div>
                    ) : (
                      <Testimonial
                        id={`testimonial-image-${item.order_index}`}
                        testimonial_image={item.testimonial_image}
                        user_name={item.user_name}
                        testimoni={item.testimoni}
                      />
                    )}
                  </div>
                ))}
              </div>

            </div>

            <div className="w-full flex flex-row items-stretch justify-between h-full absolute z-[1] top-0 left-0 right-0 bottom-0 border-l-[1px] border-r-[1px] border-(--C200)">
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none lg:block md:block hidden"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none"></div>
              <div className="w-[1px] h-full bg-(--C200) pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}