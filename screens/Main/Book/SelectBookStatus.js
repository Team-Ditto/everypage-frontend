import { Text, Divider, Pressable, Actionsheet, Box } from 'native-base';

const SelectBookStatus = props => {
  const { showModal, handleBorrowingStatusSelected, handleBadgePressed } = props;
  return (
    <>
      <Actionsheet isOpen={showModal} onClose={handleBadgePressed} >
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
