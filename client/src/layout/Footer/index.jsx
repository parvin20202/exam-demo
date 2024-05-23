import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavLink from "react-bootstrap/NavLink";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialSkype } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa6";

import "../../layout/Footer";
const Footer = () => {
  return (
    <section id="footer" className="py-3">
      <Container>
        <Row>
          <Col>
            <ul className="d-flex column-gap-3">
              <NavLink className="text-secondary">Blog</NavLink>
              <NavLink className="text-secondary">FAQs</NavLink>
              <NavLink className="text-secondary">Contact us</NavLink>
            </ul>
          </Col>
          <Col>
            <ul className="d-flex column-gap-3">
              <NavLink>
                <FaFacebookF className="text-secondary" />
              </NavLink>
              <NavLink>
                <FaTwitter className="text-secondary" />
              </NavLink>
              <NavLink>
                <FaInstagram className="text-secondary" />
              </NavLink>
              <NavLink>
                <TiSocialSkype className="text-secondary" />
              </NavLink>
              <NavLink>
                <FaPinterest className="text-secondary" />
              </NavLink>
            </ul>
          </Col>
        </Row>
        <p className="text-secondary text-center">
          ©2018 All Rights Reserverd. This template is made with by{" "}
          <span className="text-danger">Colorlib</span>
        </p>
      </Container>
    </section>
  );
};

export default Footer;
