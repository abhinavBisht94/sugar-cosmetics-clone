import React, { useEffect, useState } from "react";
import MainSlider from "./mainSlider";
import MultiImage from "./multiImage";
import Products from "./Homeproducts";
import axios from "axios";

export const Home = () => {
  const [allData, setallData] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-gold-chimpanzee-slip.cyclic.app/product")
      .then((data) => setallData(data.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(allData, "all dat FROM HOME");

  const arr = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/70252059-0efb-40b0-b659-6d27afafa0ee.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/309d5880-c650-4773-9cb9-5b8efc593ac0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg",
    "https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg",
    "https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg",
    "https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
  ];

  const tips = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg",
  ];

  const hotDeals = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7f14438e-1e5c-49ad-9963-bd600ee310db.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/927dc062-b21a-460e-a916-68fa21850841.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/444f4603-cc52-4560-9933-d58d1d9cb394.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/e4f6c286-358b-43f1-8f53-c26aa0718c57.jpg",
    "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7f14438e-1e5c-49ad-9963-bd600ee310db.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg",
  ];

  const newLaunched = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg",
  ];

  return (
    <div>
      <MainSlider arr={arr} />
      <h2 className="ReferFriends_home">REFER YOUR FRIENDS</h2>
      <div className="referImage_home">
        <img
          src="https://d32baadbbpueqt.cloudfront.net/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg"
          alt="refer image"
        />
      </div>
      <h2 className="AIR_KISS_POWDER_HOME">AIR KISS POWDER LIPSTICK</h2>

      <div className="AIR_KISS_POWDER_VIDEO_HOME">
        <iframe
          height="440"
          src="https://www.youtube.com/embed/VXMBlOqZJbI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ProductsDiv_First_home">
        <h3 className="allHeads_home">BESTSELLERS</h3>
        <Products arr={allData} type="lips" />
      </div>
      <div className="beautyTips_home">
        <h2 className="allHeads_home">QUICK BEAUTY TIPS WITH SUGAR</h2>
        <MainSlider arr={tips} />
      </div>
      <div className="hotDeals_home">
        <h2 className="allHeads_home">HOT DEALS</h2>
        <MultiImage arr={hotDeals} />
      </div>
      <div className="newlyLaunched_home">
        <h2 className="allHeads_home">NEWLY LAUNCHED</h2>
        <MainSlider arr={newLaunched} />
      </div>
      <div className="superSaver_home">
        <h2 className="allHeads_home">SUPER SAVER</h2>
        <Products arr={allData} type="face" />
      </div>
      <div className="TopPicks_home">
        <h2 className="allHeads_home">TOP PICKS OF THE WEEK</h2>
        <MultiImage arr={hotDeals} />
      </div>
      <div className="Gifting_home">
        <h2 className="allHeads_home">GIFTING</h2>
        <Products arr={allData} type="face brushes" />
      </div>
      <div>
        <h2 className="allHeads_home">THIS OR THAT</h2>
        <div className="ThisOrThat_home">
          <img
            src="https://d32baadbbpueqt.cloudfront.net/87e180d8-98a5-44d4-88f2-4af24327cd7c.jpg"
            alt="altofFace"
          />
          <img
            src="https://d32baadbbpueqt.cloudfront.net/38a305ba-a808-4ade-ba72-fc55f5bc6183.jpg"
            alt="GODDESS"
          />
        </div>
      </div>
      <div className="Justin">
        <h2 className="allHeads_home">JUST-IN</h2>
        <Products arr={allData} type="eyes" />
      </div>
      <div>
        <h2 className="allHeads_home">SUGAR BEAUTY BLOG</h2>
        <MultiImage arr={hotDeals} />
      </div>
      <div>
        <h2 className="allHeads_home">SKINCARE BASICS</h2>
        <Products arr={allData} type="moisturizer" />
      </div>
    </div>
  );
};
