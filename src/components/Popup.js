import Modal from "react-bootstrap/Modal";
import { SearchInput } from "../pages/HomeStyled";
const Popup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} bg="dark">
      <Modal.Header>
        <SearchInput autoFocus type="text" placeholder="Search for something" />
      </Modal.Header>
      <Modal.Body>No recent search</Modal.Body>
    </Modal>
  );
};

export default Popup;
