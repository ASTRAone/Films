import React from 'react';
import './style.scss';

import { Button, Header, Image, Modal, Icon  } from 'semantic-ui-react';

const ModalShell = (props) => {
    return (
        <Modal
            open={props.open}
            basic>
                <Modal.Content>
                    <div className="modal-card-container">
                        {props.children}
                    </div>
                </Modal.Content>
        </Modal> 
    );
};

export default ModalShell;