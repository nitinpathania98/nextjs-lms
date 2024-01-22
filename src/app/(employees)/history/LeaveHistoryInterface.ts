export interface LeaveHistoryInterface {
    leaveHistory: {
        types: string;
        startDate: string;
        endDate: string;
        leaveReason: string;
        status: string;
    }[];
    types: string;
    startDate: string;
    endDate: string;
    leaveReason: string;
    status: string;
}