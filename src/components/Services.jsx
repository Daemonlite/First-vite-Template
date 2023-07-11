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

        <img
          src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2023/02/hp-industries-page-break-bg.jpg?resize=1536,183"
          alt=""
          className="aesthetic"
        />
        <br />
        <h2 className="tom">
          Learn how Daemonlite products help you lower costs and save time.
        </h2>
        <aside className="side">
          <div className="act">
            <img
              src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-small-business.jpg?resize=1024,1024"
              alt=""
              width="300px"
            />
            <p className="title">Small Business</p>
            <p className="text-descr">
              Sell smarter and provide support faster in a single app.
            </p>
            <a className="link">Watch demos</a>
          </div>
          <div className="act">
            <img
              src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-sales.jpg?resize=1024,1024"
              alt=""
              width="300px"
            />
            <p className="title">Sales</p>
            <p className="text-descr">
              Close more deals and speed up growth with the #1 CRM.
            </p>
            <a className="link">Watch demos</a>
          </div>
          <div className="act">
            <img
              src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-all-products.jpg?resize=1024,1024"
              alt=""
              width="300px"
            />
            <p className="title">Services</p>
            <p className="text-descr">
              Spend less on scaling service customers love
            </p>
            <a className="link">Watch demos</a>
          </div>
          <div className="act">
            <img
              src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-service.jpg?resize=1024,1024"
              alt=""
              width="300px"
            />
            <p className="title">See all products</p>
            <p className="text-descr">
              Discover how our Customer 360 offerings deliver success now.
            </p>
            <a className="link">Watch demos</a>
          </div>
        </aside>
        <br />
        <img
          src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2023/01/hp-page-break-img-hills.png?resize=1536,427"
          alt=""
          className="aesthetic"
        />
        <h2 className="tom">Why You Should consider us</h2>
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
          <img
            src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2023/02/hp-industries-page-break-bg.jpg?resize=1536,183"
            alt=""
            className="aesthetic"
          />
        </section>
        <footer>
         <div className="foot-end">
         <h1 className="tye">Try Daemonlite for free. No credit card required, no software to install.</h1>
          <Button variant='contained'>Start Free Trial</Button>
         </div>
         <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/12/php-free-trial-desk.jpg?resize=1536,864" alt="" width='900px'  className="foot-img"/>
        </footer>
      </div>
    </>
  );
};

export default Services;
