import React, { useState, useEffect } from "react";
import { Container, Col, Table, Row, Button } from "react-bootstrap";
import TableList from "../components/TableList";
import AddModal from "../components/UI/AddModal";
import NavbarComponent from "../components/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { fetchAllSocialMedia } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const socialMediaData = useSelector((state) => state.socialMediaData);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const [showAddModal, setAddModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAllSocialMedia());
  }, [dispatch]);

  const handleAddModal = (modalStatus) => {
    setAddModal(modalStatus);
  };

  const viewDocumentFile = () => {
    window.open("/docview", "_blank");
  };

  if (isLoading) {
    return <h1>is Loading</h1>;
  }

  if (error) {
    return <h1>An Error Occured!</h1>;
  }

  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Col xs md lg="2" className="py-3">
            <AddModal
              handleAddModalWindow={handleAddModal}
              show={showAddModal}
            />
          </Col>
          <Col xs md lg="2" className="py-3">
            <Button onClick={viewDocumentFile} variant="primary">
              View as Document
            </Button>
          </Col>
        </Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Nama Aplikasi</th>
                <th className="text-center">Keterangan</th>
                <th className="text-center">Jumlah Pengguna</th>
                <th className="text-center">Pendiri</th>
                <th className="text-center">Tanggal Didirikan</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {socialMediaData.length > 0 ? (
                socialMediaData.map((socialMedia, idx) => {
                  return (
                    <TableList
                      key={socialMedia._id}
                      no={idx + 1}
                      _id={socialMedia._id}
                      nama_aplikasi={socialMedia.nama_aplikasi}
                      keterangan={socialMedia.keterangan}
                      jumlah_pengguna={socialMedia.jumlah_pengguna}
                      pendiri={socialMedia.pendiri}
                      tanggal_didirikan={socialMedia.tanggal_didirikan}
                    />
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6">No Data, Add Aplication First</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Container>
    </>
  );
}
