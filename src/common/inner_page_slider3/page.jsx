import React from "react";
import { Navigation, EffectFade, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Common_animation from "@/common/common_animation/animation";
import slide1 from "@/images/plywoodImage17.jpg";
import slide2 from "@/images/plywoodImage12.jpg";
import slide3 from "@/images/plywoodImage11.jpg";
import slide4 from "@/images/plywoodImage16.jpg";
import slide5 from "@/images/plywoodImage7.jpg";
import slide6 from "@/images/plywoodImage1.jpg";
import slide7 from "@/images/plywoodImage2.jpg";
import slide8 from "@/images/plywoodImage3.jpg";
import slide9 from "@/images/plywoodImage9.jpg";
import slide10 from "@/images/plywoodImage10.jpg";
import slide11 from "@/images/plywoodImage8.jpg";
import slide12 from "@/images/plywoodImagenewscrew.jpg";
import slide13 from "@/images/plywoodImage14.jpg";
import slide14 from "@/images/plywoodImage15.jpg";
import slide15 from "@/images/plywoodImage5.jpg";
import slide16 from "@/images/plywoodImage6.jpg";
import styles from "@/common/inner_page_slider2/inner_slider2.module.css";
import "@/common/inner_page_slider2/inn.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const page = () => {
  const text = [
    "Super",
    "Exclusive",
    "handcrafted",
    "luxury",
    "laminates",
    "that",
    "make",
    "a bold ",
    "statement",
    "Always",
    "Classy",
    "Beautifully",
    "Luxurious",
    "ONE",
    "transcends",
    "trends",
    "to ",
    "create",
    "timeless",
    "elegance.",
  ];

  return (
    <div className={styles.inner_carousal_two_outer}>
      <div className={styles.inner_carousal_two_heading}>
        <Common_animation text="KEY FEATURES" />
      </div>
      <div className={styles.inner_carousal_two_top}>
        {/* <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={styles.inner_carousal_two_text}>
              <span className={styles.inner_carousal_two_span}>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 1,
                      delay: inView ? i / 15 : 0,
                    }}
                    className={
                      el === "Super" || el === "Exclusive"
                        ? styles.Blue_text2
                        : ""
                    }
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </span>
            </div>
          )}
        </InView> */}

        <div className={styles.inner_carousal_top_spacing}>
          <Swiper
            modules={[Navigation, EffectFade, A11y, Autoplay]}
            spaceBetween={12}
            slidesPerView={3}
            loop={false}
            navigation={true}
            autoplay={{ delay: 5000 }}
            speed={1000}
            breakpoints={{
              10: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              991: {
                // width: 991,
                slidesPerView: 2,
              },
              1340: {
                // width: 991,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide1}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>V</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Vacuum Pressure Chemical Treatment (VPT)
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        The only plywood in India made with 100% scientifically
                        researched proprietary Vacuum Pressure Chemical Treated
                        veneer to provide protection against termites, borers
                        and fire.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide2}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>H</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% Hard Wood & Core
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        made from carefully selected hardwood timber such as
                        Eucalyptus to ensure high strength and durability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide3}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>G</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Gurjan Face
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        100% high quality Gurjan face veneer gives strength and
                        sleek look to the plywood.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide4}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>T</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_headingx}>
                      4X TER-BO KILL
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Four-stage preservative treatment against the termites
                        and borers at different processing stages to ensure 100%
                        protection for a lifetime
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide5}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>F</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      FIRE RETARDANT
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Fully vacuum pressure-treated veneer with fire-retardant
                        chemical containing nano particles, and organ phosphorus
                        chemicals used during the process, providing excellent
                        fire-retardant properties.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide6}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>T</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_headingx}>
                      4-Times Pressing Technology
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Manufactured using four times pressing to ensure
                        equilibrium moisture content level within the glue line
                        for enhanced stability in the sheet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide7}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>P</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% Phenolic Resins
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        100% BWP grade high solid phenolic polymers ensures
                        excellent bonding and waterproof properties
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide8}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>M</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Microbial Shield by Nano-based chemicals
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Shielded against microbes, viruses, bacteria, fungi,
                        termites, and borers in their favourable conditions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide9}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>F</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Fully Composed Core & Panels
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        100% composed veneer sheets made using sophisticated
                        core and panel composers to ensure precise manufacturing
                        of high quality plywood.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide10}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>G</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% Gapless
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Use of high-quality hardwood species which are fully
                        composed to have zero gaps in the plywood, giving it the
                        desired strength and durability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide11}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>C</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% Calibrated
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Uniform thickness across the sheet through the
                        calibration process ensures even load distribution,
                        enhancing the appearance and performance of furniture.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide12}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>H</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      High Screw & Nail Holding Capacity
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        made from all composed full sheet veneers of select
                        hardwood species, ensuring a robust and well-structured
                        plywood.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide13}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>I</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% In-House Manufacturing
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Every Ply a Promise - Manufactured in-house with
                        cutting-edge technology to meet stringent industry
                        standards, and ensure that quality is of utmost priority
                        and never compromised.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide14}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>L</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Lifetime Warranty
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>Royale Touche Performance plywood offers peace of mind with a lifetime warranty, ensuring enduring quality and reliability</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide16}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>E</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      E0 Emission Compliant
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Zero emission of free formaldehyde by use of scavengers
                        in the resin, contributing to a healthier indoor
                        environment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide15}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>C</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      CARB Certified E0
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Zero emission plywood supported by testing and
                        certification from California Air Resources Board (CARB)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide17}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default page;
