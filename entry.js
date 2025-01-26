import { registerRootComponent } from 'expo';
import Navigation from './app/Navigation';

const Entry = () => {
  return <Navigation />;
};

registerRootComponent(Entry);