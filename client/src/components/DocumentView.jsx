import React, { useEffect } from "react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { fetchAllSocialMedia } from "../store/actions";

export default function DocumentView() {
  const dispatch = useDispatch();

  const socialMediaData = useSelector((state) => state.socialMediaData);

  useEffect(() => {
    dispatch(fetchAllSocialMedia());
  }, [dispatch]);

  useEffect(() => {
    if (socialMediaData.length > 0) {
      ClassicEditor.create(document.querySelector("#editor"))
        .then((editor) => {
          window.editor = editor;
        })
        .catch((error) => {
          console.error("There was a problem initializing the editor.", error);
        });
    }
  }, [socialMediaData]);

  if (socialMediaData.length === 0) {
    return (
      <>
        <body>
          <h1 className="text-center pt-5">There's no data to shown</h1>
        </body>
      </>
    );
  }

  return (
    <>
      <body>
        <div id="editor">
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Aplikasi</th>
                <th>Keterangan</th>
                <th>Jumlah Pengguna</th>
                <th>Pendiri</th>
                <th>Tanggal Didirikan</th>
              </tr>
            </thead>
            <tbody>
              {socialMediaData.map((socialMedia, idx) => (
                <tr key={socialMedia._id}>
                  <td>{idx + 1}</td>
                  <td>{socialMedia.nama_aplikasi}</td>
                  <td>{socialMedia.keterangan}</td>
                  <td>{socialMedia.jumlah_pengguna}</td>
                  <td>{socialMedia.pendiri}</td>
                  <td>{socialMedia.tanggal_didirikan}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </body>
    </>
  );
}
