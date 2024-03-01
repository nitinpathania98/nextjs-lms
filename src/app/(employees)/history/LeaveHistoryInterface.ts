export interface LeaveHistoryInterface {
    id: any;
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
    openEditPopup: (e:any)=>void;
    onDelete: (e:any)=>void;
}