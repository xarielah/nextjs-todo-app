import { useForm, Controller } from 'react-hook-form'
import {
    Button,
    Input,
    FormLabel,
    Box,
    VStack
} from '@chakra-ui/react'

const CreateForm = () => {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            title: '',
            desc: '',
            pinned: false,
            color: ''
        }
    })

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
                <Box>
                    <FormLabel htmlFor='task-title'>Task Name</FormLabel>

                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <Input id="task-title" {...field} size="sm" placeholder="Title of the task..." />} />
                </Box>

                <Box>
                    <FormLabel htmlFor='task-desc'>Task Desc</FormLabel>

                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <Input id="task-title" {...field} size="sm" placeholder="Title of the task..." />} />
                </Box>

                <Button size="sm" colorScheme={'teal'}>Create Task</Button>
            </VStack>
        </form>
    )
}

export default CreateForm