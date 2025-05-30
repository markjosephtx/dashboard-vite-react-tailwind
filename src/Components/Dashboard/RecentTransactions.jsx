import React from 'react'
import { FiDollarSign, FiArrowUpRight, FiMoreHorizontal } from 'react-icons/fi'

function RecentTransactions() {
  return (
    <div className='col-span-12 p-4 rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-white shadow-sm hover:shadow-md transition-all duration-300'>
        <div className='mb-4 flex items-center justify-between'>
            <h3 className='flex items-center gap-1.5 font-medium'>
                <FiDollarSign /> Recent Transactions
            </h3>
            <button className='text-xs text-neutral-800 hover:underline'>
                See all
            </button>
        </div>
        <table className='w-full table-auto'>
            <TableHead />
            <tbody>
                <TableRow 
                    cusId="#45691"
                    sku="Pro 1 Month"
                    date="Aug 2nd"
                    price="$9.95"
                    order={1}
                />
                <TableRow 
                    cusId="#47565"
                    sku="Pro 3 Month"
                    date="Aug 3rd"
                    price="$10.66"
                    order={2}
                />
                <TableRow 
                    cusId="#34335"
                    sku="Pro 1 Month"
                    date="Aug 2nd"
                    price="$15.76"
                    order={3}
                />
                <TableRow 
                    cusId="#45691"
                    sku="Pro 1 Month"
                    date="Aug 1st"
                    price="$8.96"
                    order={4}
                />
                <TableRow 
                    cusId="#45691"
                    sku="Pro 1 Month"
                    date="Aug 1st"
                    price="$12.88"
                    order={5}
                />
            </tbody>
        </table>
    </div>
  )
}
const TableHead = () => {
    return (
        <thead>
            <tr className='text-xs font-normal text-neutral-400'>
                <th className='text-left font-medium'>Customer ID</th>
                <th className='text-left font-medium'>SKU</th>
                <th className='text-left font-medium'>Date</th>
                <th className='text-left font-medium'>Price</th>
                <th className='w-8'></th>
            </tr>
        </thead>
    )
}

const TableRow = ({ 
    cusId, 
    sku, 
    date, 
    price,
    order,
} = {
    cusId: string,
    sku: string,
    date: string,
    price: string,
    order: number,
}) => {
    return (
        <tr className={order % 2 ? "bg-neutral-100 text-sm" : "text-sm"}>
            <td className='p-1.5'>
                <a href="#" className='text-neutral-950 font-semibold underline flex items-center gap-1'>
                {cusId} <FiArrowUpRight /></a>
            </td>
            <td className='p-1.5 text-neutral-700'>{sku}</td>
            <td className='p-1.5 text-neutral-700'>{date}</td>
            <td className='p-1.5 text-neutral-700'>{price}</td>
            <td className='p-1.5 text-neutral-700'>
                <button className='hover:bg-neutral-900 hover:text-white transition-colors grid place-content-center rounded text-sm size-8'>
                    <FiMoreHorizontal />
                </button>
            </td>
        </tr>
    )
}

export default RecentTransactions