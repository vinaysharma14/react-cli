import { toKebabCase } from '../utils';
import { commonTemplates } from './common';

export const routerTemplate = (routes: string[], ts: boolean, defaultExport: boolean) => {
  const {
    cmpExport,
    rootImport,
    cmpDefinition,
  } = commonTemplates('Routes', ts, defaultExport);

  return `${rootImport}import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

${routes.map((route) => `import ${route} from './${route}';`).join('\n')}

${cmpDefinition}
  <Router>
    <Switch>
${routes.map((route) => `      <Route path="/${toKebabCase(route)}" component={${route}} />`).join('\n')}
    </Switch>
  </Router>
);
${cmpExport}`;
}