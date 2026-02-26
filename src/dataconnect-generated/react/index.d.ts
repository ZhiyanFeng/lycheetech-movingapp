import { GetUserData, GetUserVariables, GetUserByEmailData, GetUserByEmailVariables, ListMoversData, GetMoverData, GetMoverVariables, ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables, GetMovingRequestData, GetMovingRequestVariables, ListBidsForRequestData, ListBidsForRequestVariables, ListJobsForUserData, ListJobsForUserVariables, GetJobData, GetJobVariables, CreateUserData, CreateUserVariables, UpdateUserData, UpdateUserVariables, CreateMoverData, CreateMoverVariables, UpdateMoverData, UpdateMoverVariables, CreateVehicleData, CreateVehicleVariables, CreateMovingRequestData, CreateMovingRequestVariables, UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables, CreateBidData, CreateBidVariables, UpdateBidStatusData, UpdateBidStatusVariables, CreateJobData, CreateJobVariables, UpdateJobStatusData, UpdateJobStatusVariables, CreatePaymentData, CreatePaymentVariables, CreateInvoiceData, CreateInvoiceVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetUser(vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
export function useGetUser(dc: DataConnect, vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;

export function useGetUserByEmail(vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;
export function useGetUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;

export function useListMovers(options?: useDataConnectQueryOptions<ListMoversData>): UseDataConnectQueryResult<ListMoversData, undefined>;
export function useListMovers(dc: DataConnect, options?: useDataConnectQueryOptions<ListMoversData>): UseDataConnectQueryResult<ListMoversData, undefined>;

export function useGetMover(vars: GetMoverVariables, options?: useDataConnectQueryOptions<GetMoverData>): UseDataConnectQueryResult<GetMoverData, GetMoverVariables>;
export function useGetMover(dc: DataConnect, vars: GetMoverVariables, options?: useDataConnectQueryOptions<GetMoverData>): UseDataConnectQueryResult<GetMoverData, GetMoverVariables>;

export function useListMovingRequestsByStatus(vars: ListMovingRequestsByStatusVariables, options?: useDataConnectQueryOptions<ListMovingRequestsByStatusData>): UseDataConnectQueryResult<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;
export function useListMovingRequestsByStatus(dc: DataConnect, vars: ListMovingRequestsByStatusVariables, options?: useDataConnectQueryOptions<ListMovingRequestsByStatusData>): UseDataConnectQueryResult<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;

export function useGetMovingRequest(vars: GetMovingRequestVariables, options?: useDataConnectQueryOptions<GetMovingRequestData>): UseDataConnectQueryResult<GetMovingRequestData, GetMovingRequestVariables>;
export function useGetMovingRequest(dc: DataConnect, vars: GetMovingRequestVariables, options?: useDataConnectQueryOptions<GetMovingRequestData>): UseDataConnectQueryResult<GetMovingRequestData, GetMovingRequestVariables>;

export function useListBidsForRequest(vars: ListBidsForRequestVariables, options?: useDataConnectQueryOptions<ListBidsForRequestData>): UseDataConnectQueryResult<ListBidsForRequestData, ListBidsForRequestVariables>;
export function useListBidsForRequest(dc: DataConnect, vars: ListBidsForRequestVariables, options?: useDataConnectQueryOptions<ListBidsForRequestData>): UseDataConnectQueryResult<ListBidsForRequestData, ListBidsForRequestVariables>;

export function useListJobsForUser(vars: ListJobsForUserVariables, options?: useDataConnectQueryOptions<ListJobsForUserData>): UseDataConnectQueryResult<ListJobsForUserData, ListJobsForUserVariables>;
export function useListJobsForUser(dc: DataConnect, vars: ListJobsForUserVariables, options?: useDataConnectQueryOptions<ListJobsForUserData>): UseDataConnectQueryResult<ListJobsForUserData, ListJobsForUserVariables>;

export function useGetJob(vars: GetJobVariables, options?: useDataConnectQueryOptions<GetJobData>): UseDataConnectQueryResult<GetJobData, GetJobVariables>;
export function useGetJob(dc: DataConnect, vars: GetJobVariables, options?: useDataConnectQueryOptions<GetJobData>): UseDataConnectQueryResult<GetJobData, GetJobVariables>;

export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useCreateMover(options?: useDataConnectMutationOptions<CreateMoverData, FirebaseError, CreateMoverVariables>): UseDataConnectMutationResult<CreateMoverData, CreateMoverVariables>;
export function useCreateMover(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMoverData, FirebaseError, CreateMoverVariables>): UseDataConnectMutationResult<CreateMoverData, CreateMoverVariables>;

export function useUpdateMover(options?: useDataConnectMutationOptions<UpdateMoverData, FirebaseError, UpdateMoverVariables>): UseDataConnectMutationResult<UpdateMoverData, UpdateMoverVariables>;
export function useUpdateMover(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMoverData, FirebaseError, UpdateMoverVariables>): UseDataConnectMutationResult<UpdateMoverData, UpdateMoverVariables>;

export function useCreateVehicle(options?: useDataConnectMutationOptions<CreateVehicleData, FirebaseError, CreateVehicleVariables>): UseDataConnectMutationResult<CreateVehicleData, CreateVehicleVariables>;
export function useCreateVehicle(dc: DataConnect, options?: useDataConnectMutationOptions<CreateVehicleData, FirebaseError, CreateVehicleVariables>): UseDataConnectMutationResult<CreateVehicleData, CreateVehicleVariables>;

export function useCreateMovingRequest(options?: useDataConnectMutationOptions<CreateMovingRequestData, FirebaseError, CreateMovingRequestVariables>): UseDataConnectMutationResult<CreateMovingRequestData, CreateMovingRequestVariables>;
export function useCreateMovingRequest(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMovingRequestData, FirebaseError, CreateMovingRequestVariables>): UseDataConnectMutationResult<CreateMovingRequestData, CreateMovingRequestVariables>;

export function useUpdateMovingRequestStatus(options?: useDataConnectMutationOptions<UpdateMovingRequestStatusData, FirebaseError, UpdateMovingRequestStatusVariables>): UseDataConnectMutationResult<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;
export function useUpdateMovingRequestStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMovingRequestStatusData, FirebaseError, UpdateMovingRequestStatusVariables>): UseDataConnectMutationResult<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;

export function useCreateBid(options?: useDataConnectMutationOptions<CreateBidData, FirebaseError, CreateBidVariables>): UseDataConnectMutationResult<CreateBidData, CreateBidVariables>;
export function useCreateBid(dc: DataConnect, options?: useDataConnectMutationOptions<CreateBidData, FirebaseError, CreateBidVariables>): UseDataConnectMutationResult<CreateBidData, CreateBidVariables>;

export function useUpdateBidStatus(options?: useDataConnectMutationOptions<UpdateBidStatusData, FirebaseError, UpdateBidStatusVariables>): UseDataConnectMutationResult<UpdateBidStatusData, UpdateBidStatusVariables>;
export function useUpdateBidStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateBidStatusData, FirebaseError, UpdateBidStatusVariables>): UseDataConnectMutationResult<UpdateBidStatusData, UpdateBidStatusVariables>;

export function useCreateJob(options?: useDataConnectMutationOptions<CreateJobData, FirebaseError, CreateJobVariables>): UseDataConnectMutationResult<CreateJobData, CreateJobVariables>;
export function useCreateJob(dc: DataConnect, options?: useDataConnectMutationOptions<CreateJobData, FirebaseError, CreateJobVariables>): UseDataConnectMutationResult<CreateJobData, CreateJobVariables>;

export function useUpdateJobStatus(options?: useDataConnectMutationOptions<UpdateJobStatusData, FirebaseError, UpdateJobStatusVariables>): UseDataConnectMutationResult<UpdateJobStatusData, UpdateJobStatusVariables>;
export function useUpdateJobStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateJobStatusData, FirebaseError, UpdateJobStatusVariables>): UseDataConnectMutationResult<UpdateJobStatusData, UpdateJobStatusVariables>;

export function useCreatePayment(options?: useDataConnectMutationOptions<CreatePaymentData, FirebaseError, CreatePaymentVariables>): UseDataConnectMutationResult<CreatePaymentData, CreatePaymentVariables>;
export function useCreatePayment(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePaymentData, FirebaseError, CreatePaymentVariables>): UseDataConnectMutationResult<CreatePaymentData, CreatePaymentVariables>;

export function useCreateInvoice(options?: useDataConnectMutationOptions<CreateInvoiceData, FirebaseError, CreateInvoiceVariables>): UseDataConnectMutationResult<CreateInvoiceData, CreateInvoiceVariables>;
export function useCreateInvoice(dc: DataConnect, options?: useDataConnectMutationOptions<CreateInvoiceData, FirebaseError, CreateInvoiceVariables>): UseDataConnectMutationResult<CreateInvoiceData, CreateInvoiceVariables>;
