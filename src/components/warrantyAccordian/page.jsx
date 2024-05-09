import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./warrantyAccordian.css";
import { useState } from "react";
import Button from "@/common/button/button9";
export default function Example() {
  const [viewmore, setViewmore] = useState(false);

  const handleClick = () => {
    setViewmore(!viewmore);
  };
  return (
    <div className="main_Accordian_header">
      <div className="accordian_header_main">
        <p className="accordian_header_main_text">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <div className="accordion">
        {/* <div className="accordion__item">
          <div className="accordion__heading">
            <div className="accordion__button">
              What is the process for a warranty certificate?
            </div>
          </div>
          <div className="accordion__panel">
            <p className="main_accordian_header_text">
              Purchase would be verified by the warranty team and warranty
              certificate would be sent to you on your Email ID and/or WhatsApp.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <div className="accordion__heading">
            <div className="accordion__button">
              Do I need to upload original invoice while registering for
              warranty?
            </div>
          </div>
          <div className="accordion__panel">
            <p className="main_accordian_header_text">
              Yes, a valid and original invoice is compulsory registering for
              warranty.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <div className="accordion__heading">
            <div className="accordion__button">
              How do I apply claim for a warranty?
            </div>
          </div>
          <div className="accordion__panel">
            <p className="main_accordian_header_text">
              Go to Claim Warranty tab, fill relevant information and apply for
              a warranty claim.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <div className="accordion__heading">
            <div className="accordion__button">
              What kind of damages are not considered in warranty?
            </div>
          </div>
          <div className="accordion__panel">
            <p className="main_accordian_header_text">
              Damage resulting from improper storage, handling, machining,
              joinery, and other mechanical, chemical, or any other treatment is
              not covered under this warranty.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <div className="accordion__heading">
            <div className="accordion__button">
              Is Warranty Certificate Mandatory For Claim Handling In Future?
            </div>
          </div>
          <div className="accordion__panel">
            <p className="main_accordian_header_text">
              The owner will have to produce the proof of purchase/warranty
              certificate issued either by the authorized dealer of Royale
              Touche Industries Limited or by the Company.
            </p>
          </div>
        </div> */}
      
          
            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : What is plywood used for?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Plywood is an extremely versatile building material, and it
                  can be used in a variety of applications, based on a variety
                  of factors such as reinforcement and decorative surfaces. Due
                  to its strength and cost, it is often used in interior and
                  exterior building applications, from things like wooden
                  furniture to interior cladding.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : What if the plywood gets wet?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Most BWP plywood boards will resist the harmful effects of raw
                  water, and stronger woods are better equipped to manage
                  prolonged water damage and film-coated plywood is an example.
                  Like most timber, even if it is waterproof plywood, prolonged
                  exposure to moisture will start to wear and damage the wood.
                  Untreated pieces will also not hold for long, and warping and
                  rotting will start much faster over time.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button"> Q : Can plywood be bent?</div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Although plywood sheet can be bent, it should be specialized,
                  as most other plywood will crumble and break if they are bent.
                  The best plywood available for flexing should have grain close
                  together so that the surface does not separate during bending.
                  Near-vein hardwood surfaces are ideal, including plywood made
                  from eucalyptus
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : Can the plywood be sanded and polished?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Plywood can be sanded and polished. However, like any other
                  wood, it is important to use the right equipment to ensure
                  that the finish appears as desired. Individuals should start
                  with 80-grit sandpaper to flatten the base surface before
                  moving on to finer grinding for a smoother and more vivid
                  polish on the wood.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : How thick is the plywood?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : The thickness of the plywood varies depending on what pieces
                  are being used. If plywood is being used as a support, it
                  needs to be thicker and stiffer than if it were being used as
                  veneer. Conventional plywood thickness can vary up to 6 mm to
                  19 mm as much as a quarter of an inch. Specialized plywood
                  grades can come in more varieties when it comes to their
                  thickness.
                </p>
              </div>
            </div>

        {viewmore && (
          <>
            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : What are advantages of plywood?
                </div>
              </div>
              <div className="accordion__panel">
                <div className="main_accordian_header_text">
                 
                    <div>
                     A : Increased stability. Plywood offers all the inherent
                      advantages of the parent wood plus enhanced properties in
                      its laminated structure.
                    </div>
                    <li>High impact resistance.</li>
                    <li>Surface dimensional stability.</li>
                    <li>High strength to weight ratio.</li>
                    <li>Panel shear</li>
                    <li>Chemical resistance</li>
                  </div>
               
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : Is MDF better than plywood?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Neither MDF nor plywood is universally better than the other.
                  The choice depends on the specific requirements of your
                  project. For applications where a smooth finish is crucial and
                  moisture exposure is limited, MDF might be a good choice. For
                  projects that require strength, durability, and moisture
                  resistance, plywood would be more suitable.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">Q : Is plywood fire proof?</div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Untreated wood tends to be highly flammable and burn rather
                  quickly.The treatment process of fire-rated plywood prevents
                  combustion and can delay the spread of smoke and fire.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q :  How do I identify plywood?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : The best quality of plywood can be identified with ISI marks
                  stamped onto it - for example, “IS:303” or “IS:710” Plywood is
                  typically labeled with information about its grade, type of
                  wood veneer, and other specifications. Look for stamps or
                  labels on the edges or surface of the plywood. Plywood comes
                  in various thicknesses. Measure the thickness of the plywood
                  to determine if it meets your project requirements. Different
                  types of plywood are suitable for various applications.
                  Consider the intended use (e.g., construction, furniture,
                  cabinets) when identifying plywood.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                  Q : Which ply is good for bed?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Plywood is known for its strength and stability, making it
                  suitable for bed platforms that require a sturdy and reliable
                  base. Blockboard: Blockboard is a cost-effective choice for
                  bed platforms, offering good strength and stability, making it
                  a practical option for budget-conscious consumers.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">Q : What is UV plywood?</div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : UV plywood refers to plywood that has been treated with a
                  special type of finish known as ultraviolet (UV) cured
                  coating. This coating consists of a clear finish that is cured
                  or hardened using ultraviolet light. The UV curing process
                  offers several advantages, making UV plywood suitable for
                  certain applications. UV-cured coatings are known for their
                  resistance to color fading caused by exposure to sunlight. UV
                  plywood is less likely to experience discoloration or fading
                  over time, making it suitable for applications where the wood
                  is exposed to natural light.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">Q : Does plywood expire?</div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                  A : With the advantage of being manufactured 100% from natural
                  plantation wood, plywood has relatively high durability and a
                  lifespan of up to 50 years.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : Can plywood be repaired?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : In conclusion, damaged plywood sheets can be effectively
                  repaired and restored with the right techniques and materials.
                  By assessing the damage, filling cracks, replacing damaged
                  sections, reinforcing weak areas, and applying a protective
                  finish, you can extend the lifespan of your plywood and make
                  it usable again.
                </p>
              </div>
            </div>

            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button">
                 Q : What is the measurement of plywood?
                </div>
              </div>
              <div className="accordion__panel">
                <p className="main_accordian_header_text">
                 A : Plywood is typically measured and sold in sheets. The standard
                  size of plywood sheet is 4 feet by 8 feet, however, ply board
                  size is available in 3 feet by 7 feet, 3 feet by 6 feet and
                  other various plywood widths.
                </p>
              </div>
            
            </div>
            </>
             )}
      
       
      </div>

      <div className="viewmore" onClick={handleClick}>
        <Button btn_text={viewmore ? "View Less" : "View More"} />
      </div>
    </div>
  );
}
