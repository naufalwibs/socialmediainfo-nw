import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllSocialMedia } from "../store/actions";
import { useHistory } from "react-router-dom";

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [keywords, setKeywords] = useState("");

  const toHome = () => {
    history.push("/");
  };

  const searchKeywordHandler = (e) => {
    setKeywords(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAllSocialMedia(keywords));
  };

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={toHome} href="#home">
            Informasi Social Media
          </Navbar.Brand>
          <form className="d-flex">
            <input
              onChange={searchKeywordHandler}
              value={keywords}
              className="form-control me-2"
              type="search"
              placeholder="Search by Name"
              aria-label="Search"
            />
            <Button
              onClick={searchHandler}
              variant="outline-success"
              type="submit"
            >
              Search
            </Button>
          </form>
        </Container>
      </Navbar>
    </>
  );
}
