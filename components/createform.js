import { useForm, Controller } from 'react-hook-form'
import {
    Button,
    Input,
    FormLabel,
    Container,
    VStack,
    Textarea,
    InputGroup,
    InputLeftAddon,
    Box,
    Switch,
    Text,
    Flex,
    useColorModeValue,
    Slider,
    SliderTrack,
    SliderThumb,
    SliderFilledTrack,
    SliderMark,
    Select
} from '@chakra-ui/react'
import { InfoIcon, WarningIcon } from '@chakra-ui/icons'
import axios from 'axios'
import Categories from '../utils/categories.json'

const CreateForm = () => {
    const { categories: cats } = Categories
    const { control, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            title: '',
            desc: '',
            pinned: false,
            color: '#FFFFFF',
            urgency: 4,
            cat: ''
        }
    })

    const fieldsBg = useColorModeValue('white', 'gray.800')
    const floatFormBg = useColorModeValue('teal.50', 'gray.700')
    const sliderColor = useColorModeValue('teal.100', 'teal.50')
    const indicatorColor = useColorModeValue('teal.300', 'teal.500')

    const rules = {
        required: 'This field is required!',
        min: 10
    }
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:3000/api/actions/create', { data }).then(res => res.data)
            reset()

        } catch (error) {
            console.log(err)
        }
    }

    return (
        <Box bg={floatFormBg} py={6}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={2}>
                    <Container maxW={{ base: 'container.md', md: '30%' }}>

                        <Box my={3}>
                            <Controller
                                name="color"
                                control={control}
                                render={({ field }) => <InputGroup size={'md'}>
                                    <Input bg={fieldsBg} borderRadius={'md'} type="color" {...field} placeholder="Title of the task..." />
                                </InputGroup>} />
                        </Box>

                        <Box my={3}>
                            <Controller
                                name="title"
                                rules={rules}
                                control={control}
                                render={({ field }) => <InputGroup size={'md'}>
                                    <InputLeftAddon bg={fieldsBg}>
                                        <InfoIcon />
                                    </InputLeftAddon>
                                    <Input bg={fieldsBg} isInvalid={errors.title} borderRadius={'md'} id="task-title" {...field} placeholder="Title of the task..." />
                                </InputGroup>} />
                        </Box>

                        <Box my={3}>
                            <FormLabel htmlFor='task-cat'>Category:</FormLabel>
                            <Controller
                                name="cat"
                                rules={rules}
                                control={control}
                                render={({ field }) =>
                                    <Select bg={fieldsBg} borderRadius={'md'} {...field} id="task-cat">
                                        {cats.map((cat, index) => <option key={index} value={cat}>{cat}</option>)}
                                    </Select>
                                } />
                        </Box>

                        {errors.desc && <Box align="center">
                            <WarningIcon mr={2} color="red" />
                            <Text as="sub" color="red">{errors.desc?.message}</Text>
                        </Box>}
                        <Box my={3}>
                            <Controller
                                name="desc"
                                rules={rules}
                                control={control}
                                render={({ field }) =>
                                    <Textarea bg={fieldsBg} borderRadius={'md'} id="task-title" {...field} size="sm" placeholder="Title of the task..." />
                                } />
                        </Box>

                        <FormLabel>Level of urgency:</FormLabel>
                        <Box m={'0 auto'} w={'90%'} >
                            <Controller
                                control={control}
                                name="urgency"
                                render={({ field }) =>
                                    <Slider mt={7} defaultValue={watch('urgency')} {...field} min={1} max={10} step={1}>
                                        <SliderMark
                                            value={watch('urgency')}
                                            textAlign='center'
                                            bg={indicatorColor}
                                            borderRadius={'md'}
                                            color='white'
                                            fontWeight={'bold'}
                                            mt='-10'
                                            ml='-6'
                                            w='12'
                                        >
                                            {watch('urgency')}
                                        </SliderMark>
                                        <SliderTrack bg={sliderColor}>
                                            <Box position='relative' right={10} />
                                            <SliderFilledTrack bg='teal' />
                                        </SliderTrack>
                                        <SliderThumb boxSize={6} />
                                    </Slider>} />
                        </Box>

                        <Flex
                            align="center"
                            justify={'space-between'}
                            my={2}>
                            <FormLabel fontWeight={'bold'} color={useColorModeValue('teal.900', 'white')} fontSize={'1.2rem'}>Pin to top</FormLabel>
                            <Controller
                                name="pinned"
                                control={control}
                                render={({ field }) =>
                                    <Switch {...field} color={fieldsBg} colorScheme={'teal'} size="lg" />
                                }
                            />
                        </Flex>


                        <Button
                            isLoading={isSubmitting}
                            size="sm"
                            w="100%"
                            type="submit"
                            colorScheme={'teal'}>
                            Create a New Task
                        </Button>

                    </Container>
                </VStack>
            </form>
        </Box >
    )
}

export default CreateForm