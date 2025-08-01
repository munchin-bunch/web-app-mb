import { TbInfoCircle } from 'react-icons/tb'

interface LearnBoxProps {
  label?: string,
  children?: any
}

export const LearnBox = ({ label = 'LEARN', children }: LearnBoxProps) => {
  return (
    <div className="flex gap-1 items-center">
      <TbInfoCircle />
      <div>{label}</div>
    </div>
  )
}