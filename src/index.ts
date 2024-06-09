import { Calendar } from './calendar';
import { Common } from './common';
import { Jwt } from './jwt';

interface NihilTool {
  common: Common;
  calendar: Calendar;
  jwt: Jwt;
}

const Nihil: NihilTool = {
  common: new Common(),
  calendar: new Calendar(),
  jwt: new Jwt(),
};

export {
  Nihil
};
