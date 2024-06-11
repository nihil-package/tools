import { Calendar } from './calendar';
import { Common } from './common';
import { Jwt } from './jwt';

interface NihilTool {
  common: Common;
  calendar: Calendar;
  jwt: Jwt;
}

const nihilTool: NihilTool = {
  common: new Common(),
  calendar: new Calendar(),
  jwt: new Jwt(),
};

export {
  nihilTool
};
