import { Text, Button, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, AlertDialogFooter } from '@chakra-ui/react'
import axios from 'axios'
import { useRef, useState } from 'react'

const DeletionAlert = ({ data, isOpen, onClose }) => {
    const [isErr, setErr] = useState(false)
    const cancelRef = useRef()

    const deleteTask = async () => {
        try {
            const res = await axios.post('http://localhost:3000/api/actions/delete', { id: data._id }).then(res => res.data)
            window.location.reload(false)
        } catch (error) {
            console.log(error)
            setErr(true)
        }
    }

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Deletion of &apos;{data.title}&apos; ({data.cat})
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure you want to permanently delete this task?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        {isErr && <Text m={5} color="red">Error deleting this task</Text>}
                        <Button ref={cancelRef} onClick={onClose}>
                            I feel unsure
                        </Button>
                        <Button colorScheme='red' onClick={deleteTask} ml={3}>
                            Yes Please!
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default DeletionAlert