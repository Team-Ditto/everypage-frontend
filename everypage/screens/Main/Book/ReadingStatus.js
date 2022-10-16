import {
  Radio,
  CheckIcon,
  Divider,
  FormControl,
  Stack,
  HStack,
  Input,
  Pressable,
  Switch
} from "native-base";
import { useState } from "react";

const ReadingStatus = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <FormControl.Label mt={4}>READING STATUS</FormControl.Label>
      <Stack
        backgroundColor="lightgray"
        padding={4}
        borderRadius={5}
        _focus={{ textStyle: "bold" }}
      >
        <FormControl>
          <Pressable
            onPress={() => setIsPressed("to-read")}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl.Label>To Read</FormControl.Label>
            {isPressed == "to-read" && <CheckIcon size="5" />}
          </Pressable>
          <Divider bg="grey" my={3} />
          <Pressable
            onPress={() => setIsPressed("reading")}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl.Label>Reading</FormControl.Label>
            {isPressed == "reading" && <CheckIcon size="5" />}
          </Pressable>
          <Divider bg="grey" my={3} />
          <Pressable
            onPress={() => setIsPressed("finished")}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl.Label>Finished</FormControl.Label>
            {isPressed == "finished" && <CheckIcon size="5" />}
          </Pressable>
        </FormControl>
      </Stack>
      <Stack backgroundColor="lightgray" mt={2} padding={4} borderRadius={5}>
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label>Location</FormControl.Label>
            <Input w="70%" placeholder="Living Room" textAlign="right" />
          </HStack>
        </FormControl>
        <Divider my={2} bg="grey" />
        <FormControl>
          <HStack justifyContent="space-between">
            <Stack>
              <FormControl.Label>Sharable</FormControl.Label>
              <FormControl.HelperText>
                Book is available for other users to request{" "}
              </FormControl.HelperText>
            </Stack>
            <Switch />
          </HStack>
        </FormControl>
      </Stack>
    </>
  );
};

export default ReadingStatus;
