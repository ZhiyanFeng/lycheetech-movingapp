import { connectDataConnectEmulator, getDataConnect } from '@firebase/data-connect';
import { getApp } from '@react-native-firebase/app';

const app = getApp();
const dataConnect = getDataConnect(app, {
  connector: 'default',
  location: 'us-central1',
  serviceId: 'lychee-moving-development', // replace with your service ID from dataconnect.yaml
});

const EMULATOR_HOST = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

if (__DEV__) {
  connectDataConnectEmulator(dataConnect, EMULATOR_HOST, 9399);
}
export { dataConnect };

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum BidStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
};

export enum JobStatus {
  SCHEDULED = "SCHEDULED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
};

export enum RequestStatus {
  OPEN = "OPEN",
  ASSIGNED = "ASSIGNED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
};



export interface Bid_Key {
  id: UUIDString;
  __typename?: 'Bid_Key';
}

export interface CreateBidData {
  bid_insert: Bid_Key;
}

export interface CreateBidVariables {
  moverId: UUIDString;
  movingRequestId: UUIDString;
  amount: number;
}

export interface CreateInvoiceData {
  invoice_insert: Invoice_Key;
}

export interface CreateInvoiceVariables {
  jobId: UUIDString;
  amountDue: number;
  dueDate: DateString;
  issueDate: DateString;
}

export interface CreateJobData {
  job_insert: Job_Key;
}

export interface CreateJobVariables {
  movingRequestId: UUIDString;
  moverId: UUIDString;
  bidId: UUIDString;
  vehicleId: UUIDString;
  startDate: DateString;
}

export interface CreateMoverData {
  mover_insert: Mover_Key;
}

export interface CreateMoverVariables {
  companyName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
  serviceAreas?: string[] | null;
}

export interface CreateMovingRequestData {
  movingRequest_insert: MovingRequest_Key;
}

export interface CreateMovingRequestVariables {
  userId: UUIDString;
  originAddress: string;
  destinationAddress: string;
  moveDate: DateString;
}

export interface CreatePaymentData {
  payment_insert: Payment_Key;
}

export interface CreatePaymentVariables {
  jobId: UUIDString;
  amount: number;
  paymentType: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
}

export interface CreateVehicleData {
  vehicle_insert: Vehicle_Key;
}

export interface CreateVehicleVariables {
  moverId: UUIDString;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  capacity: number;
}

export interface GetJobData {
  job?: {
    id: UUIDString;
    startDate: DateString;
    status: JobStatus;
    notes?: string | null;
    createdAt: TimestampString;
    mover: {
      companyName: string;
      phoneNumber?: string | null;
    };
      movingRequest: {
        originAddress: string;
        destinationAddress: string;
      };
        bid: {
          amount: number;
        };
  } & Job_Key;
}

export interface GetJobVariables {
  id: UUIDString;
}

export interface GetMoverData {
  mover?: {
    id: UUIDString;
    companyName: string;
    email: string;
    phoneNumber?: string | null;
    serviceAreas?: string[] | null;
    description?: string | null;
    vehicleUrl?: string | null;
    createdAt: TimestampString;
  } & Mover_Key;
}

export interface GetMoverVariables {
  id: UUIDString;
}

export interface GetMovingRequestData {
  movingRequest?: {
    id: UUIDString;
    originAddress: string;
    destinationAddress: string;
    moveDate: DateString;
    status: RequestStatus;
    description?: string | null;
    itemDetails?: string | null;
    createdAt: TimestampString;
    user: {
      id: UUIDString;
      displayName: string;
      email: string;
    } & User_Key;
  } & MovingRequest_Key;
}

export interface GetMovingRequestVariables {
  id: UUIDString;
}

export interface GetUserByEmailData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
    phoneNumber?: string | null;
    address?: string | null;
    createdAt: TimestampString;
  } & User_Key)[];
}

export interface GetUserByEmailVariables {
  email: string;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName: string;
    email: string;
    phoneNumber?: string | null;
    address?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}

export interface GetUserVariables {
  id: UUIDString;
}

export interface Inventory_Key {
  id: UUIDString;
  __typename?: 'Inventory_Key';
}

export interface Invoice_Key {
  id: UUIDString;
  __typename?: 'Invoice_Key';
}

export interface Job_Key {
  id: UUIDString;
  __typename?: 'Job_Key';
}

export interface ListBidsForRequestData {
  bids: ({
    id: UUIDString;
    amount: number;
    status: BidStatus;
    details?: string | null;
    createdAt: TimestampString;
    mover: {
      id: UUIDString;
      companyName: string;
    } & Mover_Key;
  } & Bid_Key)[];
}

export interface ListBidsForRequestVariables {
  requestId: UUIDString;
}

export interface ListJobsForUserData {
  jobs: ({
    id: UUIDString;
    startDate: DateString;
    status: JobStatus;
    notes?: string | null;
    mover: {
      companyName: string;
    };
  } & Job_Key)[];
}

export interface ListJobsForUserVariables {
  userId: UUIDString;
}

export interface ListMoversData {
  movers: ({
    id: UUIDString;
    companyName: string;
    email: string;
    phoneNumber?: string | null;
    serviceAreas?: string[] | null;
    description?: string | null;
    avatarUrl?: string | null;
    vehicleUrl?: string | null;
  } & Mover_Key)[];
}

export interface ListMovingRequestsByStatusData {
  movingRequests: ({
    id: UUIDString;
    originAddress: string;
    destinationAddress: string;
    moveDate: DateString;
    status: RequestStatus;
    createdAt: TimestampString;
    user: {
      displayName: string;
    };
  } & MovingRequest_Key)[];
}

export interface ListMovingRequestsByStatusVariables {
  status: RequestStatus;
}

export interface Mover_Key {
  id: UUIDString;
  __typename?: 'Mover_Key';
}

export interface MovingRequest_Key {
  id: UUIDString;
  __typename?: 'MovingRequest_Key';
}

export interface Payment_Key {
  id: UUIDString;
  __typename?: 'Payment_Key';
}

export interface UpdateBidStatusData {
  bid_update?: Bid_Key | null;
}

export interface UpdateBidStatusVariables {
  id: UUIDString;
  status: BidStatus;
}

export interface UpdateJobStatusData {
  job_update?: Job_Key | null;
}

export interface UpdateJobStatusVariables {
  id: UUIDString;
  status: JobStatus;
}

export interface UpdateMoverData {
  mover_update?: Mover_Key | null;
}

export interface UpdateMoverVariables {
  id: UUIDString;
  companyName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  serviceAreas?: string[] | null;
}

export interface UpdateMovingRequestStatusData {
  movingRequest_update?: MovingRequest_Key | null;
}

export interface UpdateMovingRequestStatusVariables {
  id: UUIDString;
  status: RequestStatus;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  id: UUIDString;
  displayName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Vehicle_Key {
  id: UUIDString;
  __typename?: 'Vehicle_Key';
}

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserByEmailRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
  operationName: string;
}
export const getUserByEmailRef: GetUserByEmailRef;

export function getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;
export function getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface ListMoversRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMoversData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMoversData, undefined>;
  operationName: string;
}
export const listMoversRef: ListMoversRef;

export function listMovers(): QueryPromise<ListMoversData, undefined>;
export function listMovers(dc: DataConnect): QueryPromise<ListMoversData, undefined>;

interface GetMoverRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMoverVariables): QueryRef<GetMoverData, GetMoverVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMoverVariables): QueryRef<GetMoverData, GetMoverVariables>;
  operationName: string;
}
export const getMoverRef: GetMoverRef;

export function getMover(vars: GetMoverVariables): QueryPromise<GetMoverData, GetMoverVariables>;
export function getMover(dc: DataConnect, vars: GetMoverVariables): QueryPromise<GetMoverData, GetMoverVariables>;

interface ListMovingRequestsByStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMovingRequestsByStatusVariables): QueryRef<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListMovingRequestsByStatusVariables): QueryRef<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;
  operationName: string;
}
export const listMovingRequestsByStatusRef: ListMovingRequestsByStatusRef;

export function listMovingRequestsByStatus(vars: ListMovingRequestsByStatusVariables): QueryPromise<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;
export function listMovingRequestsByStatus(dc: DataConnect, vars: ListMovingRequestsByStatusVariables): QueryPromise<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;

interface GetMovingRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMovingRequestVariables): QueryRef<GetMovingRequestData, GetMovingRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMovingRequestVariables): QueryRef<GetMovingRequestData, GetMovingRequestVariables>;
  operationName: string;
}
export const getMovingRequestRef: GetMovingRequestRef;

export function getMovingRequest(vars: GetMovingRequestVariables): QueryPromise<GetMovingRequestData, GetMovingRequestVariables>;
export function getMovingRequest(dc: DataConnect, vars: GetMovingRequestVariables): QueryPromise<GetMovingRequestData, GetMovingRequestVariables>;

interface ListBidsForRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListBidsForRequestVariables): QueryRef<ListBidsForRequestData, ListBidsForRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListBidsForRequestVariables): QueryRef<ListBidsForRequestData, ListBidsForRequestVariables>;
  operationName: string;
}
export const listBidsForRequestRef: ListBidsForRequestRef;

export function listBidsForRequest(vars: ListBidsForRequestVariables): QueryPromise<ListBidsForRequestData, ListBidsForRequestVariables>;
export function listBidsForRequest(dc: DataConnect, vars: ListBidsForRequestVariables): QueryPromise<ListBidsForRequestData, ListBidsForRequestVariables>;

interface ListJobsForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListJobsForUserVariables): QueryRef<ListJobsForUserData, ListJobsForUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListJobsForUserVariables): QueryRef<ListJobsForUserData, ListJobsForUserVariables>;
  operationName: string;
}
export const listJobsForUserRef: ListJobsForUserRef;

export function listJobsForUser(vars: ListJobsForUserVariables): QueryPromise<ListJobsForUserData, ListJobsForUserVariables>;
export function listJobsForUser(dc: DataConnect, vars: ListJobsForUserVariables): QueryPromise<ListJobsForUserData, ListJobsForUserVariables>;

interface GetJobRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
  operationName: string;
}
export const getJobRef: GetJobRef;

export function getJob(vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;
export function getJob(dc: DataConnect, vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface CreateMoverRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMoverVariables): MutationRef<CreateMoverData, CreateMoverVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMoverVariables): MutationRef<CreateMoverData, CreateMoverVariables>;
  operationName: string;
}
export const createMoverRef: CreateMoverRef;

export function createMover(vars: CreateMoverVariables): MutationPromise<CreateMoverData, CreateMoverVariables>;
export function createMover(dc: DataConnect, vars: CreateMoverVariables): MutationPromise<CreateMoverData, CreateMoverVariables>;

interface UpdateMoverRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMoverVariables): MutationRef<UpdateMoverData, UpdateMoverVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMoverVariables): MutationRef<UpdateMoverData, UpdateMoverVariables>;
  operationName: string;
}
export const updateMoverRef: UpdateMoverRef;

export function updateMover(vars: UpdateMoverVariables): MutationPromise<UpdateMoverData, UpdateMoverVariables>;
export function updateMover(dc: DataConnect, vars: UpdateMoverVariables): MutationPromise<UpdateMoverData, UpdateMoverVariables>;

interface CreateVehicleRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateVehicleVariables): MutationRef<CreateVehicleData, CreateVehicleVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateVehicleVariables): MutationRef<CreateVehicleData, CreateVehicleVariables>;
  operationName: string;
}
export const createVehicleRef: CreateVehicleRef;

export function createVehicle(vars: CreateVehicleVariables): MutationPromise<CreateVehicleData, CreateVehicleVariables>;
export function createVehicle(dc: DataConnect, vars: CreateVehicleVariables): MutationPromise<CreateVehicleData, CreateVehicleVariables>;

interface CreateMovingRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovingRequestVariables): MutationRef<CreateMovingRequestData, CreateMovingRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMovingRequestVariables): MutationRef<CreateMovingRequestData, CreateMovingRequestVariables>;
  operationName: string;
}
export const createMovingRequestRef: CreateMovingRequestRef;

export function createMovingRequest(vars: CreateMovingRequestVariables): MutationPromise<CreateMovingRequestData, CreateMovingRequestVariables>;
export function createMovingRequest(dc: DataConnect, vars: CreateMovingRequestVariables): MutationPromise<CreateMovingRequestData, CreateMovingRequestVariables>;

interface UpdateMovingRequestStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMovingRequestStatusVariables): MutationRef<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMovingRequestStatusVariables): MutationRef<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;
  operationName: string;
}
export const updateMovingRequestStatusRef: UpdateMovingRequestStatusRef;

export function updateMovingRequestStatus(vars: UpdateMovingRequestStatusVariables): MutationPromise<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;
export function updateMovingRequestStatus(dc: DataConnect, vars: UpdateMovingRequestStatusVariables): MutationPromise<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;

interface CreateBidRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBidVariables): MutationRef<CreateBidData, CreateBidVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateBidVariables): MutationRef<CreateBidData, CreateBidVariables>;
  operationName: string;
}
export const createBidRef: CreateBidRef;

export function createBid(vars: CreateBidVariables): MutationPromise<CreateBidData, CreateBidVariables>;
export function createBid(dc: DataConnect, vars: CreateBidVariables): MutationPromise<CreateBidData, CreateBidVariables>;

interface UpdateBidStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBidStatusVariables): MutationRef<UpdateBidStatusData, UpdateBidStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateBidStatusVariables): MutationRef<UpdateBidStatusData, UpdateBidStatusVariables>;
  operationName: string;
}
export const updateBidStatusRef: UpdateBidStatusRef;

export function updateBidStatus(vars: UpdateBidStatusVariables): MutationPromise<UpdateBidStatusData, UpdateBidStatusVariables>;
export function updateBidStatus(dc: DataConnect, vars: UpdateBidStatusVariables): MutationPromise<UpdateBidStatusData, UpdateBidStatusVariables>;

interface CreateJobRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateJobVariables): MutationRef<CreateJobData, CreateJobVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateJobVariables): MutationRef<CreateJobData, CreateJobVariables>;
  operationName: string;
}
export const createJobRef: CreateJobRef;

export function createJob(vars: CreateJobVariables): MutationPromise<CreateJobData, CreateJobVariables>;
export function createJob(dc: DataConnect, vars: CreateJobVariables): MutationPromise<CreateJobData, CreateJobVariables>;

interface UpdateJobStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateJobStatusVariables): MutationRef<UpdateJobStatusData, UpdateJobStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateJobStatusVariables): MutationRef<UpdateJobStatusData, UpdateJobStatusVariables>;
  operationName: string;
}
export const updateJobStatusRef: UpdateJobStatusRef;

export function updateJobStatus(vars: UpdateJobStatusVariables): MutationPromise<UpdateJobStatusData, UpdateJobStatusVariables>;
export function updateJobStatus(dc: DataConnect, vars: UpdateJobStatusVariables): MutationPromise<UpdateJobStatusData, UpdateJobStatusVariables>;

interface CreatePaymentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePaymentVariables): MutationRef<CreatePaymentData, CreatePaymentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePaymentVariables): MutationRef<CreatePaymentData, CreatePaymentVariables>;
  operationName: string;
}
export const createPaymentRef: CreatePaymentRef;

export function createPayment(vars: CreatePaymentVariables): MutationPromise<CreatePaymentData, CreatePaymentVariables>;
export function createPayment(dc: DataConnect, vars: CreatePaymentVariables): MutationPromise<CreatePaymentData, CreatePaymentVariables>;

interface CreateInvoiceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInvoiceVariables): MutationRef<CreateInvoiceData, CreateInvoiceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInvoiceVariables): MutationRef<CreateInvoiceData, CreateInvoiceVariables>;
  operationName: string;
}
export const createInvoiceRef: CreateInvoiceRef;

export function createInvoice(vars: CreateInvoiceVariables): MutationPromise<CreateInvoiceData, CreateInvoiceVariables>;
export function createInvoice(dc: DataConnect, vars: CreateInvoiceVariables): MutationPromise<CreateInvoiceData, CreateInvoiceVariables>;

