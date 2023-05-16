import { createDrawerNavigator } from "@react-navigation/drawer";
import { Acercade } from "../src/components/Acercade";
import { Cart } from "../src/components/Cart";
import { Contacto } from "../src/components/Contacto";
import { Inicio } from "../src/components/Inicio";

const Menu = createDrawerNavigator();

export function MenuComponet() {
  return (
    <Menu.Navigator>
      <Menu.Screen name="Inicio" component={Inicio} />
      <Menu.Screen name="Contacto" component={Contacto} />
      <Menu.Screen name="Acercade" component={Acercade} />
    </Menu.Navigator>
  );
}
