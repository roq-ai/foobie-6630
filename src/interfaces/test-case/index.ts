import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TestCaseInterface {
  id?: string;
  title: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface TestCaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  status?: string;
  organization_id?: string;
}
