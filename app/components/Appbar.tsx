import {Link} from "react-router-native";
import {Text, View} from "react-native";
const AppBarTab = ({active, children, to}: {active: boolean; to: string; children: any}) => {
  return (
    <Link to={to}>
      <Text>{children}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View>
      <AppBarTab active to="/">
        Home
      </AppBarTab>
      <AppBarTab active to="/signin">
        SignIn
      </AppBarTab>
    </View>
  );
};

export default AppBar;
