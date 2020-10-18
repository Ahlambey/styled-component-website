import React from "react";
import {
  Container,
  Form,
  FormButton,
  Text,
  FormH1,
  FormInput,
  FormLabel,
  FromContent,
  NavIcon,
  NavLogo,
} from "./SignUp.Element";

export default function SignUp() {
  return (
    <>
      <Container>
        <formWrap>
          <NavLogo to="/">
            <NavIcon />
            Dev:School
          </NavLogo>
          <FromContent>
            <Form>
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FromContent>
        </formWrap>
      </Container>
    </>
  );
}
