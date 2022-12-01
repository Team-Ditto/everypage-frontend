import { VStack, Text, Heading, Box } from 'native-base';
import { BlueShades, OrangeShades } from '../../assets/style/color';

export default function Community() {
  return (
    <VStack justifyContent='center' alignItems='center' h='100%'>
      <Box borderRadius='100%' bg={OrangeShades.primaryOrange} w={8} h={8}>
        <Heading textAlign='center' fontFamily='Quicksand'>
          !
        </Heading>
      </Box>
      <Heading>Community</Heading>
      <Text>Under development process</Text>
    </VStack>
  );
}
