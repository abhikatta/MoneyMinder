import { Timestamp } from "firebase/firestore";

export interface Mind {
  id: string;
  timestamp: Timestamp;
  transactionDone: boolean;
  doc_id: string;
  personName: string;
  amount: string;
  type: string;
}
