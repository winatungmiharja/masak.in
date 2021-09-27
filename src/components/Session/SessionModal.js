import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ArrowRightCircle } from "react-feather";
import "./Session.scss";

const modalStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderTopRightRadius: "150px",
  borderTopLeftRadius: "150px",
  color: "white",
  border: "1px solid rgba(255, 255, 255, 0.164)",
  boxShadow: "0 0 20px tgba(0, 0, 0, 0.144)",
};
export default function SessionModal({ isOpen, onClose, img }) {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent style={modalStyle} width="300px">
          <Flex justify="center" padding="20px" paddingBottom="0">
            <Image borderTopRadius="50%" src={img} />
          </Flex>
          <ModalHeader>
            <Text fontSize="22px" lineHeight="45px" fontWeight="600">
              Yeyy, you made it! 🌈
            </Text>
            <Text fontWeight="normal">Pat yourself on the back!</Text>
          </ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Link to="/home/dashboard">
              <Button
                rightIcon={<ArrowRightCircle color="white" />}
                size="sm"
                colorScheme="orange"
                mr={3}
              >
                <Text fontSize="sm" color="white">
                  Cook some More!
                </Text>
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
