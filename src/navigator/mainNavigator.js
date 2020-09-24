import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList108712Navigator from '../features/ArticleList108712/navigator';
import ArticleList108711Navigator from '../features/ArticleList108711/navigator';
import ArticleList108710Navigator from '../features/ArticleList108710/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList108712: { screen: ArticleList108712Navigator },
ArticleList108711: { screen: ArticleList108711Navigator },
ArticleList108710: { screen: ArticleList108710Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
