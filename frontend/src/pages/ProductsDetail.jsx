import { ProductsDetailTwo } from "../components/ProductsDetail/ProductsDetailTwo";
import "../CSS/productsDetail.css";

export const ProductsDetail = ({ data }) => {
  //   console.log("data:", data);

  let rating = +data.Rating;
  let fullStar =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plain_Yellow_Star.png/640px-Plain_Yellow_Star.png";

  let halfStar =
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Half_Star.png?20180308025809";

  let arr = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= 1) {
      arr.push(fullStar);
    }
    if (rating > 0 && rating < 1) {
      arr.push(halfStar);
    }
    rating -= 1;
  }

  return (
    <>
      <div id="prodDetailPath">
        <img
          src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
          alt="Home icon"
        />
        <p>/ Makeup</p>
        <p>/ {data.category}</p>
        <p>/ {data.prodEyesHeading}</p>
        <p>/ {data.Title}</p>
      </div>

      <div id="prodDetail">
        <div id="prodDetailDivOne">
          <div>
            <div id="prodDetailImages">
              <img src={data.ImageUrl} alt={data.prodEyesHeading} />
            </div>

            <div id="prodDetailMiniImages">
              <img src={data.ImageUrl} alt={data.prodEyesHeading} />
            </div>
          </div>

          <div id="prodDetailPrice">
            <p>{data.Title}</p>

            <div id="prodDetailPriceRating">
              {arr.map((elem) => {
                return <img src={elem} alt="stars" />;
              })}
              <p>
                {data.Rating} {data.RatingTotal}
              </p>
            </div>

            <p>{data.Price}</p>

            <button id="prodDetailCart">Add to cart</button>

            <p id="prodDetailWish">
              <img src="https://i.ibb.co/QpM4sbW/1077035.png" alt="Wishlist" />
              Save to Wishlist
            </p>

            <p id="prodDetailSocial">
              Share with friends
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Whatsapp.svg"
                alt="Whatsapp"
              />
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Facebook.svg"
                alt="Facebook"
              />
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Twitter.svg"
                alt="Twitter"
              />
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Tumblr.svg"
                alt="Tumblr"
              />
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Mail.svg"
                alt="Mail"
              />
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Linkedin.svg"
                alt="Linkedin"
              />
            </p>
          </div>
        </div>

        <ProductsDetailTwo />
      </div>
    </>
  );
};
