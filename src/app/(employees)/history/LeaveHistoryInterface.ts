export interface LeaveHistoryInterface {
    leaveHistory: {
        leaveType: string;
        startDate: string;
        endDate: string;
        reason: string;
        status: string;
    }[];
    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string;
    status: string;
}