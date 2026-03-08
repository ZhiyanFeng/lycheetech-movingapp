/**
 * Firebase Data Connect service
 *
 * All operations are pre-bound to the shared DataConnect instance so callers
 * don't need to pass it manually.
 */

import { dataConnect } from '../config/firebase-web';

// ── Generated SDK operations ──────────────────────────────────────────────────
import {
  // Mutations
  createUser,
  updateUser,
  createMover,
  updateMover,
  createVehicle,
  createMovingRequest,
  updateMovingRequestStatus,
  createBid,
  updateBidStatus,
  createJob,
  updateJobStatus,
  createPayment,
  createInvoice,
  // Queries
  getUser,
  getUserByEmail,
  listMovers,
  getMover,
  listMovingRequestsByStatus,
  getMovingRequest,
  listBidsForRequest,
  listJobsForUser,
  getJob,
  // Variable / data types
  type CreateUserVariables,
  type UpdateUserVariables,
  type CreateMoverVariables,
  type UpdateMoverVariables,
  type CreateVehicleVariables,
  type CreateMovingRequestVariables,
  type UpdateMovingRequestStatusVariables,
  type CreateBidVariables,
  type UpdateBidStatusVariables,
  type CreateJobVariables,
  type UpdateJobStatusVariables,
  type CreatePaymentVariables,
  type CreateInvoiceVariables,
  type GetUserVariables,
  type GetUserByEmailVariables,
  type GetMoverVariables,
  type ListMovingRequestsByStatusVariables,
  type GetMovingRequestVariables,
  type ListBidsForRequestVariables,
  type ListJobsForUserVariables,
  type GetJobVariables,
} from '@dataconnect/generated';

// ── Mutations ─────────────────────────────────────────────────────────────────

export const dcCreateUser = (vars: CreateUserVariables) =>
  createUser(dataConnect, vars);

export const dcUpdateUser = (vars: UpdateUserVariables) =>
  updateUser(dataConnect, vars);

export const dcCreateMover = (vars: CreateMoverVariables) =>
  createMover(dataConnect, vars);

export const dcUpdateMover = (vars: UpdateMoverVariables) =>
  updateMover(dataConnect, vars);

export const dcCreateVehicle = (vars: CreateVehicleVariables) =>
  createVehicle(dataConnect, vars);

export const dcCreateMovingRequest = (vars: CreateMovingRequestVariables) =>
  createMovingRequest(dataConnect, vars);

export const dcUpdateMovingRequestStatus = (vars: UpdateMovingRequestStatusVariables) =>
  updateMovingRequestStatus(dataConnect, vars);

export const dcCreateBid = (vars: CreateBidVariables) =>
  createBid(dataConnect, vars);

export const dcUpdateBidStatus = (vars: UpdateBidStatusVariables) =>
  updateBidStatus(dataConnect, vars);

export const dcCreateJob = (vars: CreateJobVariables) =>
  createJob(dataConnect, vars);

export const dcUpdateJobStatus = (vars: UpdateJobStatusVariables) =>
  updateJobStatus(dataConnect, vars);

export const dcCreatePayment = (vars: CreatePaymentVariables) =>
  createPayment(dataConnect, vars);

export const dcCreateInvoice = (vars: CreateInvoiceVariables) =>
  createInvoice(dataConnect, vars);

// ── Queries ───────────────────────────────────────────────────────────────────

export const dcGetUser = (vars: GetUserVariables) =>
  getUser(dataConnect, vars);

export const dcGetUserByEmail = (vars: GetUserByEmailVariables) =>
  getUserByEmail(dataConnect, vars);

export const dcListMovers = () =>
  listMovers(dataConnect);

export const dcGetMover = (vars: GetMoverVariables) =>
  getMover(dataConnect, vars);

export const dcListMovingRequestsByStatus = (vars: ListMovingRequestsByStatusVariables) =>
  listMovingRequestsByStatus(dataConnect, vars);

export const dcGetMovingRequest = (vars: GetMovingRequestVariables) =>
  getMovingRequest(dataConnect, vars);

export const dcListBidsForRequest = (vars: ListBidsForRequestVariables) =>
  listBidsForRequest(dataConnect, vars);

export const dcListJobsForUser = (vars: ListJobsForUserVariables) =>
  listJobsForUser(dataConnect, vars);

export const dcGetJob = (vars: GetJobVariables) =>
  getJob(dataConnect, vars);

// Re-export the raw DataConnect instance for advanced usage (e.g. React hooks)
export { dataConnect };
