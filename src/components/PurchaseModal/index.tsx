import Modal from 'react-modal';

interface PurchaseModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function PurchaseModal({ isOpen, onRequestClose }: PurchaseModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Pokéloja | Compra finalizada</h2>
        </Modal>
    )
}