import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { addSocialMedia } from "../../store/actions";

import dateChangerId from "../../helpers/dateChangerId";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function AddModal(props) {
  const dispatch = useDispatch();
  const initialValue = {
    nama_aplikasi: "",
    keterangan: "",
    jumlah_pengguna: "",
    pendiri: "",
    tanggal_didirikan: "",
  };
  const [values, setValues] = useState(initialValue);

  const handleClose = () => {
    props.handleAddModalWindow(false);
    setValues(initialValue);
  };
  const handleShow = () => props.handleAddModalWindow(true);

  const submitForm = () => {
    if (
      values.nama_aplikasi &&
      values.keterangan &&
      values.jumlah_pengguna &&
      values.pendiri &&
      values.tanggal_didirikan
    ) {
      dispatch(
        addSocialMedia({
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
        title: "Penambahan Sukses",
        text: "Social media berhasil ditambahkan",
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: "Penambahan Gagal",
        text: "Tidak boleh ada field yang kosong",
      });
    }
  };

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(values);

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Tambah Aplikasi
      </Button>

      <Modal show={props.show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Tambah Aplikasi</Modal.Title>
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
                placeholder="Masukan Nama Aplikasi"
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
                placeholder="Masukan Jumlah Pengguna"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pendiri</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.pendiri}
                name="pendiri"
                type="text"
                placeholder="Masukan Nama Pendiri Apps"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tanggal Didirikan</Form.Label>
              <Form.Control
                onChange={formInputHandler}
                value={values.tanggal_didirikan}
                name="tanggal_didirikan"
                type="date"
                placeholder="Masukan Tanggal Didirikan"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
