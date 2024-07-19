// PopupWrapper.js
import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
`;

interface WrapperProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const PopupWrapper: React.FC<WrapperProps> = ({
    children,
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <Overlay onClick={handleOverlayClick}>
            <PopupContainer>{children}</PopupContainer>
        </Overlay>
    );
};

export default PopupWrapper;
