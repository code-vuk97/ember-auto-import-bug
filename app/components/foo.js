import Component from '@glimmer/component';
import { join } from 'lodash';

export default class FooComponent extends Component {

  get bar () {
    return join(['lodash', 'imported'], '~');
  }
}
