export interface DataResponse {
  status: number;
  dataInfo?: InfoResponse;
}

export interface InfoResponse {
  accounts: [
    {
      accountId: string;
      accountName: string;
      accountNameKana: string;
      accountNumber: string;
    }
  ];
}
