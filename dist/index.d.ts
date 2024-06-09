import { Calendar } from './calendar';
import { Common } from './common';
import { Jwt } from './jwt';
interface NihilTool {
    common: Common;
    calendar: Calendar;
    jwt: Jwt;
}
declare const Nihil: NihilTool;
export { Nihil };
