import AuthAssist from "@/components/AuthAssist";
import authButtonStyle from "@/css/authButtonStyle";
import authEmailPageStyle from "@/css/authEmailPageStyle";
import authInputStyle from "@/css/authInputStyle";
import authLableStyle from "@/css/authLableStyle";
import registerUser from "@/hooks/useRegisterUser";
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const useUserRegistration = (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password != confirmPassword) {
      Alert.alert("Password ain't matching");
    } else {
      registerUser(email, password);
    }
  };

  return (
    <SafeAreaView style={authEmailPageStyle.container}>
      <View>
        <Text style={authEmailPageStyle.headerText}>Let's get started</Text>
      </View>

      <View style={authEmailPageStyle.inputSection}>
        <Text style={authLableStyle.label}>E-mail</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your email"
          onChangeText={setEmail}
        />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password"
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={authLableStyle.label}>Confirm Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password again"
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <AuthAssist
          AssistText="Already have an account? "
          LinkText="Login"
          route="/auth/UserLogin"
        />
        <Pressable
          style={authButtonStyle.button}
          onPress={() => useUserRegistration(email, password, confirmPassword)}
          accessibilityRole="button"
        >
          <Text style={authButtonStyle.buttonText}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EmailAuth;
