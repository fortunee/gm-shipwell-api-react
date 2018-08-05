import { Switch, Route } from 'react-router-dom';
import PageTwo from './components/PageTwo';
import PageOne from './components/PageOne';

const routes = () => (
    <Switch>
        <Route path='/' component={PageOne}></Route>
        <Route path='/map' component={PageTwo}></Route>
    </Switch>
)

export default routes;