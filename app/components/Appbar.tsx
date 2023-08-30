import {Link, useLocation} from "react-router-native";
import {Text, View} from "react-native";
const AppBarTab = ({children, to}: {to: string; children: any}) => {
  return (
    <Link to={to}>
      <Text>{children}</Text>
    </Link>
  );
};

const AppBar = () => {
  const router = useLocation();

  return (
    <View>
      {router.pathname === "/" ? (
        <AppBarTab to="/signin">SignIn</AppBarTab>
      ) : (
        <AppBarTab to="/">Back</AppBarTab>
      )}
    </View>
  );
};

export default AppBar;
