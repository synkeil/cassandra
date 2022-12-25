import React from "react";
import { View, Model, AppRegistry, asset } from "react-360";

function MyARExperience() {
  return (
    <View>
      <Model
        source={{
          obj: asset("my_model.obj"),
          mtl: asset("my_model.mtl"),
        }}
        lit={true}
      />
    </View>
  );
}

AppRegistry.registerComponent("MyARExperience", () => MyARExperience);

export default MyARExperience;
