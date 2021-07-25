import firebase from 'firebase'

type MatchType = {
  id?: string;
  uid?: string;
  userRanking?: number;
  opponentID?: string;
  opponentRanking?: number;
  winnerID?: string;
  op1Diff?: number;
  op2Diff?: number;
  isApproved?: boolean;
  createdAt?: firebase.firestore.Timestamp;
}

export default MatchType