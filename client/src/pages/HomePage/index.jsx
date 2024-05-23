import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { useEffect, useState } from "react";
import { getAllData } from "../../services";
const HomePage = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllData().then((res) => {
      setProducts(res.data.data);
    });
  }, []);
  return (
    <>
      <section id="hero">
        <Container>
          <div className="content">
            <h6>SPRING / SUMMER COLLECTION 2017</h6>
            <h1>Get up to 30% Off New Arrivals</h1>
            <Button className="bg-danger border-0">Shop Now</Button>
          </div>
        </Container>
      </section>
      <section id="banners" className="py-4">
        <Container>
          <Row className="justify-content-center row-gap-3">
            <Col xs={12} sm={6} md={4} lg={4}>
              <div className="banner position-relative">
                <img
                  className="img-fluid w-100"
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
                />
                <h6 className="bg-white position-absolute p-3">WOMENS</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <div className="banner position-relative">
                <img
                  className="img-fluid w-100"
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
                />
                <h6 className="bg-white position-absolute p-3">ACCESSORIESS</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
              <div className="banner position-relative">
                <img
                  className="img-fluid w-100"
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
                />
                <h6 className="bg-white position-absolute p-3">MENS</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="products">
        <Container>
          <Row className="justify-content-center" xs={3} sm={3} md={4} xl={5}>
            {products &&
              products.map((p) => {
                return (
                  <Col lg={4} key={p._id}>
                    <div className="product text-center">
                      <img className="img-fluid" src={p.imageUrl} />
                      <p>{p.description}</p>
                      <p className="text-danger">{`$${p.price}`}</p>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
      <section id="deal">
        <Container>
          <Row>
            <Col sm={12} md={5} lg={6}>
              <img
                className="img-fluid "
                src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png"
              />
            </Col>
            <Col sm={12} md={7} lg={6}>
              <div className="content text-center py-4 ">
                <h2 className="text-danger">Deal Of The Week</h2>
                <hr className="w-25 text-danger m-auto" />
                <div className="time d-flex column-gap-3 my-4">
                  <div className="text-center bg-white rounded-circle py-3 px-4">
                    <h4 className="text-danger fw-bold">2</h4>
                    <h5 className="text-secondary">Day</h5>
                  </div>
                  <div className="text-center bg-white rounded-circle py-3 px-4">
                    <h4 className="text-danger fw-bold">22</h4>
                    <h5 className="text-secondary">Hours</h5>
                  </div>{" "}
                  <div className="text-center bg-white rounded-circle py-3 px-4">
                    <h4 className="text-danger fw-bold">45</h4>
                    <h5 className="text-secondary">Mins</h5>
                  </div>{" "}
                  <div className="text-center bg-white rounded-circle py-3 px-4">
                    <h4 className="text-danger fw-bold">37</h4>
                    <h5 className="text-secondary">Sec</h5>
                  </div>
                </div>
                <Button className="bg-dark border-0">Shop Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="blogs" className="py-4">
        <Container>
          <h2 className="text-center">Latest Blogs</h2>
          <hr className="w-25 text-danger m-auto my-4" />
          <Row className="justify-content-center row-gap-4">
            <Col sm={6} md={4} lg={4}>
              <img
                className="img-fluid w-100"
                src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg"
              />
            </Col>
            <Col sm={6} md={4} lg={4}>
              <img
                className="img-fluid w-100"
                src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg"
              />
            </Col>
            <Col sm={6} md={4} lg={4}>
              <img
                className="img-fluid w-100"
                src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="subscribe" className="py-4">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col sm={12} md={6} lg={6}>
              <h3>Newsletter</h3>
              <p>
                Subscribe to our newsletter and get 20% off your first purchase
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="d-flex">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your email"
                />
                <Button className="bg-danger border-0">Subscribe</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
