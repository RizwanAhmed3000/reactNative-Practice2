import Article from '../Screens/Article';
import Home from '../Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}

export default MyDrawer