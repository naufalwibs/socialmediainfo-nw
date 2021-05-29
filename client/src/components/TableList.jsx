import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import EditModal from "./UI/EditModal";

import { useDispatch, useSelector } from "react-redux";

import { deleteSocialMedia } from "../store/actions";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function TableList(props) {
  const socialMediaData = useSelector((state) => state.socialMediaData);
  const dispatch = useDispatch();
  const [showEditModal, setEditModal] = useState(false);
  const handleEditModal = (modalStatus) => {
    setEditModal(modalStatus);
  };

  const socialMediaById = socialMediaData.find(
    (socialMedia) => socialMedia._id === props?._id
  );

  const deleteApps = (id) => {
    MySwal.fire({
      title: "Are you sure want delete this Apps?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deleteSocialMedia(id));
      }
    });
  };

  return (
    <>
      <tr>
        <td>{props.no}</td>
        <td>{props.nama_aplikasi}</td>
        <td>{props.keterangan}</td>
        <td>{props.jumlah_pengguna}</td>
        <td>{props.pendiri}</td>
        <td>{props.tanggal_didirikan}</td>
        <td>
          <Row>
            <Col>
              <EditModal
                handleEditModalWindow={handleEditModal}
                show={showEditModal}
                _id={socialMediaById._id}
                nama_aplikasi={socialMediaById.nama_aplikasi}
                keterangan={socialMediaById.keterangan}
                jumlah_pengguna={socialMediaById.jumlah_pengguna}
                pendiri={socialMediaById.pendiri}
                tanggal_didirikan={socialMediaById.tanggal_didirikan}
              />
            </Col>
            <Col>
              <Button onClick={() => deleteApps(props._id)} variant="primary">
                Hapus
              </Button>
            </Col>
          </Row>
        </td>
      </tr>
    </>
  );
}
