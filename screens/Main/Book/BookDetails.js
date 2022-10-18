import {
  FormControl,
  Stack,
  Input,
  HStack,
  Button,
  Divider,
  Select,
  CheckIcon,
  Box,
  Image
} from "native-base";
import { useState } from "react";

const BookDetail = () => {
  const [bookCondition, setBookCondition] = useState("");
  return (
    <>
      <FormControl.Label>DETAILS</FormControl.Label>
      <Stack padding={4} w="100%" backgroundColor="lightgray" borderRadius={5}>
        <FormControl>
          <HStack justifyContent="space-between" alignItems="center">
            <Stack>
              <FormControl.Label>Book Image(s)</FormControl.Label>
              <FormControl.HelperText>Maximum 3 images</FormControl.HelperText>
            </Stack>
            <Box flexDirection="row">
              <Box>
                <Button h="86px" w="66px">
                  +
                </Button>
              </Box>
            </Box>
          </HStack>
        </FormControl>
        <Divider my={3} bg="grey" />
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label>Language</FormControl.Label>
            <Input w="70%" placeholder="English" textAlign="right" />
          </HStack>
        </FormControl>
        <Divider my={2} bg="grey" />
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label pr={2}>Genre</FormControl.Label>
            <Input w="70%" placeholder="Fiction" textAlign="right" />
          </HStack>
        </FormControl>
        <Divider my={2} bg="grey" />
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label pr={2}>Edition</FormControl.Label>
            <Input w="70%" placeholder="Fifth" textAlign="right" />
          </HStack>
        </FormControl>
        <Divider my={2} bg="grey" />
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label pr={2}>ISBN</FormControl.Label>
            <Input w="70%" placeholder="9780771002229" textAlign="right" />
          </HStack>
        </FormControl>
        <Divider my={2} bg="grey" />
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label pr={2}>Book Condition</FormControl.Label>
            <Select
              minWidth="70%"
              placeholder="Select a condition"
              textAlign="right"
              selectedValue={bookCondition}
              onValueChange={condition => setBookCondition(condition)}
              _selectedItem={{
                endIcon: <CheckIcon color="teal.600" size="5" />
              }}
            >
              <Select.Item label="Like New" value="like-new" />
              <Select.Item
                label="Special Care Needed"
                value="special-care-needed"
              />
            </Select>
          </HStack>
        </FormControl>
      </Stack>
    </>
  );
};

export default BookDetail;
