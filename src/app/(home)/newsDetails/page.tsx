"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import News2 from "../News2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Tising in our life became a info noise",
    // cover: "/assets/images/home/news2.jpg",
    cover:
      "https://gdoc.io/uploads/Twitter_Real_Estate_Newspaper_2_1600_900_1artboards_.jpg",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 2,
    title: "We create some things success in future growth",
    cover:
      "https://images.squarespace-cdn.com/content/5c115fec9d5abbba78a23c93/1597936991711-BPDT1FFFWNAGVDCD0EP7/How+Is+Commercial+Real+Estate+Valued-01.jpg?format=1500w&content-type=image%2Fjpeg",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 3,
    title: "We create some things success in future growth",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oK8Ovykk09mja3ilBvtk2Y6e-zIZYtURvA&s",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  // Add more items as needed...
];

const swiperOptions = {
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const Page = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <Image
        src="https://www.ttrweekly.com/site/wp-content/uploads/2020/09/melbourne.jpg"
        className="circle-img career-banner banner"
        alt="news details"
        height={500}
        width={800}
        style={{
          filter: "brightness(0.5)",
        }}
      />
      <div className="container">
        <h1
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            lineHeight: "1.5",
            color: "var(--navy)",
          }}
        >
          Real Estate As An Investment Scores High For Buyers
        </h1>
        <div className="">
          <div className="d-flex align-items-center">
            <span className="fz-60 fw-600 main-color line-height-1 mr-10 headFirstLetter">
              H
            </span>
            <p>
              <span className="h-block">H</span>
              ome buying is generally associated with end-users, especially
              considering that home is such an emotional aspect of life.However,
              according to the FICCI - Anarock Homebuyer Sentiment Survey,
            </p>
          </div>
          <p>
            there has been a seven per cent increase in the proportion of
            participants who are buying a property from an investment
            perspective rather than for self-use as compared to the H2 2022
            survey. What has led to this shift in preferences?
          </p>

          <p>
            Notably, many people, especially millennials, are eyeing real estate
            as an investment avenue. The survey reveals, 31 per cent of
            respondents who currently allocate their capital into diverse assets
            ultimately find themselves drawn to real estate. This number is
            higher amongst other goals such as a vacation, starting a business,
            emergency fund or retirement. “Historically, real estate has been an
            outperformer within all asset classes in India. We saw a bit of a
            slowdown between 2017 and 2021 but the real estate market has
            rebounded well,” shares Ravi Shankar Singh, managing director of
            residential transaction services at Colliers India.
          </p>
          <p>
            “Unlike stocks and bonds, real estate provides investors with
            tangible assets that they can see and touch. Furthermore, real
            estate investments provide consistent cash flow from rental revenue
            while increasing in value over time. One distinguishing element of
            real estate investing is its capacity to serve as an inflation
            hedge. As prices rise across the economy, so do rents and property
            values, making real estate an excellent strategy for protecting
            wealth from the undermining impacts of inflation. According to a
            report published by the Reserve Bank of India (RBI), in India, the
            average household invests 77 per cent of its assets in real estate.
            This illustrates Indian consumers’ belief in the real estate
            sector’s stability and growth potential. The embrace of proptech by
            investors reflects a desire for efficiency and transparency in the
            investment process, which is influencing the shifting market
            landscape,” shares Ram Naik, director, of The Guardians Real Estate
            Advisory.
          </p>
          <p>
            Another factor that can be attributed to this growth is the detailed
            financial planning and overall awareness about where to park the
            money. “Prudent and professional financial planning has only been
            increasing. Wealth managers are making clients understand the
            importance of diversified portfolio and how real estate is an
            important part of the investment pie,” shares Ravi Ramesh Pilani, MD
            of a developer group. Adding to this, Vedanshu Kedia, director of a
            real estate company mentions, “Due to the substantial rise in the
            stock market, which is reaching new highs repeatedly, people are
            looking to diversify their portfolio and invest the profits in real
            estate, which is a safe, dependable asset class that provides a
            capital appreciation opportunity as well as a fixed return on
            investment with rental yields.”
          </p>
          <p>
            Furthermore, tax breaks and easier access to loans have made
            homeownership a reality for many. Lastly, NRIs also have a big role
            to play in Indian real estate’s growth as an investment option.
            “Notably, there was an increased interest among NRIs who recognised
            the significance of owning property in their home country during
            Covid-19. This realisation highlighted the importance of having a
            secure residential base, encouraging more individuals to invest in
            homes. Additionally, implementation of RERA and other regulatory
            measures have bolstered investor confidence in the real estate
            sector,” shares Divya Doshi director of a real estate company. Keep
            these pointers in mind before investing in real estate
          </p>
          <p>
            Even though real estate is an attractive investment option, it
            requires careful consideration to obtain maximum return on
            investment (ROI). “Choosing the right investment property is the key
            to a successful investment. A clear budget is crucial as it helps
            you determine the type of property you can potentially invest in,
            narrowing down your options in terms of location and space.
            Depending on your budget, you can decide whether to invest in a
            residential property such as an apartment/flat, duplex, villa, or
            holiday home. Additionally, the investment objective, the location,
            and the expected ROI are some important factors that must be
            considered before buying an investment property,” shares Rohit
            Gupta, CEO of a developer group.
          </p>
          <p>
            The survey reveals that over 86 per cent of investors are looking to
            invest in peripheral or suburban areas. People are driven towards
            these areas due to an enhancement of infrastructure projects. “If
            one is looking purely for investment, it is important to study the
            proposed development plan for the said region. Investors would
            benefit by putting their money into projects around the proposed
            infrastructure developments, which would make commuting easier in
            time. They should also choose reputed developers to ensure quality
            and timely delivery,” advises Singh. Kedia concludes, “If an
            investor is choosing to invest in an under-construction project,
            legal and technical due diligence are essential decision-making
            factors. This avoids problems such as delayed or stalled projects.”
          </p>
        </div>
        {/* <News2 /> */}
        <section
          className="blog-modern overflow-hidden"
          style={{ position: "relative" }}
        >
          <div className="container">
            {/* <Heading headTitle="Latest News" /> */}
            <div className="row mt-40">
              <div className="col-12">
                <div className="mb-20">
                  <h3>Recent News</h3>
                </div>
              </div>
            </div>
            <div className="blog-carousel">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-blog"
                  className="swiper-container"
                >
                  {data?.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <Link href={"/newsDetails"}>
                        <div className="max-w-sm rounded overflow-hidden bg-white position-relative">
                          {/* Image */}
                          <div className="">
                            <Image
                              src={item.cover}
                              alt={item.title}
                              width={100}
                              height={100}
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          {/* Content */}
                          <div
                            className="bg-grey"
                            style={{ padding: "30px 40px" }}
                          >
                            <div className="fw-700 fz-10 text-golden">
                              LAW FIRM
                            </div>
                            <div className="fw-600 fz-22 mb-2">
                              {item.title}
                            </div>
                            <p className="fz-16 fw-400">{item.description}</p>
                            {/* Author */}
                            <div className="px-6 pt-4 pb-2">
                              <span className="text-grey news-firm">
                                Fynley Wilkinson
                              </span>
                              <div className="bg-dark date-banner">
                                <DateBanner />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            {/* Navigation Buttons */}
            {/* <div
          className="swiper-button-next text-dark fw-600 news-arrow-mobile-right"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            // right: "-60px",
            // top: "59%",
            top: "18%",
            transform: "translateY(-50%)",
          }}
        ></div>

        <div
          className="swiper-button-prev text-dark news-arrow-mobile-left"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            position: "absolute",
            // left: "-60px",
            top: "18%",
            // top: "59%",
            transform: "translateY(-50%)",
          }}
        /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;

const DateBanner = () => {
  return (
    <>
      <div
        className="date-wrapper bg-golden"
        style={{
          position: "absolute",
          backgroundSize: "cover",
          bottom: "445px",
          left: "5px",
          borderRadius: "5px",
        }}
      >
        <div
          className="date-box text-white bg-golden"
          style={{ fontSize: "32px", fontWeight: 700 }}
        >
          10
        </div>
        <div
          className="date-letter-box py-2 text-white"
          style={{ backgroundColor: "#D29530", fontSize: "12px" }}
        >
          NOV
        </div>
      </div>
    </>
  );
};
