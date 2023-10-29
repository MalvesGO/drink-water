import React, { useContext } from 'react';
import { Text, Box, Avatar, Slider, Divider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../contexts/UserContext';

interface IProfileScreen {
}

export const ProfileScreen: React.FunctionComponent<IProfileScreen> = ({
}) => {


    const { user, goal, setGoal} = useContext(UserContext);

    return (
        <SafeAreaView>
            <Avatar
                mt={5}
                size="2xl"
                alignSelf='center'
                bg={'purple.500'}
                source={{ uri: user?.photo || undefined }}>
                {user?.name.substring(0, 1)}
            </Avatar>
            <Text fontSize='2xl' textAlign='center' mt={5}>
                {user?.name}
            </Text>
            <Divider my={5} />
            <Text fontSize='lg' textAlign='center'>
                Meta de agua diária: {goal} ml
            </Text>
            <Box mx={10} mt={5}>               
                <Slider
                    defaultValue={goal}
                    value={goal}
                    minValue={0}
                    maxValue={4000}
                    step={100}
                    onChange={(value) => setGoal(value)}
                    colorScheme="purple"
                    size="md">
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Box>
            <Box px={5} mt={5}>
                <Text fontSize='lg' textAlign='center'>
                    I'm a software developer with 10+ years of experience in the field. I'm currently working as a Senior Software Engineer at a company called <Text color='purple.500' fontWeight='bold'>Cubos Tecnologia</Text> in Brazil.
                </Text>
            </Box>
        </SafeAreaView>
    );
}