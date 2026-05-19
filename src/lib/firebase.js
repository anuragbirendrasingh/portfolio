import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);







// {
//   "type": "service_account",
//   "project_id": "portfolio-d0223",
//   "private_key_id": "a702e62c127929241b9b9462f9a840fb96c23f82",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkdrpsfGU+FaFd\nIQiudcbPuqzKRF+HG7jhthYagHA2rCfMyZ7n3W7WCfW1yamggkMjAkOAGLJoeB65\nHPuAoGHal6f2jOHW7h5dn/4XF2kTgyTJ28C4QGyZt+wq0MxKHe4M9mskmTc0R0qF\nDrtZo8qn0MmGn5S/Wcbgo7grXo0cZIsYPb1LvhPPzgYP26PrdOPMYfZBQc4hKqeb\nfidkzZd0meiYtvsxB+BzMCEjERnsRO7/bBEYD/QU+e8nZeLhl1p17bWM+8UCESZW\n7ydoaN3qQH5AeJHcmhCqJcLgcD4ElSWxx5LiC+o0MhH0XLjc3DU3jhoi2ZkEWc6J\nQw2Rim/DAgMBAAECggEAA7FUwz3RyiCTNHOa7cvgMGbZHVuGp5J0RsEfYu3yVw/r\nftoiEsOyiuTDWxcRk3SJTF5vJI+pZdYYnoBrlzpCqDVShKMqKPjEvsZqXptcdR8z\nMsMX4yszJQpvp5BzndBpOWpJApPcHPTi0/T+OOeIE9eIxtiLbvZ1lDKo3nRrh7Ej\nAenr27uB1oU6s6V8SU7qbqeXzwSfnsK2JEa4DDWinEdHD2aStTQKl/YLH+d8W+V/\nPu+1dJhV/zbAg35v41KN3qG2jbIqD3YUFR+ws/eNyOHShNmj8hddjk88F4nb8qBe\nyk9emlvhnLWsDPHB32B+zWtdN4ID4a7mdZGtQuMGxQKBgQDY1ZTeFdp0JkMFs1pg\nbE4PXSb2RJwvnU2C0pe8hRKZ0P0+3jtUQ1fChtDX6ETKMhdj3Gub859kTf3jPICX\n7GSAmbsj5ceBQjM6t9lK3BQ2kAC7Bb6nv4hJImPd5ojjkgbbVP40uPgFZ7SX9QoO\nMQNjEgdyEX0rEBDvB01bqSOKFwKBgQDCK4ijxbNVi5uqAXwkpwsKF7fU0o63wt78\nxfd/U/+9uCj/5o/QX2whDezMJx66espEg//H0C+9sn/gus0LU2okBuSvKEDrhhV/\nM5wyuVhDaqu6wwFz2/MifL8gxmqeIAmmtdUgRgv7qQmQ2rw2bz2bRfFdXnoyrqWT\nUC4XaNSPNQKBgFbJjc8iIhCxK8xBUCAd2VSO7UROi9EG/fopvi/nd113Z5VdL5P3\nbE3g1gBE6Buh1vjSRYPjC94C1Wa5VaL5K/TJEz04ABU9YPHUmjU7Rx/bnV892mSb\n5bmX+S7c0dd8ICBzsVd63VKUgpT7r+2kMn3Zvn8qftXYlV6GprDUTvQ7AoGAIBex\n7d+vVGROxjqYmjZBzNk+uR5UGGtND9pondL0YhceL62b94TOCmiSyutsWMYSyGBI\n1m3CdkgaerplSYnv8SRyh8DPeh4fT3boSjn4LKxk1emFQ/EGrpyPuosQ9DG3ZqaH\nI15wfJfjzN1aXmTkedWFnzkOWXIkS8Tk2VmqSEECgYEAhAfbSKJozbNyk5zRDyhW\nVgT3dtazjlOq5BrjZjSEg0jk6nn2o4bnP0uJNE1jjy+7Cr8s0MgKYwvoySB/wxIY\n8SEkbUrnNV9kvcPXYJOwj9cG5ax6gnoSDhNP3wtFdZqxTHWS9ZKS9S8XFQq+PThe\nV/5bbP5d30OVsMl21IDnc78=\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-fbsvc@portfolio-d0223.iam.gserviceaccount.com",
//   "client_id": "111165456117854890766",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40portfolio-d0223.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }

