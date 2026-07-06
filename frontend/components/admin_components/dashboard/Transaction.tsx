import FilterBtn from "../ui/FilterBtn";
import StatusDot from "../ui/StatusDot";
import { DetailsButton } from "../ui/DetailsButton";

// transaction interface
interface Transaction {
  no: number;
  id: string;
  date: string;
  status: string;
  amount: string;
}
function Transaction({ transaction }: { transaction?: Transaction[] | null }) {
  const transactions: Transaction[] = [
    {
      no: 1,
      id: "#6545",
      date: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$64",
    },
    {
      no: 2,
      id: "#5412",
      date: "01 Oct | 11:29 am",
      status: "Pending",
      amount: "$557",
    },
    {
      no: 3,
      id: "#6622",
      date: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$156",
    },
    {
      no: 4,
      id: "#6462",
      date: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$265",
    },
    {
      no: 5,
      id: "#6462",
      date: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$265",
    },
  ];
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#23272E]">Transaction</h2>
        <FilterBtn />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="text-xs font-medium text-[#8B909A]">
              <th className="pb-3 font-medium">No</th>
              <th className="pb-3 font-medium">Id Customer</th>
              <th className="pb-3 font-medium">Order Date</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transaction
              ? transaction.map((t) => (
                  <tr
                    key={`${t.id}-${t.no}`}
                    className="border-t border-[#F0F0F2] text-sm text-[#23272E]"
                  >
                    <td className="py-4 text-[#6A717F]">{t.no}.</td>
                    <td className="py-4 font-medium">{t.id}</td>
                    <td className="py-4 text-[#6A717F]">{t.date}</td>
                    <td className="py-4">
                      <StatusDot status={t.status} />
                    </td>
                    <td className="py-4 text-right font-medium">{t.amount}</td>
                  </tr>
                ))
              : transactions.map((t) => (
                  <tr
                    key={`${t.id}-${t.no}`}
                    className="border-t border-[#F0F0F2] text-sm text-[#23272E]"
                  >
                    <td className="py-4 text-[#6A717F]">{t.no}.</td>
                    <td className="py-4 font-medium">{t.id}</td>
                    <td className="py-4 text-[#6A717F]">{t.date}</td>
                    <td className="py-4">
                      <StatusDot status={t.status} />
                    </td>
                    <td className="py-4 text-right font-medium">{t.amount}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <DetailsButton />
      </div>
    </section>
  );
}

export default Transaction;
