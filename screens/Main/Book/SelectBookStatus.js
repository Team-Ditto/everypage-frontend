import { Modal, VStack, Stack, Text, Divider, Pressable, Actionsheet, Box, View } from 'native-base';
import { WhiteShades } from '../../../assets/style/color';
import { borrowingStatus } from '../../../constants/LibraryData';

const SelectBookStatus = props => {
  const { showModal, handleBorrowingStatusSelected, handleBadgePressed } = props;
  return (
    <>
      {/* <Modal isOpen={showModal} onClose={handleBadgePressed} display='flex'>
        <Modal.Content
          borderRadius='20px 20px 0px 0px'
          width='100%'
          h='245px'
          _backdrop={{
            _dark: {
              bg: 'coolGray.900',
            },
            bg: WhiteShades,
          }}
          position='absolute'
          bottom={0}
          mb={0}
        >
          <Modal.Header alignItems='center'>Book Status</Modal.Header>
          <Modal.Body pt={0} size='full'>
            <VStack justifyContent='space-evenly' alignItems='center' pb='100px'>
              <Pressable h='50px' justifyContent='center' onPress={() => handleBorrowingStatusSelected('Available')}>
                <Text>Available</Text>
              </Pressable>
              <Divider />
              <Pressable h='50px' justifyContent='center' onPress={() => handleBorrowingStatusSelected('On-Hold')}>
                <Text>On-Hold</Text>
              </Pressable>
              <Divider />
              <Pressable h='50px' justifyContent='center' onPress={() => handleBorrowingStatusSelected('In-Use')}>
                <Text>In-Use</Text>
              </Pressable>
              <Divider />
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
      <Actionsheet isOpen={showModal} onClose={handleBadgePressed}>
        <Actionsheet.Content px={0}>
          <Box w='100%' h='50px' justifyContent='center'>
            <Text
              fontSize='16px'
              fontWeight='bold'
              _dark={{
                color: 'gray.300',
              }}
              textAlign='center'
            >
              Borrowing Status
            </Text>
          </Box>
          <Divider bg='#A3A3A3' thickness={1.5} />
          <Actionsheet.Item alignItems='center'>
            <Pressable onPress={() => handleBorrowingStatusSelected('Available')}>
              <Text fontSize='16px'>Available</Text>
            </Pressable>
          </Actionsheet.Item>
          <Divider w='94%' />
          <Actionsheet.Item alignItems='center'>
            <Pressable onPress={() => handleBorrowingStatusSelected('On-Hold')}>
              <Text fontSize='16px'>On-Hold</Text>
            </Pressable>
          </Actionsheet.Item>
          <Divider w='94%' />
          <Actionsheet.Item alignItems='center'>
            <Pressable onPress={() => handleBorrowingStatusSelected('In-Use')}>
              <Text fontSize='16px'>In-Use</Text>
            </Pressable>
          </Actionsheet.Item>
          <Divider w='94%' />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default SelectBookStatus;
