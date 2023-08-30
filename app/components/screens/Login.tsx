import {Button, View, StyleSheet, Text} from "react-native";
import {Formik, useField} from "formik";
import React from "react";

import StyledTextInput from "../StyledTextInput";
import {loginValidationSchema} from "../../validationSchemas/login";
import {FormValues, FormikInputValueProps} from "../../types";
const initialValues: FormValues = {
  email: "",
  password: "",
};
const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});
const FormikInputValue: React.FC<FormikInputValueProps> = ({name, ...props}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value: string) => {
          helpers.setValue(value);
        }}
        {...props}
      />
      {meta.error && <Text>{meta.error}</Text>}
    </>
  );
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue secureTextEntry name="password" placeholder="password" />
            <Button title="Log In" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
