import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavLink from "react-bootstrap/NavLink";
import "./index.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoBasketSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="header-top bg-dark py-3">
          <Container>
            <Row className=" justify-content-between">
              <Col md={6} lg={6}>
                <p className="text-uppercase text-secondary m-0">
                  free shipping on all u.s orders over $50
                </p>
              </Col>
              <Col className="d-flex justify-content-end" md={6} lg={6}>
                <div>
                  <select className="bg-transparent text-secondary border-0">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>AUD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                  <select className="bg-transparent text-secondary border-0">
                    <option>English</option>
                    <option>French</option>
                    <option>Italian</option>
                    <option>German</option>
                    <option>Spanish</option>
                  </select>
                  <select className="bg-transparent text-secondary border-0">
                    <option>MyAccount</option>
                    <option>Sign In</option>
                    <option>Register</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="header-bottom bg-warning">
          <Container>
            <Row className="align-items-center">
              <Col sm={12} md={3} lg={3}>
                <NavLink className="text-danger fw-bold">COLOSHOP</NavLink>
              </Col>
              <Col className="" sm={12} md={9} lg={9}>
                <nav className="d-flex justify-content-end ">
                  <ul className="list-unstyled d-flex column-gap-2 m-0 py-3">
                    <NavLink>HOME</NavLink>
                    <NavLink>SHOP</NavLink>
                    <NavLink>PROMATION</NavLink>
                    <NavLink>PAGES</NavLink>
                    <NavLink>BLOG</NavLink>
                    <NavLink>CONTACT</NavLink>
                    <NavLink>{<IoSearchOutline />}</NavLink>
                    <NavLink>
                      <MdAccountCircle />
                    </NavLink>
                    <NavLink>
                      <IoBasketSharp />
                    </NavLink>
                  </ul>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
