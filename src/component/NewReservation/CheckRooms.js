import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RoomAvailability from '../Common/RoomAvailability';


function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="p-0 m-0">Check Rooms Availability</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <RoomAvailability/>

      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        {/* <Button variant="secondary" onClick={props.onHide}><i class="bi bi-caret-left-fill me-1"></i>Back</Button>
        <Button onClick={props.onHide}><i class="bi bi-arrow-repeat me-1"></i>Update</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function CheckRooms() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" className='me-2 mb-2' onClick={() => setModalShow(true)}>
      <i class="bi bi-clipboard2-check me-2"></i>Check Availability
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CheckRooms;
