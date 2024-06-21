import { NavigationProp } from '@react-navigation/native';
import React from 'react';

type NavigationPropType = {navigation: NavigationProp<any>};
type DefaultPageType = React.FC<NavigationPropType>

export { NavigationPropType, DefaultPageType };