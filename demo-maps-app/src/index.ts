import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customerMap = new CustomMap('map');

customerMap.addMarker(user);
customerMap.addMarker(company);
