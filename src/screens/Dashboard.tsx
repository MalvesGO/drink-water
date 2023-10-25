import { HStack, Text, Button, useToast, Box, VStack, Stack } from 'native-base'
import React, { useEffect, useState } from 'react'

interface iDashboardProps {

};

export const Dashboard = (props: iDashboardProps) => {

    const toast = useToast();
    const [cupSize, setCupSize] = useState<number>(300);
    const [water, setWater] = useState<number>(0);
    const [goal, setGoal] = useState<number>(2000);

    const handleWater = () => {
        setWater(water + cupSize);
        toast.show({
            title: "Water added",
            description: "100 ml of water added",
            placement: "bottom",
        })
    }

    const handleChangeCupsize = (size: number) => {
        setCupSize(size);
    };

    useEffect(() => {
        if (water >= goal) {
            toast.show({
                title: "Goal reached",
                description: "You have reached your goal",
                placement: "bottom",
            })
        }
    }, [water])


    return (
        <>
            <VStack flex={1} width="100%" justifyContent='space-between' alignItems='center' p={4} my={30}>
                <Text fontSize="sm">
                    {' '} copo de {cupSize}ml
                </Text>
                <VStack>
                    <Stack alignItems="center" justifyContent="center" >
                        <Text fontSize="6xl">
                            {water}
                        </Text>
                        <Text fontSize="xl">
                            {' '}/ {goal} ml
                        </Text>
                    </Stack>

                    <Button mt={5} colorScheme="primary" onPress={handleWater}>
                        Beber Agua
                    </Button>
                </VStack>
                <Box mt={10}>
                    <Button.Group>
                        <Button onPress={() => handleChangeCupsize(200)} colorScheme="teal">Copo Americano</Button>
                        <Button onPress={() => handleChangeCupsize(300)} colorScheme="teal">Xicara</Button>
                        <Button onPress={() => handleChangeCupsize(400)} colorScheme="teal">Garrafa</Button>
                    </Button.Group>
                </Box>
            </VStack>
        </>
    )
}