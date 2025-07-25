import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import PoliticaScreen from './screens/politica';

const Drawer = createDrawerNavigator();

export default function AppLayout() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            drawerLabel: 'Página Inicial',
          }}
        />
        <Drawer.Screen
          name="Politica"
          component={PoliticaScreen}
          options={{
            title: 'Política de Privacidade',
            drawerLabel: 'Política de Privacidade',
          }}
        />
      </Drawer.Navigator>
  );
}
