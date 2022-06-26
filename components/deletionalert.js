import { useDisclosure, Button, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, AlertDialogFooter } from '@chakra-ui/react'
import { useRef } from 'react'

const DeletionAlert = ({ data, isOpen, onClose }) => {
    // const { isOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Deletion of '{data.title}' ({data.cat})
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure you want to permanently delete this task?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            I feel unsure
                        </Button>
                        <Button colorScheme='red' onClick={onClose} ml={3}>
                            Yes Please!
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default DeletionAlert