import { Text, VStack, Heading } from '@chakra-ui/react';

interface StatProps {
  stat: string;
  heading: string;
}

export function Stat({stat, heading}: StatProps) {
  return (
    <VStack align="flex-start" _notFirst={{ml: 4}} spacing="0.5">
      <Heading fontSize="2xl" fontFamily="Inter" color="white">{stat}</Heading>
      <Text fontSize="15px" fontFamily="Lexend Deca"  color="#ffffff99">{heading}</Text>
    </VStack>
  )
}