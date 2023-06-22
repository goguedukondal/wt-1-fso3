import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h4 style={{marginBottom:"10px"}}>ABOUT FLEX BUSINESS PRO</h4>
        <p className="about">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim soluta
          ea reprehenderit molestias, optio aliquid hic, illum expedita sunt
          repudiandae odio temporibus rerum 
        </p>
      </div>
      <div>
        <h4 style={{marginBottom:"10px"}}>RECENT POSTS </h4>
        <p className="recent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
          sapiente!
        </p>
      </div>
      <div>
        <h4 style={{marginBottom:"10px"}}>GALLERS</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gridGap: "30px",
          }}
        >
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="1"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="2"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th?id=OIP.rf-xQqB3Vfn8ThQA40ka4wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="3"
          />

          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th?id=OIP.imE6br189zS7Hb-Ip7kwHAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="4"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=293&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th?q=Love+Nature&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
            alt="5"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th/id/OIP.zcKAqetH0Z30v1DkvloA4AHaFj?pid=ImgDet&rs=1"
            alt="6"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://th.bing.com/th/id/OIP.PnUaiDKxFSOCk_Fq9jzUcQHaE6?pid=ImgDet&w=191&h=126&c=7&dpr=1.5"
            alt="7"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
