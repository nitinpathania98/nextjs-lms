import Sidebar from "@/app/components/Sidebar";
import { LeaveHistoryInterface } from "./LeaveHistoryInterface";
import Navbar from "@/app/components/Navbar";

const LeaveHistoryTemplate: React.FC<LeaveHistoryInterface> = ({ leaveHistory }) => {

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-auto">
                <Navbar />
                <div className="mx-auto  max-w-screen-2xl p-4 md:p-2 2xl:p-5">
                    <div className='w-auto  '>
                        <div className='p-1 '>
                            <div className="bg-gray-200 p-4 rounded-md shadow-md">

                                <h2 className="text-xl md:text-2xl  mb-4">Leave History</h2>
                                <table className="w-full table-auto overflow-x-auto ">
                                    <thead>
                                        <tr className="bg-gray-300 ">
                                            <th className="border-2 border-black px-4 py-2">Leave Type</th>
                                            <th className="border-2 border-black px-4 py-2">Start Date</th>
                                            <th className="border-2 border-black px-4 py-2">Duration</th>
                                            <th className="border-2 border-black px-4 py-2">Reason</th>
                                            <th className="border-2 border-black px-4 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='overflow-y-auto text-center'>

                                        {leaveHistory.length > 0 && leaveHistory.map((result: any, index) => (
                                            <tr key={result.id || index} >
                                                <td className="border border-black px-4 py-2">{result.leaveType}</td>
                                                <td className="border border-black px-4 py-2">{result.startDate}</td>
                                                <td className="border border-black px-4 py-2">{result.duration} days</td>
                                                <td className="border border-black px-4 py-2">{result.purpose}</td>
                                                <td className="border border-black px-4 py-2">{result.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveHistoryTemplate;