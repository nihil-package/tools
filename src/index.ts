import { Calendar } from './calendar';
import { Common } from './common';
import { Jwt } from './jwt';
import { Bcrypt } from './bcrypt';

interface NihilTool {
  common: Common;
  calendar: Calendar;
  jwt: Jwt;
  bcrypt: Bcrypt;
}

const nihilTool: NihilTool = {
  common: new Common(),
  calendar: new Calendar(),
  jwt: new Jwt(),
  bcrypt: new Bcrypt(),
};

export {
  nihilTool
};
