import React from 'react';
import Restaurant from "./screens/Restaurant.tsx";
import Bank from "./screens/Bank.tsx";
import { SafeAreaView } from "react-native";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      { false && <Restaurant /> }
      { true && <Bank /> }
    </SafeAreaView>
  );
}

export default App;
