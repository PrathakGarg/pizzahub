import { Modal } from "antd";

import { MenuItem } from "../../store/menu/menu.types"
import { FC } from "react";

type PizzaModalProps = {
    item: MenuItem,
    isOpen: boolean,
    handleOk: () => void,
    handleCancel: () => void
}

const PizzaModal: FC<PizzaModalProps> = ({ item, isOpen, handleOk, handleCancel }) => {
  return (
    <Modal
        title={item.name}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
    >
        <p>{item.description}</p>
    </Modal>
  );
}

export default PizzaModal;