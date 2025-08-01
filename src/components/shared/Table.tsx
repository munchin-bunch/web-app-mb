"use client"

interface TableItemProps {
  key: string,
  label: string,  
  headerStyle?: string,
  contentStyle?: string,
  render?: any
}

interface TableProps {
  fields?: TableItemProps[],
  rows?: any[],
  className?: string
}

export const Table = ({ fields = [], rows = [], className = '' }: TableProps) => {
  return (
    <table className={`table-auto w-full border-collapsed b text-left ${className}`}>
      <thead className="border-b border-blue-primary">
        <tr>
          {fields.map((f) => <th className={f?.headerStyle} key={f?.key}>{f?.label}</th>)}
        </tr>
      </thead>
      <tbody>
      {
        rows.map((r, rKey) => (
          <tr key={`tr-${rKey}`} className="border-b border-blue-primary last:border-0 hover:bg-blue-primary hover:text-dark-primary">
            {
              fields.map((f, fKey) => <td className={f?.contentStyle} key={`${rKey}-${fKey}`}>{f?.render ? f?.render(r, rKey) : r[f?.key]}</td>)
            }
          </tr>
        ))
      }
      </tbody>
    </table>
  )  
}