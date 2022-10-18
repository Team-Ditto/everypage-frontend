import { FormControl, Stack, Input, TextArea, Button, Box } from "native-base";
import { ScrollView } from "react-native";
import BookDetail from "./BookDetails";
import ReadingStatus from "./ReadingStatus";

const AddBook = () => {
  return (
    <>
      <Stack m={4}>
        <ScrollView>
          <FormControl required>
            <FormControl.Label>TITLE</FormControl.Label>
            <Input bg="lightgrey" />
          </FormControl>
          <FormControl required my={2}>
            <FormControl.Label>AUTHOR</FormControl.Label>
            <Input bg="lightgrey" />
          </FormControl>
          <BookDetail />
          <ReadingStatus />
          <FormControl my={2} mt={4}>
            <FormControl.Label>ADDITIONAL INFORMAITON</FormControl.Label>
            <TextArea placeholder="Note" height={30} bg="lightgrey" />
          </FormControl>
          <Button my={2}>Save</Button>
        </ScrollView>
      </Stack>
    </>
  );
};

export default AddBook;
