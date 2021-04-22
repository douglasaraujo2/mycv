import React, { useEffect } from 'react';

import {
    ModalBackground,
    Modal,
    ModalDialog,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CloseModalButton,
} from './styles'
import { Button } from '../MainComponents';

export default function ModalPage({ id, showModal, handleModal, buttons, title, children }) {
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                handleModal(false);
            }
        });
        return () => {
            window.removeEventListener("keydown", this);
        }
        // eslint-disable-next-line
    }, []);
    return (
        <>
            {showModal ? (
                <>
                    <ModalBackground />
                    <Modal
                        id={id ? id : parseInt(Math.random(1, 4000))}
                        className={`fade ${showModal ? 'show' : ''}`}
                        showModal={showModal}>
                        <ModalDialog>
                            <ModalContent>
                                <ModalHeader>
                                    {title}&nbsp;
                                    <CloseModalButton onClick={() => handleModal(false)}>X</CloseModalButton>
                                </ModalHeader>
                                <ModalBody>
                                    {children}
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="default" onClick={() => handleModal(false)}>Close</Button>
                                </ModalFooter>
                            </ModalContent>
                        </ModalDialog>
                    </Modal>
                </>

            ) : null
            }
        </>
    )
}
