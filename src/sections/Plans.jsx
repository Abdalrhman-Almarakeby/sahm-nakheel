import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../components/SectionTitle";
import Plan from "../components/Plan";
import PlansNav from "../components/PlansNav";
import "swiper/css";

export default function Plans() {
  const swiperSettings = {
    pagination: {
      clickable: true,
    },
    spaceBetween: 30,
    navigation: true,
    loop: true,
    initialSlide: 2,
    breakpoints: {
      640: {
        spaceBetween: 40,
        initialSlide: 3,
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 2,
      },
      1280: {
        spaceBetween: 35,
        slidesPerView: 3,
        loop: false,
      },
    },
  };

  return (
    <div className="px-2">
      <section
        id="pricing"
        className="space-y-16 rounded-3xl bg-mintyGray p-6 ms:px-14 sm:px-4 md:px-10"
      >
        <SectionTitle description="Your Path to Effortless Financial Growth">
          Investment Plans
        </SectionTitle>
        <div className="items-center gap-16 sm:px-28 md:px-0 lg:flex">
          <Swiper {...swiperSettings} className="overflow-y-visible">
            <SwiperSlide
              id="0"
              children={
                <Plan
                  number={0}
                  ROI={250_000}
                  price={80_000}
                  list={[
                    "EGP 25000 Annual ROI",
                    "Installment over 10 Months",
                    "EGP 8000 installment per Month",
                    "30% Average ROI",
                    "EGP 70000 for Cash Payment",
                  ]}
                />
              }
            />
            <SwiperSlide
              id="1"
              children={
                <Plan
                  number={1}
                  ROI={125_000}
                  price={40_000}
                  list={[
                    "EGP 12500 Annual ROI",
                    "Installment over 10 Months",
                    "EGP 4000 installment per Month",
                    "30% Average ROI",
                    "EGP 35000 for Cash Payment",
                  ]}
                />
              }
            />
            <SwiperSlide
              id="2"
              children={
                <Plan
                  number={2}
                  ROI={8_000}
                  price={80_000}
                  list={[
                    "EGP 25000 Annual ROI",
                    "Installment over 10 Months",
                    "EGP 800 installment per Month",
                    "30% Average ROI",
                    "EGP 7000 for Cash Payment",
                  ]}
                  isMostPopular={true}
                />
              }
            />
            <SwiperSlide
              id="4"
              children={
                <Plan
                  number={3}
                  ROI={125_000}
                  price={40_000}
                  list={[
                    "EGP 12500 Annual ROI",
                    "Installment over 10 Months",
                    "EGP 4000 installment per Month",
                    "30% Average ROI",
                    "EGP 35000 for Cash Payment",
                  ]}
                />
              }
            />
            <PlansNav />
          </Swiper>
        </div>
      </section>
    </div>
  );
}
