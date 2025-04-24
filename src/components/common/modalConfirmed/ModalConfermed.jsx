import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalConfermed(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onConfirm}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

