export interface HeaderList {
  success: boolean;
  data: Header[];
  message: string;
  statusCode: number;
}

export interface Header {
  sort: number;
  text: string;
  textAr: string;
  textEn: string;

  isShowHeader: boolean;
  parentId: any;
  isExternal: boolean;
  linkExternal: string;
  childs: Child[];
  id: number;
}

export interface Child {
  sort: number;
  text: string;
  isShowHeader: boolean;
  parentId: any;
  isExternal: boolean;
  linkExternal?: string;
  childs: any[];
  id: number;
}
