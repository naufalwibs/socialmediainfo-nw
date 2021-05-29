import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { editSocialMedia } from "../../store/actions";

import dateChangerId from "../../helpers/dateChangerId";
import dateFormatForm from "../../helpers/dateFormatForm";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function EditModal(props) {
  const dispatch = useDispatch();
  const calendarFormat = () => {
    const newDate = dateFormatForm(props.tanggal_didirikan);
    const procesedDate = new Date(newDate).toISOString().split("T")[0];
    return procesedDate;
  };

  const initialValue = {
    nama_aplikasi: props.nama_aplikasi,
    keterangan: props.keterangan,
    jumlah_pengguna: props.jumlah_pengguna,
    pendiri: props.pendiri,
    tanggal_didirikan: calendarFormat(),
  };

  const emptyState = {
    nama_aplikasi: "",
    keterangan: "",
    jumlah_pengguna: "",
    pendiri: "",
    tanggal_didirikan: "",
  };

  const [values, setValues] = useState(initialValue);

  const handleClose = () => {
    props.handleEditModalWindow(false);
    setValues(emptyState);
  };

  const handleShow = () => {
    props.handleEditModalWindow(true);
    setValues(initialValue);
  };

  const submitEditForm = () => {
    if (
      values.nama_aplikasi &&
      values.keterangan &&
      values.jumlah_pengguna &&
      values.pendiri &&
      values.tanggal_didirikan
    ) {
      dispatch(
        editSocialMedia(props._id, {
          nama_aplikasi: values.nama_aplikasi,
          keterangan: values.keterangan,
          jumlah_pengguna: Number(values.jumlah_pengguna),
          pendiri: values.pendiri,
          tanggal_didirikan: dateChangerId(values.tanggal_didirikan),
        })
      );
      handleClose();
      MySwal.fire({
        icon: "success",
        title: "Edit Sukses",
        text: "Social media berhasil diedit",
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: "Edit Gagal",
        text: "Tidak boleh ada field yang kosong",
      });
    }
  };

  const formInputHandler = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={props.show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Edit Aplikasi</Modal.Title>
          <Button onClick={handleClose}>X</Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Aplikasi</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.nama_aplikasi}
                name="nama_aplikasi"
                type="text"
                placeholder="Edit Nama Aplikasi"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.keterangan}
                name="keterangan"
                as="textarea"
                style={{ height: "100px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Jumlah Pengguna</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.jumlah_pengguna}
                name="jumlah_pengguna"
                type="number"
                placeholder="Edit Jumlah Pengguna"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pendiri</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.pendiri}
                name="pendiri"
                type="text"
                placeholder="Edit Nama Pendiri Apps"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tanggal Didirikan</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.tanggal_didirikan}
                name="tanggal_didirikan"
                type="date"
                placeholder="Edit Nama Pendiri Apps"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={submitEditForm} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
