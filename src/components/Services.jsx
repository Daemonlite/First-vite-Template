import { Button } from "@mui/material";
import Side from "./Side";
const Services = () => {
  return (
    <>
      <div>
        <div className="landing" id="home">
          <div className="land-Text">
            <h1 className="land">
              We bring solutions to make life easier for our customers.
            </h1>
            <p className="land-descr">
              {" "}
              We offer a wide range of web services to help you establish and
              grow your online presence. Whether you&apos;re a small business
              owner, an entrepreneur, or just starting out on your online
              journey, we&apos;ve got you covered. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Eum nobis, reprehenderit sequi quas
              debitis,
            </p>
            <div className="btns">
              <Button
                variant="contained"
                className="butt"
                component="a"
                href="https://t.me/betastash"
                target="_blank"
              >
                Join Us
              </Button>
              <Button
                variant="outlined"
                className="butt"
                component="a"
                href="https://t.me/betastash"
                target="_blank"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
              alt="land-img"
              className="land-img"
            />
          </div>
        </div>

        <br />
        <br />
        <Side />
        <br />
        <br />
        <h2 className='tom'>Why You Should consider us</h2>
        <br />
        <section className="why">
          <div className="all">
            <div className="sec-icon">
              <img
                src="https://assets-global.website-files.com/63d3b504212f2224c6e39423/6400ae13f098d3c8f71e4560_Icon.png"
                alt="icon"
                className="sec-img"
              />
            </div>
            <h4 className="sec-head">WORK WITH THE BEST</h4>
            <div className="sec-body">
              Best-in-class African-based developers with years of experience
              across different industries, using top processes to deliver
              high-quality products.
            </div>
          </div>

          <div className="all">
            <div className="sec-icon">
              <img
                src="https://assets-global.website-files.com/63d3b504212f2224c6e39423/6400ae14a51435e2b5a93f55_Icon-3.png"
                alt="icon"
                className="sec-img"
              />
            </div>
            <h4 className="sec-head">FULL TRANSPARENCY</h4>
            <div className="sec-body">
              We provide transparent and clear communication, project
              management, and budgeting.
            </div>
          </div>
          <div className="all">
            <div className="sec-icon">
              <img
                src="https://assets-global.website-files.com/63d3b504212f2224c6e39423/6400ae1436e5d65f1fe8ca1c_Icon-2.png"
                alt="icon"
                className="sec-img"
              />
            </div>
            <h4 className="sec-head">DIGITAL ACCELERATION</h4>
            <div className="sec-body">
              We focus on doing the right things to fuel your growth, nothing
              more, nothing less.
            </div>
          </div>


        </section>
      </div>
    </>
  );
};

export default Services;
