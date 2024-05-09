import React from "react";
import { Navigation, EffectFade, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Common_animation from "@/common/common_animation/animation";
import slide1 from "@/images/blockSlider13.jpg";
import slide2 from "@/images/blockSlider14.jpg";
import slide3 from "@/images/blockSlider7.jpg";
import slide4 from "@/images/blockSlider12.jpg";
import slide5 from "@/images/blockSlider1.jpg";
import slide6 from "@/images/blockSlider2.jpg";
import slide7 from "@/images/blockSlider3.jpg";
import slide8 from "@/images/blockSlider6.jpg";
import slide10 from "@/images/blockSlider5.jpg";
import slide11 from "@/images/plywoodImage13.jpg";
import slide12 from "@/images/blockSlider10.jpg";
import slide13 from "@/images/blockSlider11.jpg";
import slide14 from "@/images/blockSlider15.jpg";
import styles from "@/common/inner_page_slider2/inner_slider2.module.css";
import "@/common/inner_page_slider2/inn.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const page = () => {

  return (
    <div className={styles.inner_carousal_two_outer}>
      <div className={styles.inner_carousal_two_heading}>
        <Common_animation text="KEY FEATURES" />
      </div>
      <div className={styles.inner_carousal_two_top}>
        

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
                        The only blockboad in India made with 100% scientifically
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
                  <div className={styles.inner_carousal_word}>P</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% Pine Timber
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Pine has the ideal combination of straight grains, low
                        density, and strength, making the block board
                        lightweight and durable at the same time. Using 100%
                        pine ensures a balanced construction, making the block
                        board warp free.
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
                        sleek look to the block board.
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
                  <div className={styles.inner_carousal_word}>P</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
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
                    src={slide6}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>P</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_headingx}>
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
                    src={slide7}
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
            {/* <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide8}
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
                        of high quality Block Board.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide10}
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
                    src={slide11}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>S</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Screw & Nail Holding Capacity
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        made from all composed full sheet veneers of select
                        hardwood species, ensuring a robust and well-structured
                        block board.
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
                  <div className={styles.inner_carousal_word}>I</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      100% In-House Manufacturing
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Manufactured in-house with cutting-edge technology to
                        meet stringent industry standards, and ensure that
                        quality is of utmost priority and never compromised.
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
                  <div className={styles.inner_carousal_word}>L</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Lifetime Warranty
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                      Royale Touche blockboard offers peace of mind with a lifetime warranty, ensuring enduring quality and reliability
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
                  <div className={styles.inner_carousal_word}>D</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Dual Line Core
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Dual veneer enhances the aesthetic appearance of the
                        blockboard and improves its overall finish. It also
                        contributes to increased durability, making the
                        blockboard resistant to wear and tear.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default page;
